// Run: node scripts/export-gut-content.mjs
// Writes readable Markdown drafts + the image-prompt table to IBS Clinic/New Pages/. Source of truth stays in lib/gut-pages/*.ts.
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const here = import.meta.dirname;
const OUT = path.resolve(here, "../../../New Pages");
const load = async (f) => Object.values(await import(`../lib/gut-pages/${f}.ts`))[0];
const FILES = [
  "pelvic-floor-dysfunction",
  "toilet-posture-for-constipation",
  "ibs-diet",
  "gas-and-bloating",
  "ibs-and-metabolic-health",
  "laxative-dependency",
];
const { GUT_REFERENCES } = await import("../lib/gut-pages/references.ts");

const bullets = (a) => a.map((x) => `- ${x}`).join("\n");

function block(b) {
  const h = `## ${b.title}\n\n`;
  switch (b.kind) {
    case "prose":
      return h + b.paras.join("\n\n") + (b.image ? `\n\n> Image: \`${b.image.file}\` (${b.image.alt})` : "");
    case "steps":
      return (
        h +
        (b.intro ? `${b.intro}\n\n` : "") +
        b.steps.map((s, i) => `${i + 1}. **${s.title}**. ${s.body}`).join("\n") +
        (b.loop ? `\n\n_${b.loop}_` : "") +
        (b.note ? `\n\n${b.note}` : "")
      );
    case "list":
      return h + (b.intro ? `${b.intro}\n\n` : "") + bullets(b.items) + (b.outro ? `\n\n${b.outro}` : "");
    case "versus":
      return (
        h +
        (b.intro ? `${b.intro}\n\n` : "") +
        `**${b.left.title}**\n${bullets(b.left.items)}\n\n**${b.right.title}**\n${bullets(b.right.items)}` +
        (b.outro ? `\n\n${b.outro}` : "")
      );
    case "note":
      return `> **${b.title}**\n> ${b.body}`;
  }
}

const rows = [];
mkdirSync(path.join(OUT, "content"), { recursive: true });

for (const f of FILES) {
  const p = await load(f);
  for (const img of [p.hero, ...p.blocks.map((b) => b.image).filter(Boolean)]) {
    rows.push(`| \`${img.file}\` | [[content/${p.slug}\\|${p.slug}]] | ${img === p.hero ? "Hero" : "In section"} | ${img.aspect.replace(/ /g, "")} | ${img.alt} | ${img.prompt} |`);
  }
  const md = [
    `---\ntype: page-draft\nurl: /${p.slug}/\nstatus: built locally, doctor review pending\nupdated: ${p.updated}\ntags: [page-draft, ymyl]\n---`,
    `# ${p.h1}`,
    `**Meta title:** ${p.metaTitle}\n**Meta description:** ${p.metaDescription}`,
    `> ${p.lead}${p.hinglish ? `\n>\n> _${p.hinglish}_` : ""}`,
    `## In short\n\n${bullets(p.summary)}`,
    ...p.blocks.map(block),
    `## Questions people ask\n\n${p.faq.map((q) => `**${q.q}**\n${q.a}`).join("\n\n")}`,
    `## Sources\n\n${p.refs.map((r) => `- ${GUT_REFERENCES[r].citation} ${GUT_REFERENCES[r].url}`).join("\n")}`,
    `Read next: ${p.next.map((s) => `[[content/${s}|${s}]]`).join(", ")}\n\nBack to [[README]].`,
  ].join("\n\n");
  writeFileSync(path.join(OUT, "content", `${p.slug}.md`), md + "\n");
}

const prompts = `---
type: image-brief
status: all 9 images added and wired (2026-10-11)
tags: [images]
---
# Image prompts for the new gut pages

The finished images live in \`Q2/#stagingsite/public/gut-health/\` under exactly these file names (WebP, under 150 KB each, 1600 px wide). Each is wired into its \`ImageSlot\` through \`src\` in \`lib/gut-pages/<page>.ts\`. To swap an image, replace the file with the same name. The prompts below are kept so images can be regenerated in the same style.

**Rules for every image:** no text or labels inside the picture, no brand names, nothing graphic or embarrassing, Indian adults, calm and non-judgmental. Brand palette: Fresh Growth green \`#81AF12\`, Clinic Charcoal \`#333333\`, off-white. Alt text below is already in the page.

| File | Page | Placement | Ratio | Alt text | Generation prompt |
|---|---|---|---|---|---|
${rows.join("\n")}

Back to [[README]].
`;
writeFileSync(path.join(OUT, "image-prompts.md"), prompts);
console.log(`wrote ${FILES.length} drafts and ${rows.length} image prompts`);
