import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { AUTHOR_SLUGS, getDoctor } from "@/lib/doctors";
import { getPostsByAuthor, readingTimeMins } from "@/lib/blog";

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

export const dynamicParams = false;

export function generateStaticParams() {
  return AUTHOR_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getDoctor(slug);
  if (!author) return {};
  return {
    title: `${author.name} — ${author.creds} | IBS Clinic`,
    description: `${author.name} (${author.creds}, ${author.exp}) at IBS Clinic. ${author.speciality}. Read their articles on IBS symptoms, diet, and treatment.`,
    alternates: { canonical: `/author/${author.slug}` },
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getDoctor(slug);
  if (!author || !author.isAuthor) notFound();

  const posts = getPostsByAuthor(author.slug);

  return (
    <>
      <SimpleHeader />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: author.name },
        ]}
      />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Image
                src={author.image}
                alt={author.name}
                width={120}
                height={120}
                className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-white"
              />
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-green">
                  Author
                </p>
                <h1 className="mt-1 font-heading text-h1 text-charcoal">
                  {author.name}
                </h1>
                <p className="mt-2 font-medium text-charcoal-soft">
                  {author.creds} · {author.exp}
                </p>
                <p className="text-sm text-charcoal-soft">{author.speciality}</p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              {author.bio}
            </p>
          </div>
        </section>

        {/* POSTS BY AUTHOR */}
        <section className="container-page py-16 md:py-20">
          <h2 className="font-heading text-h2 text-charcoal">
            Articles by {author.name}
          </h2>
          {posts.length > 0 ? (
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="flex">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="card flex flex-col no-underline transition-shadow hover:shadow-modal"
                  >
                    <span className="mb-3 inline-block w-fit rounded-full bg-green-tint px-3 py-1 text-xs font-semibold text-green">
                      {post.category}
                    </span>
                    <h3 className="font-heading text-base text-charcoal">
                      {post.title}
                    </h3>
                    <p className="mt-2 grow text-sm text-charcoal-soft">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 border-t border-gray-border pt-3 text-xs text-charcoal-soft">
                      {readingTimeMins(post)} min read
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-charcoal-soft">Articles coming soon.</p>
          )}
        </section>

        {/* CTA */}
        <section className="container-page pb-16 md:pb-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">
              Consult our specialist team
            </h2>
            <p className="mt-3 opacity-90">
              Book a free 15-minute evaluation. A senior IBS doctor reviews your
              case before the call — no pressure to enrol.
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
