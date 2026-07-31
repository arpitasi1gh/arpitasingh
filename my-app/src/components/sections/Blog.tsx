import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blogPosts";

function HomeBlogRow({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-5 border-b border-border transition-colors hover:bg-surface/5 px-2 -mx-2 rounded-lg last:border-0"
    >
      <div className="flex flex-col gap-1 w-full sm:max-w-[85%]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] text-muted-foreground tracking-widest shrink-0">
            {(index + 1).toString().padStart(2, '0')}.
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary font-semibold shrink-0">
            {post.tags[0]}
          </span>
        </div>

        <h3 className="font-display text-lg leading-snug tracking-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <div className="flex items-center gap-2 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest mt-1">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-end w-full sm:w-auto text-muted-foreground group-hover:text-primary transition-colors">
        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <div id="blog" className="w-full max-w-7xl px-5 py-20 sm:py-28 mx-auto pb-24">
        
        {/* Header Section - Now matches your dedicated /blog page */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Writing
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              Notes on <span className="gradient-text">building things.</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-sans">
              Thoughts on engineering, AI, and building products.
            </p>
          </div>

          {/* Clean, minimal 'View all' link */}
          <Link href="/blog" className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            View all posts
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* The List of Latest 3 Posts */}
        <div className="flex flex-col w-full">
          {latestPosts.map((post, i) => (
            <HomeBlogRow key={post.slug} post={post} index={i} />
          ))}
        </div>

      </div>
    </>
  );
}