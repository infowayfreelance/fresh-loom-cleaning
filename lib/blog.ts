export type BlogPostSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date, e.g. "2026-10-25"
  image: string;
  imageAlt: string;
  content: BlogPostSection[];
};

// Add a new post by appending an object to this array — the blog index and
// /blog/[slug] route pick it up automatically (listing, sitemap and schema
// are all generated from this file).
export const blogPosts: BlogPost[] = [];

export function getBlogPostsSortedByDate(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
