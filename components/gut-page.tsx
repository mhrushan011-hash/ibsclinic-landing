import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { LeadForm } from "@/components/lead-form";
import { ImageSlot } from "@/components/image-slot";
import { InlineText } from "@/components/inline-text";
import { GutSteps } from "@/components/gut-steps";
import { GutTopicsGrid } from "@/components/gut-topics-grid";
import { DOCTORS } from "@/lib/doctors";
import { GUT_REFERENCES } from "@/lib/gut-pages/references";
import type { Block, GutPageData } from "@/lib/gut-pages/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibsclinic.com";
const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";
const WA = "https://wa.me/917500334343";
const BOOK_LABEL = "Book your free IBS evaluation";

const NOTE_TONE = {
  info: "gut-note gut-note--info",
  care: "gut-note gut-note--care",
} as const;

export function gutMetadata(page: GutPageData): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}/` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, type: "article" },
  };
}

function isoDate(human: string): string {
  return new Date(human).toLocaleDateString("en-CA");
}

function Tick() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green text-charcoal"
    >
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M4 10l4 4 8-8" />
      </svg>
    </span>
  );
}

function BlockSection({ block, tone }: { block: Block; tone: string }) {
  switch (block.kind) {
    case "prose":
      return (
        <section id={block.id} className={tone}>
          <div className={`container-page py-14 md:py-20 ${block.image ? "grid items-center gap-10 lg:grid-cols-12" : ""}`}>
            <div className={block.image ? "lg:col-span-7" : "max-w-prose"}>
              <h2 className="font-heading text-h2 text-charcoal">{block.title}</h2>
              <div className="mt-5 max-w-prose space-y-4 text-charcoal-soft">
                {block.paras.map((p) => (
                  <p key={p}>
                    <InlineText text={p} />
                  </p>
                ))}
              </div>
            </div>
            {block.image && (
              <div className="lg:col-span-5">
                <ImageSlot slot={block.image} />
              </div>
            )}
          </div>
        </section>
      );
    case "steps":
      return (
        <section id={block.id} className="bg-green-tint">
          <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-h2 text-charcoal">{block.title}</h2>
              {block.intro && <p className="mt-3 max-w-prose text-charcoal-soft">{block.intro}</p>}
              {block.note && <p className="mt-6 max-w-prose text-sm text-charcoal-soft">{block.note}</p>}
            </div>
            <div className="lg:col-span-7">
              <GutSteps steps={block.steps} loop={block.loop} />
            </div>
          </div>
        </section>
      );
    case "list":
      return (
        <section id={block.id} className={tone}>
          <div className="container-page py-14 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">{block.title}</h2>
            {block.intro && <p className="mt-3 max-w-prose text-charcoal-soft">{block.intro}</p>}
            <ul className={`mt-8 grid gap-4 ${block.items.length > 4 ? "md:grid-cols-2" : "max-w-2xl"}`}>
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <Tick />
                  <span>
                    <InlineText text={item} />
                  </span>
                </li>
              ))}
            </ul>
            {block.outro && <p className="mt-8 max-w-prose text-charcoal-soft">{block.outro}</p>}
          </div>
        </section>
      );
    case "versus":
      return (
        <section id={block.id} className={tone}>
          <div className="container-page py-14 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">{block.title}</h2>
            {block.intro && <p className="mt-3 max-w-prose text-charcoal-soft">{block.intro}</p>}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[block.left, block.right].map((col, i) => (
                <div key={col.title} className={i === 0 ? "gut-versus" : "gut-versus gut-versus--alt"}>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">{col.title}</h3>
                  <ul className="mt-4 space-y-3 text-charcoal-soft">
                    {col.items.map((item) => (
                      <li key={item} className="gut-versus__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {block.outro && <p className="mt-8 max-w-prose text-charcoal-soft">{block.outro}</p>}
          </div>
        </section>
      );
    case "note":
      return (
        <section id={block.id} className="bg-white">
          <div className="container-page py-8 md:py-10">
            <aside className={NOTE_TONE[block.tone]}>
              <h2 className="gut-note__title">{block.title}</h2>
              <p className="gut-note__body">{block.body}</p>
            </aside>
          </div>
        </section>
      );
  }
}

export function GutPage({ page }: { page: GutPageData }) {
  const author = DOCTORS.kamal;
  const url = `${SITE_URL}/${page.slug}/`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url,
    inLanguage: ["en-IN", "hi-IN"],
    dateModified: isoDate(page.updated),
    author: { "@type": "Person", name: author.name, jobTitle: "Founder, IBS Clinic" },
    publisher: { "@type": "MedicalOrganization", name: "IBS Clinic" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SimpleHeader />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gut health" }, { label: page.kicker }]} />
      <main className="gut-main bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <section className="bg-green-tint">
          <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium uppercase tracking-wide text-charcoal-soft">{page.kicker}</p>
              <h1 className="mt-3 font-heading text-h1 text-charcoal">{page.h1}</h1>
              <p className="mt-5 max-w-prose text-lead text-charcoal-soft">{page.lead}</p>
              {page.hinglish && (
                <p lang="hi" className="mt-3 max-w-prose text-lead text-charcoal">
                  {page.hinglish}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#evaluation-form" className="btn-primary">
                  {BOOK_LABEL}
                </a>
                <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ImageSlot slot={page.hero} priority />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-page py-10 md:py-14">
            <div className="gut-summary">
              <h2 className="font-heading text-xl font-semibold text-charcoal">In short</h2>
              <ul className="mt-4 space-y-3">
                {page.summary.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-charcoal">
                    <Tick />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-charcoal-soft">
                Written by <Link href="/author/kamal/">{author.name}</Link>, Founder of IBS Clinic. Last updated {page.updated}.
              </p>
            </div>
          </div>
        </section>

        {page.blocks.map((b, i) => (
          <BlockSection key={b.id} block={b} tone={i % 2 === 0 ? "bg-white" : "bg-gray-light"} />
        ))}

        <section className="bg-gray-light">
          <div className="container-page py-14 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">Questions people ask</h2>
            <div className="mt-8 divide-y divide-gray-border rounded-[16px] border border-gray-border bg-white">
              {page.faq.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span lang={f.hi ? "hi" : undefined} className="font-heading font-semibold text-charcoal">
                      {f.q}
                    </span>
                    <span className="text-2xl leading-none text-charcoal transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p lang={f.hi ? "hi" : undefined} className="mt-3 text-charcoal-soft">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="evaluation-form" className="bg-white">
          <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-h2 text-charcoal">Talk to a doctor about your own pattern</h2>
              <p className="mt-3 max-w-prose text-charcoal-soft">
                Our doctors review your case before the call. The evaluation is free and takes about 15 minutes, by phone or video, from anywhere in India.
              </p>
              <div className="mt-8">
                <LeadForm variant="default" />
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="card bg-charcoal text-white">
                <h3 className="font-heading text-h3">Prefer to speak first?</h3>
                <p className="mt-3 opacity-90">Call or message us. Mon to Sat, 9 AM to 8 PM IST.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`tel:${PHONE_TEL}`} className="btn-secondary bg-white">
                    Call {PHONE_DISPLAY}
                  </a>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-secondary bg-white">
                    WhatsApp us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-green-tint">
          <div className="container-page py-14 md:py-20">
            <h2 className="font-heading text-h2 text-charcoal">Read next</h2>
            <div className="mt-8">
              <GutTopicsGrid only={page.next} />
            </div>
            <p className="mt-8 text-sm text-charcoal-soft">
              Related reading: <Link href="/blogs/ibs-symptoms/">IBS symptoms</Link>, <Link href="/blogs/types-of-ibs/">types of IBS</Link> and our <Link href="/science/">science</Link> page.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-page py-10 md:py-14">
            <h2 className="font-heading text-lg font-semibold text-charcoal">Sources</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-charcoal-soft">
              {page.refs.map((id) => {
                const r = GUT_REFERENCES[id];
                return (
                  <li key={id}>
                    {r.citation}{" "}
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      Open source
                    </a>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 max-w-prose text-xs text-charcoal-soft">
              This page is for education and does not replace medical advice. Our approach, including the 2-inch heel method and our Ayurvedic powders, reflects our clinic&rsquo;s experience and is not a claim from a clinical trial. See our{" "}
              <Link href="/medical-disclaimer/">medical disclaimer</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
