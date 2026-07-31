import { blogPosts } from "@/data/blogPosts";
import { ArrowIcon } from "@/components/ui/Icons";
import Link from "next/link";

import { compileMDX } from "next-mdx-remote/rsc";

// Tell Next.js to pre-generate the blog pages at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Add 'async' and 'await params' to handle Next.js 15+
export default async function BlogPostPage({ params } : { params: Promise<{ slug: string }> | { slug: string } }) {

  // Safely await the params in case it's a Promise
  const { slug } = await params;

  // Find the specific post that matches the URL slug
  const post = blogPosts.find((p) => p.slug === slug);

  // If someone types a wrong URL, give them a 404
  if (!post) {
    return (
      <div className="w-full max-w-6xl mx-auto px-5 py-20 text-center text-muted-foreground">
        Post not found. 
        <br />
        <Link href="/blog" className="text-primary hover:underline mt-2 inline-block">
          Go back to blog
        </Link>
      </div>
    );
  }

  const { content } = await compileMDX<{ frontmatter: Record<string, unknown> }>({
    source: post.content.trim(),
  });

  return (
    <div className="w-full max-w-3xl px-5 py-20 sm:py-28 mx-auto">
      
      <Link href="/blog" className="inline-flex items-center gap-2 mb-8 text-sm text-muted-foreground hover:text-primary transition-colors group">
        <ArrowIcon className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform"/>
        Back to all posts
      </Link>

      <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] mb-4">
        <span className="gradient-text">{post.title}</span>
      </h1>
      
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-border"/>
        <span>{post.readTime}</span>
        <span className="w-1 h-1 rounded-full bg-border"/>
        <span className="text-primary">{post.tags[0]}</span>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-base leading-relaxed text-foreground/90 first-letter:text-3xl first-letter:font-bold first-letter:text-primary mb-">
          {post.excerpt} 
        </p>
        {content}
      </div>

    </div>
  );
}