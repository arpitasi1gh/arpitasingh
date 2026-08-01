export default function VisualSeparator() {

  const dotPattern = {
    backgroundImage: `radial-gradient(var(--color-border) 1.25px, transparent 1.25px)`,
    backgroundSize: '16px 16px',

    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
  };

  return (
    <div className="relative w-full bg-surface py-24 my-12 border-y border-border/60 overflow-hidden group">

      <div className="absolute inset-0 pointer-events-none opacity-25 transition-opacity duration-500 group-hover:opacity-40" style={dotPattern}/>


      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,var(--color-border)_0%,transparent_50%)] transition-opacity duration-700" />


      <div className="relative max-w-5xl mx-auto px-6">
        <div className="h-12 flex items-center justify-center">
          <div className="w-1.5 h-1.5 border border-border/40 rotate-45 transition-transform duration-700 group-hover:rotate-180" />
        </div>
      </div>

    </div>
  );
}