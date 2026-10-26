import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 group h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-wide text-accent-dark mb-2">
          {formatBlogDate(post.date)}
        </time>
        <h3 className="text-xl font-bold text-navy-dark mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent-dark transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-slate-600 mb-4 flex-1">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-accent-dark hover:text-navy-dark transition-colors"
        >
          Read More <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
