import { Copyright, Phone } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-sans">
        
        <span className="text-sm flex items-center gap-1.5 font-sans" title="All rights reserved">
          <Copyright className="w-4 h-4"/>
          2026 Arpita Singh
        </span>

        <div className="flex items-center gap-4 font-sans">
          <span title="Built with ♥️">Next.js · TypeScript · Tailwind</span>
          <span className="text-border">|</span>
          <a href="tel:+91-7054381276" className="hover:text-foreground transition-colors font-sans flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5"/>
            Call
          </a>
        </div>

      </div>
    </footer>
  );
}