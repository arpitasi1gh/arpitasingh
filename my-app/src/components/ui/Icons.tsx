export function Github() {
  return (
    <a href="https://github.com/arpitasi1gh" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground border border-border dark:border-white/40 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> {/* bg-black text-white border border-transparent dark:border-white/40 ⬆️ */}
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </div>

      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary flex items-center gap-0.5 font-sans">
        GitHub ↗
      </span>
    </a>
  );
}

export function Linkedin() {
  return (
    <a href="https://linkedin.com/in/arpitasi1gh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground border border-border flex items-center justify-center shadow-md group-hover:scale-105 group-active:scale-95 transition-transform duration-200">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> {/* bg-[#3b82f6] text-white ⬆️ */}
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </div>

      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary flex items-center gap-0.5 font-sans">
        LinkedIn ↗
      </span>
    </a>
  );
}

export function Mail() {
  return (
    <a href="mailto:arpitasi1gh@email.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email" className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground border border-border flex items-center justify-center shadow-md group-hover:scale-105 group-active:scale-95 transition-transform duration-200">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> {/* bg-[#EA4335] text-white ⬆️ */}
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
      </div>

      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary flex items-center gap-0.5 font-sans">
        Email ↗
      </span>
    </a>
  );
}


export function Sun({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}

export function Moon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}


export function Copyright({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 9.5a2.5 2.5 0 0 0-4 0v5a2.5 2.5 0 0 0 4 0" />
    </svg>
  );
}

export function Phone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );
}


export function CodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 6-6 6 6 6"/>
      <path d="m16 6 6 6-6 6"/>
      <path d="M13.5 4 10.5 20"/>
    </svg>
  );
}

export function CubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5 21 7v10l-9 4.5L3 17V7z"/>
      <path d="m3 7 9 4.5L21 7"/>
      <path d="M12 11.5V21.5"/>
    </svg>
  );
}

export function TreeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4.5" r="2.2"/>
      <circle cx="5.5" cy="19.5" r="2.2"/>
      <circle cx="18.5" cy="19.5" r="2.2"/>
      <path d="M10.6 6.4 6.9 17.6M13.4 6.4l3.7 11.2"/>
    </svg>
  );
}

export function DatabaseIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5.5" rx="8" ry="3"/>
      <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13"/>
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>
    </svg>
  );
}

export function ChipIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="2"/>
      <path d="M10 2.5v3M14 2.5v3M10 18.5v3M14 18.5v3M2.5 10h3M2.5 14h3M18.5 10h3M18.5 14h3"/>
    </svg>
  );
}

export function NetworkIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18"/>
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/>
    </svg>
  );
}

export function ServerIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="7" rx="2"/>
      <rect x="3" y="13" width="18" height="7" rx="2"/>
      <path d="M7 7.5h.01M7 16.5h.01"/>
    </svg>
  );
}

export function LayersIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 9 5-9 5-9-5z"/>
      <path d="m3 13 9 5 9-5"/>
    </svg>
  );
}

export function BrainIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5 2.5 2.5 0 0 0 5 9a2.5 2.5 0 0 0 1 2 2.5 2.5 0 0 0 1 4.5 2.5 2.5 0 0 0 2.5 2.5c.83 0 1.5-.4 1.5-1.2V5.2C11 4.4 10.33 4 9.5 4z"/>
      <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9a2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 1-1 4.5 2.5 2.5 0 0 1-2.5 2.5c-.83 0-1.5-.4-1.5-1.2V5.2c0-.8.67-1.2 1.5-1.2z"/>
    </svg>
  );
}

export function BlueprintIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
      <path d="M13.5 13.5h4v4h-4z"/>
    </svg>
  );
}

export function ShieldIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5.5c0 4.3 2.9 7.7 7 9.5 4.1-1.8 7-5.2 7-9.5V6z"/>
      <path d="m9.2 12 2 2 3.6-3.8"/>
    </svg>
  );
}

export function ToolsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 3.5a4 4 0 0 0 5.2 5.2L21 7.5v3.2L11 20.7a2.4 2.4 0 0 1-3.4-3.4l9.9-9.9h3.2"/>
      <path d="M6 3.5 3.5 6l3 3 2.5-2.5z"/>
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 14 21 3"/>
      <path d="M21 3h-6M21 3v6"/>
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>
    </svg>
  );
}

export function TrophyIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M6 4h12v5a6 6 0 0 1-12 0V4z"/>
      <path d="M12 15v4"/>
      <path d="M9 21h6"/>
    </svg>
  );
}

export function GitBranchIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="6" r="3"/>
      <path d="M6 9v6"/>
      <path d="M9 18h4a3 3 0 0 0 3-3V9"/>
    </svg>
  );
}

export function RocketIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.5-1.5 4.5-1.5 4.5s3 0 4.5-1.5l3-3"/>
      <path d="M12 15 9 12l8-8 4 4-8 8z"/>
      <path d="m14 6 4-4"/>
      <path d="M17 9h.01"/>
    </svg>
  );
}


export function ChevronDown({ className = "w-5 h-5" }) {
  return (
    <svg className={`w-7 h-7 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" role="img" aria-label="Expand section">
      <title>Expand</title>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

export function ChevronUp({ className = "w-5 h-5" }) {
  return (
    <svg className={`w-7 h-7 text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" role="img" aria-label="Collapse section">
      <title>Collapse</title>
      <path d="m18 15-6-6-6 6"/>
    </svg>
  );
}