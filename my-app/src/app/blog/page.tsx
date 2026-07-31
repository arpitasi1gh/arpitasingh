import { blogPosts, BlogPost } from "@/data/blogPosts";
import Link from "next/link";


export function BlogRow({ post, index } : { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b border-border transition-colors hover:bg-surface/5 px-3 -mx-3 last:border-0">
      
      <div className="flex flex-col w-full sm:max-w-[75%] gap-1">
        
        <div className="flex items-center gap-3 mb-0.5">
          <span className="font-mono text-[0.65rem] text-muted-foreground tracking-widest shrink-0">
            {(index + 1).toString().padStart(2, '0')}.
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary font-semibold shrink-0">
            {post.tags[0]}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl leading-snug tracking-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 mt-1.5 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-end w-full sm:w-auto h-full pt-1 text-muted-foreground group-hover:text-primary transition-colors">
        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
      </div>

    </Link>
  );
}


export default function BlogPage() {
  return (
    <div className="w-full max-w-6xl px-5 py-20 sm:py-28 mx-auto">

      <div className="max-w-2xl mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Writing
        </span>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
          Notes on <span className="gradient-text">building things.</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground font-sans">
          Thoughts on engineering, AI, and building products.
        </p>
      </div>

      <div className="flex flex-col w-full">
        {blogPosts.map((post, i) => (
          <BlogRow key={post.slug} post={post} index={i} />
        ))}
      </div>

    </div>
  );
}