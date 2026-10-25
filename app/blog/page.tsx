import type { Metadata } from "next";
import Script from "next/script";
import PhotoHero from "@/components/PhotoHero";
import CtaBanner from "@/components/CtaBanner";
import BlogCard from "@/components/blog/BlogCard";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { getBlogPostsSortedByDate } from "@/lib/blog";
import { siteInfo } from "@/lib/data";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

const title = "Blog | Fresh Loom Carpet Cleaning";
const description =
  "Carpet and upholstery cleaning tips, advice and updates from Fresh Loom Carpet Cleaning, serving Glasgow and surrounding areas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: "/blog",
    type: "website",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-home.jpg"],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogIndexPage() {
  const posts = getBlogPostsSortedByDate();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteInfo.name,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  return (
    <>
      <Script id="blog-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(blogSchema)}
      </Script>
      <Script id="blog-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <PhotoHero title="Blog" breadcrumbLabel="Blog" image="/images/services/carpet-cleaning.jpg" />

      <section className="py-16 lg:py-24">
        <div className="container-page">
          {posts.length > 0 ? (
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="text-center max-w-xl mx-auto py-12">
              <h2 className="text-2xl font-bold text-navy-dark mb-3">
                New articles coming soon
              </h2>
              <p className="text-slate-600">
                We&apos;re working on our first posts. Check back soon for carpet and upholstery
                cleaning tips and advice from {siteInfo.name}.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
