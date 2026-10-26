import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import BlogContent from "@/components/blog/BlogContent";
import { blogPosts, formatBlogDate, getBlogPost, getBlogPostFaqs } from "@/lib/blog";
import { siteInfo } from "@/lib/data";
import { SITE_URL, BUSINESS_ID, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} | ${siteInfo.name}`;

  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      images: [{ url: post.image, width: post.imageWidth, height: post.imageHeight }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${slug}`,
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ]);

  const faqs = getBlogPostFaqs(post);
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }
      : null;

  return (
    <>
      <Script id="blog-post-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleSchema)}
      </Script>
      {faqSchema ? (
        <Script id="blog-post-faq-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      ) : null}
      <Script id="blog-post-breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbs)}
      </Script>

      <section className="relative overflow-hidden bg-navy-dark">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-transparent" />

        <div className="container-page relative py-16 lg:py-20 max-w-3xl">
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-4">
            <Link href="/" className="hover:text-accent transition-colors uppercase">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-accent transition-colors uppercase">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-accent uppercase">{post.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <time dateTime={post.date} className="text-sm font-medium text-white/70">
            {formatBlogDate(post.date)}
          </time>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <BlogContent sections={post.content} />

          <div className="pt-10 mt-10 border-t border-black/5">
            <Link href="/blog" className="font-semibold text-accent-dark hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
