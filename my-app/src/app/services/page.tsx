const services = [
  {
    icon: "▤",
    title: "QR Digital Menu",
    delivery: "2-day delivery",
    price: "from ₹4,999",
    body: "Contactless menu for cafés and restaurants — mobile-first, editable, and analytics-ready.",
    demoLink: "/demos/qr-menu",
    features: ["Mobile-first", "Editable", "Analytics-ready"],
  },
  {
    icon: "◉",
    title: "Lead-Capture Landing Page",
    delivery: "1-day delivery",
    price: "from ₹6,999",
    body: "High-converting one-pager with form, CRM webhook, and conversion analytics wired in.",
    demoLink: "/demos/landing-page",
    features: ["High-converting", "CRM webhook", "Analytics"],
  },
  {
    icon: "▦",
    title: "Booking Widget",
    delivery: "3-day delivery",
    price: "from ₹9,999",
    body: "Embeddable booking system with calendar sync, email confirmations, and reminders.",
    demoLink: "/demos/booking-widget",
    features: ["Calendar sync", "Email confirmations", "Reminders"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">


        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span>{services.length}</span>
          <span className="h-px w-14 bg-primary/60"/>
          <span className="text-muted-foreground">Services</span>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ship in days, not <span className="italic text-primary">months</span>.
          </h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Productised offers for small businesses. Fixed scope, fixed price, no surprises.
          </p>
        </div>


        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group relative rounded-2xl border border-border/60 bg-surface p-8 transition hover:border-primary/50 hover:-translate-y-1">
              <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                0{i + 1}
              </span>
              <span className="font-display text-4xl text-primary">{s.icon}</span>
              <h3 className="mt-8 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>


              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.features.map((f) => (
                  <span key={f} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary">
                    {f}
                  </span>
                ))}
              </div>

              {s.demoLink && (
                <a href={s.demoLink} className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  View demo →
                </a>
              )}

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                <span className="font-mono text-xs text-muted-foreground">{s.delivery}</span>
                <span className="font-display text-lg font-semibold">{s.price}</span>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-xl bg-surface/40 border border-border/40">
            <div className="font-display text-2xl font-bold gradient-text">5+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Clients Served</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-surface/40 border border-border/40">
            <div className="font-display text-2xl font-bold gradient-text">100%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Satisfaction Rate</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-surface/40 border border-border/40">
            <div className="font-display text-2xl font-bold gradient-text">7-day</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Free Support</div>
          </div>
        </div>


        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-border/70 bg-surface/40 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold">Need something custom?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Full-stack builds, backend infra, or AI-agent workflows on a retainer.
            </p>
          </div>
          <a href="https://calendly.com/arpitasi1gh/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]">
            Book a free consultation →
          </a>
        </div>


        <p className="mt-4 text-center text-xs text-muted-foreground/70">
          Custom scopes and timelines available on request.
        </p>

        
      </div>
    </section>
  );
}