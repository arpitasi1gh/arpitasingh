export default function Blog() {
  return (
    <>
      <div id="blog" className="w-full max-w-7xl px-5 py-20 sm:py-28 mx-auto min-h-screen">

        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Writing</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.08]">
            <span className="gradient-text">Latest Posts</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-sans">Thoughts on engineering, AI, and building products.</p>
        </div>
        
      </div>
    </>
  );
};