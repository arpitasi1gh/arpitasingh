# 🌟 Arpita Singh

> **Personal Portfolio Website**

🔗 **Live Demo:** [https://arpitasi1gh.vercel.app](https://arpitasi1gh.vercel.app)

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel)
![Framework](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## 📌 Table of Contents

<table width="100%" border="0">
  <tr>
    <td width="50%">
      <ul>
        <li><a href="#-the-problem-i-solved"><strong>Overview</strong></a> — The problem I solved</li>
        <li><a href="#-key-sections"><strong>Key Sections</strong></a> — What recruiters see</li>
        <li><a href="#-tech-stack"><strong>Tech Stack</strong></a> — What powers this site</li>
        <li><a href="#-project-structure"><strong>Project Structure</strong></a> — How it's organized</li>
        <li><a href="#-quick-start-local-development"><strong>Quick Start</strong></a> — Run it locally</li>
      </ul>
    </td>
    <td width="50%">
      <ul>
        <li><a href="#-key-design-decisions"><strong>Design Decisions</strong></a> — Why built this way</li>
        <li><a href="#-what-i-learned"><strong>Learnings</strong></a> — What I learned</li>
        <li><a href="#-deployment"><strong>Deployment</strong></a> — How it's hosted</li>
        <li><a href="#-connect-with-me"><strong>Connect</strong></a> — Find me</li>
        <li><a href="#-license"><strong>License</strong></a> — MIT</li>
      </ul>
    </td>
  </tr>
</table>

---

## 💡 The Problem I Solved

As a second-year engineering student, I needed a portfolio that:

- **Works for two audiences**: Recruiters and hiring engineers need to see my engineering depth. Clients need to see my deliverability.
- **Shows proof, not just claims**: Recruiters don't care about "I know React." They care about *how* I use it.
- **Reflects my brand**: I don't just write code — I architect systems that are worth shipping.
- **Is visually distinct**: A generic template wouldn't cut it. I needed something that felt like *me*.

> This portfolio is my **digital storefront** — engineered to convert curiosity into conversations.

---

## ✦ Key Sections

| Section | What It Shows | Why It Matters |
| :--- | :--- | :--- |
| **Hero** | Identity, tagline, profile photo, social links | First impression. Establishes who I am and what I do in 3 seconds. |
| **Projects** | 3 featured projects: HuntTrack, CollabFlow, AgentForge | Proof of work. Shows I can ship full-stack, real-time, and AI-powered systems. |
| **Skills** | Core CS fundamentals, Production Engineering, AI Specialization, Achievements, Community | Depth + breadth. Shows I know the foundations and can apply them. |
| **Services** | Productised offers for small businesses | Optional income stream. Shows I can deliver value beyond just coding. |
| **Visual Separators** | Architectural dividers with dot-grid texture & hover glow | Brand detail. Every element is intentional. |

---

## 🧑‍💻 Tech Stack

### **Framework & Core**

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **[Next.js 15](https://nextjs.org/)** (App Router) | ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js) | React framework with SSR, file-based routing, and optimized performance. |
| **[TypeScript](https://www.typescriptlang.org/)** | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript) | Type safety, better IDE support, and scalable codebases. |
| **[React 19](https://react.dev/)** | ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react) | Component-based UI with hooks for state and effects. |

### **Styling & UI**

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **[Tailwind CSS 4](https://tailwindcss.com/)** | ![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss) | Utility-first CSS with dark mode, custom variables, and @theme directives. |
| **[Inter](https://fonts.google.com/specimen/Inter)** + **[Fraunces](https://fonts.google.com/specimen/Fraunces)** + **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white) | Editorial serif (Fraunces) for impact, clean sans (Inter) for body, monospace (JetBrains) for code. |
| **Custom SVG Icons** | — | Fully custom icon set, no external icon libraries. |

### **Deployment & Hosting**

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **[Vercel](https://vercel.com/)** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Serverless deployment, automatic previews, and edge caching. |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── layout.tsx                 # Root layout — fonts, global styles, theme
│   ├── page.tsx                   # Homepage — orchestrates all sections
│   └── globals.css                # Global styles, CSS variables, dark/light tokens
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky navigation with scroll detection & active section tracking
│   │   └── Footer.tsx             # Minimal footer — copyright, tech stack, quick links
│   │
│   ├── sections/
│   │   ├── Hero.tsx               # Identity + tagline + profile photo + social icons
│   │   ├── Projects.tsx           # Featured project cards (HuntTrack, CollabFlow, AgentForge)
│   │   ├── SkillStat.tsx          # Core CS, Production Engineering, AI, Achievements, Community
│   │   └── Services.tsx           # Productised offers for clients (QR Menu, Landing Page, Booking)
│   │
│   └── ui/
│       ├── Icons.tsx              # All custom SVG icons (30+ icons)
│       └── VisualSeparator.tsx    # Decorative section dividers (dot-grid texture + hover glow)
│
├── public/
│   ├── profile.jpg                # Profile photo
│   ├── hero-bg.mp4                # Background video loop (low opacity, blurred)
│   └── resume.pdf                 # Downloadable resume
│
├── .gitignore
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.mjs             # PostCSS config for Tailwind
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

---

## 🧩 Key Design Decisions

| Decision | Why | Implementation |
| :--- | :--- | :--- |
| **Single-page layout** | Recruiters scroll; they don't click through pages. All sections are one smooth scroll. | All sections in `page.tsx` with `id` anchors for navigation. |
| **Dark/light mode** | Respects user preference; CSS variables handle it seamlessly. | `@theme` and `:root` / `.dark` classes in `globals.css` with `localStorage` persistence. |
| **Glass-morphism cards** | Soft, modern, inviting — doesn't distract from content. | `bg-surface/40 backdrop-blur-sm border border-border` + subtle hover states. |
| **Gradient accents** | Warm terracotta → ochre gradient ties the brand together. | `gradient-text` utility with `oklch(0.62 0.15 55)` → `oklch(0.58 0.12 40)`. |
| **Editorial typography** | Fraunces (serif) for impact, Inter (sans) for readability. | `font-display` (Fraunces) for headings, `font-sans` (Inter) for body. |
| **Video background** | Adds motion without being distracting (low opacity, blurred). | `object-cover opacity-20 scale-105 blur-[1px]` on `<video>` with gradient overlay. |
| **Custom icon set** | No external dependencies; every icon is handcrafted to match the aesthetic. | All icons in `Icons.tsx` as SVG components with consistent viewBox and stroke. |
| **Visual separators** | Architectural dot-grid that feels like a blueprint — intentional and polished. | `radial-gradient` dot pattern with mask, crosshair, and hover glow. |

---

## ⚙️ Quick Start (Local Development)

### 0. Prerequisites
- Node.js v18+ and npm

### 1. Clone & Install
```bash
git clone https://github.com/arpitasi1gh/arpitasi1gh.git
cd arpitasi1gh
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to view the site.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📈 What I Learned

Building this portfolio taught me:

- **Next.js App Router**: Split server components (SEO, static content) from client components (interactivity, theme toggles) — deliberately architected, not accidentally structured.

- **TypeScript**: Eliminated entire classes of bugs at compile-time. Refactored 30+ components fearlessly because every prop and state shape was explicitly typed.

- **Tailwind CSS v4**: Leveraged `@theme` with `oklch` colors and custom `@utility` classes (`.grain`, `.gradient-text`), keeping dark/light theming maintainable across 100+ class instances.

- **Custom Icons**: Built a 30+ SVG icon library — zero external dependencies, consistent stroke widths, pixel-perfect alignment across all viewports.

- **Scroll Tracking**: Replaced three conflicting IntersectionObservers with a single `handleScroll` function using a viewport marker. Reduced complexity, improved accuracy.

- **Dark Mode**: Implemented persistent theming using `localStorage` + `useState` + `useEffect` with `classList.toggle("dark")`. No context, no Redux — just the browser and React hooks.

- **Video Backgrounds**: Solved mobile autoplay (`playsInline`), responsive fill (`object-cover`), edge artifacts (`scale-105`), and text readability (gradient overlay) — production-ready, not just visually appealing.

- **Dual-Audience Architecture**: Engineered the site for both recruiters (engineering depth) and clients (deliverability) with clear visual segregation, active section tracking, and purpose-built content blocks.

---

## 🚀 Deployment

- **Live Site**: [Vercel](https://vercel.com) – Connected to GitHub, auto-deploys on `main` push.
- **Preview Deployments**: Every PR gets its own preview URL.

---

## 🔐 Environment Variables

| Variable | Purpose |
| :--- | :--- |
| (None required) | This site is static and doesn't require environment variables for local development. |

---

## 🤝 Connect With Me

- **LinkedIn**: [Arpita Singh](https://linkedin.com/in/arpitasi1gh)
- **GitHub**: [arpitasi1gh](https://github.com)
- **Email**: arpitasi1gh@gmail.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⭐ Show Your Support

If you found this portfolio inspiring, learned something new, or just appreciate the engineering behind it, please consider giving it a ⭐ on GitHub.

---

**Built with ❤️ by Arpita Singh**

> *"I don't just write code — I architect systems that are worth shipping."*
