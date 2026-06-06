import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/simple-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllPosts, readingTimeMins } from "@/lib/blog";
import { getDoctor } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "IBS Blog — Expert Guides on Symptoms, Diet & Treatment | IBS Clinic",
  description:
    "Evidence-led guides on irritable bowel syndrome — symptoms, types, diet, home remedies, Ayurvedic treatment, and medication, written by IBS Clinic's specialist doctors.",
  alternates: { canonical: "/blogs" },
};

const PHONE_DISPLAY = "+91 750 033 4343";
const PHONE_TEL = "+917500334343";

export default function BlogHubPage() {
  const posts = getAllPosts();

  return (
    <>
      <SimpleHeader />
      <main className="bg-white">
        {/* HERO */}
        <section className="bg-green-tint">
          <div className="container-page py-16 md:py-20">
            <p className="text-sm font-medium uppercase tracking-wide text-green">
              IBS Blog
            </p>
            <h1 className="mt-3 font-heading text-h1 text-charcoal">
              Understanding & managing IBS
            </h1>
            <p className="mt-6 max-w-3xl text-lead text-charcoal-soft">
              Clear, evidence-led guides written by our specialist team — on IBS
              symptoms, types, diet, natural remedies, Ayurvedic care, and
              medication. Everything you need to understand your gut and take the
              next step.
            </p>
          </div>
        </section>

        {/* POST GRID */}
        <section className="container-page py-16 md:py-20">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const author = getDoctor(post.authorSlug);
              return (
                <li key={post.slug} className="flex">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="card flex flex-col no-underline transition-shadow hover:shadow-modal"
                  >
                    <span className="mb-3 inline-block w-fit rounded-full bg-green-tint px-3 py-1 text-xs font-semibold text-green">
                      {post.category}
                    </span>
                    <h2 className="font-heading text-lg text-charcoal">
                      {post.title}
                    </h2>
                    <p className="mt-2 grow text-sm text-charcoal-soft">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 border-t border-gray-border pt-3 text-xs text-charcoal-soft">
                      {author ? author.name : "IBS Clinic"} ·{" "}
                      {readingTimeMins(post)} min read
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA */}
        <section className="container-page pb-16 md:pb-20">
          <div className="card mx-auto max-w-3xl bg-charcoal text-white">
            <h2 className="font-heading text-h2">Have questions about your gut?</h2>
            <p className="mt-3 opacity-90">
              Reading is a great start — but a personalised plan is better. Book a
              free 15-minute evaluation with a senior IBS doctor.
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
