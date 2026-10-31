import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArticleBody } from "@/components/article-body";
import {
  BLOG_SLUGS,
  getPost,
  getRelatedPosts,
  readingTimeMins,
  formatDate,
} from "@/lib/blog";
import { getDoctor } from "@/lib/doctors";
import { JsonLd } from "@/components/json-ld";
import {
  absUrl,
  assetUrl,
  faqNode,
  graph,
  IBS_CONDITION,
  ORG_ID,
  personId,
  personNode,
  webPageNode,
} from "@/lib/structured-data";
const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blogs/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url: `/blogs/${post.slug}/`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      images: post.heroImage
        ? [
            {
              url: post.heroImage.src,
              width: post.heroImage.width,
              height: post.heroImage.height,
              alt: post.heroImage.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getDoctor(post.authorSlug);
  const reviewer = post.reviewerSlug ? getDoctor(post.reviewerSlug) : undefined;
  const related = getRelatedPosts(post.slug, 3);
  const dateModified = post.dateModified ?? post.datePublished;
  const wasUpdated = dateModified !== post.datePublished;

  const path = `/blogs/${post.slug}`;
  const postSchema = graph(
    webPageNode({
      path,
      name: post.metaTitle,
      description: post.metaDescription,
      type: "WebPage",
      hasBreadcrumb: true,
      dateModified,
      primaryImage: post.heroImage?.src,
    }),
    {
      "@type": "BlogPosting",
      "@id": `${absUrl(path)}#article`,
      headline: post.title,
      description: post.metaDescription,
      image: post.heroImage
        ? {
            "@type": "ImageObject",
            url: assetUrl(post.heroImage.src),
            width: post.heroImage.width,
            height: post.heroImage.height,
          }
        : undefined,
      author: author ? { "@id": personId(author.slug) } : undefined,
      publisher: { "@id": ORG_ID },
      datePublished: post.datePublished,
      dateModified,
      inLanguage: "en-IN",
      articleSection: post.category,
      mainEntityOfPage: { "@id": absUrl(path) },
      about: IBS_CONDITION,
    },
    author ? personNode(author, true) : null,
    faqNode(path, post.faq ?? []),
  );

  return (
    <>
      <SimpleHeader />
      <Breadcrumb
        path={path}
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: post.title },
        ]}
      />
      <main className="bg-white">
        <JsonLd data={postSchema} />

        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-12 md:py-16">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              {post.category}
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-h1 text-charcoal">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-charcoal-soft">
              {author ? (
                <Link href={`/author/${author.slug}`} className="font-medium">
                  {author.name}
                </Link>
              ) : (
                "IBS Clinic"
              )}
              {" · "}
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              {wasUpdated ? (
                <>
                  {" · Updated "}
                  <time dateTime={dateModified}>{formatDate(dateModified)}</time>
                </>
              ) : null}
              {" · "}
              {readingTimeMins(post)} min read
            </p>
            {reviewer ? (
              <p className="blog-hero__reviewer mt-2 text-sm text-charcoal-soft">
                Medically reviewed by{" "}
                <Link href="/doctors/" className="font-medium">
                  {reviewer.name}
                </Link>
                , {reviewer.creds}
              </p>
            ) : null}
          </div>
        </section>

        {/* BODY */}
        <article className="container-page py-12 md:py-16">
          <div className="mx-auto max-w-prose">
            {post.heroImage ? (
              <Image
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                width={post.heroImage.width}
                height={post.heroImage.height}
                priority
                sizes="(max-width: 768px) 100vw, 720px"
                className={`blog-hero__image mb-10 h-auto rounded-[16px] border border-gray-border ${
                  post.heroImage.height >= post.heroImage.width ? "mx-auto w-full max-w-[480px]" : "w-full"
                }`}
              />
            ) : null}
            <ArticleBody markdown={post.bodyMarkdown} />

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-14">
                <h2 className="font-heading text-h2 text-charcoal">
                  Frequently asked questions
                </h2>
                <div className="mt-6 divide-y divide-gray-border rounded-[16px] border border-gray-border bg-white">
                  {post.faq.map((f) => (
                    <details key={f.q} className="group p-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                        <span className="font-heading font-semibold text-charcoal">
                          {f.q}
                        </span>
                        <span className="text-2xl leading-none text-green transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-charcoal-soft">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* AUTHOR CARD */}
            {author && (
              <aside className="mt-14 flex flex-col gap-4 rounded-[16px] border border-gray-border bg-gray-light p-6 sm:flex-row sm:items-start">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-green">
                    Written by
                  </p>
                  <Link
                    href={`/author/${author.slug}`}
                    className="font-heading text-lg text-charcoal no-underline hover:text-green"
                  >
                    {author.name}
                  </Link>
                  <p className="text-sm font-medium text-charcoal-soft">
                    {author.creds} · {author.exp}
                  </p>
                  <p className="mt-2 text-sm text-charcoal-soft">{author.bio}</p>
                </div>
              </aside>
            )}
          </div>
        </article>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="bg-gray-light">
            <div className="container-page py-16 md:py-20">
              <h2 className="font-heading text-h2 text-charcoal">Keep reading</h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug} className="flex">
                    <Link
                      href={`/blogs/${r.slug}`}
                      className="card flex flex-col no-underline transition-shadow hover:shadow-modal"
                    >
                      <span className="mb-3 inline-block w-fit rounded-full bg-green-tint px-3 py-1 text-xs font-semibold text-green">
                        {r.category}
                      </span>
                      <h3 className="font-heading text-base text-charcoal">
                        {r.title}
                      </h3>
                      <p className="mt-2 grow text-sm text-charcoal-soft">
                        {r.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container-page py-16 md:py-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">
              Get a plan built around your gut
            </h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation with a senior IBS doctor. We review
              your case before the call — no pressure to enrol.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book-an-appointment" className="btn-primary">
                Book your free evaluation
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn-secondary bg-white">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
