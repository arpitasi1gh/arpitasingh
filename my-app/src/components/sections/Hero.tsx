import Image from "next/image";
import { Github, Linkedin, Mail } from "../ui/Icons";

export default function Hero() {
    return (
      <div id="contact" className="relative w-full min-h-screen flex items-center overflow-hidden">


        <div className="absolute inset-0 -z-10 overflow-hidden">

          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 scale-105 blur-[1px]">
            <source src="/hero-bg.mp4" type="video/mp4"/>
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent"></div>
        
        </div>


        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          <div className="max-w-2xl  text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">

            <div className="inline-flex items-center gap-2.5 mb-6 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono-ui text-xs tracking-wider uppercase text-muted-foreground">
                Contact — Available for Opportunities
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08]">
              Backend Systems{" "}<span className="text-muted-foreground font-normal italic">&amp;</span>{" "}<span className="gradient-text">AI Agents</span>.
            </h1>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mt-4 max-w-xl">
              I&apos;m <strong className="text-foreground font-medium">Arpita Singh</strong> — building production-ready full-stack applications, high-performance backend infrastructure, and AI-powered automations that are <span className="gradient-text font-display italic">worth shipping</span>.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mt-8">
              <a href="#projects" className="bg-primary text-primary-foreground font-medium px-8 py-4 rounded-full hover:opacity-90 transition cursor-pointer shadow-lg shadow-primary/35 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98]">View my work &rarr;</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-surface/80 backdrop-blur-sm border border-border text-foreground font-medium px-8 py-4 rounded-full hover:bg-muted transition-all cursor-pointer">Download Resume</a>
            </div>

          </div>

          <div className="shrink-0 mx-auto lg:mx-0 flex flex-col items-center order-1 lg:order-2">

            <Image src="/profile.jpg" alt="Profile of Arpita Singh" width="320" height="320" className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-avatar" priority/>

            <div className="flex flex-row justify-center gap-5 pt-5 items-center pt-6 w-full">
              <Github/> <div className="h-5 border-l border-neutral-300 dark:border-neutral-700 opacity-60"></div>
              <Linkedin/> <div className="h-5 border-l border-neutral-300 dark:border-neutral-700 opacity-60"></div>
              <Mail/>
            </div>

          </div>

        </div>


      </div>
    );
};