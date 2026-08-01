"use client";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { OpenIcon, CloseIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("contact");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const sections = ["projects", "skills", "blog", "contact"];

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (pathname !== "/") {
                setActiveSection("");
                return;
            };

            const scrollPosition = window.scrollY + window.innerHeight * 0.35;
            const currentSection = sections.find((sectionId) => {
                const element = document.getElementById(sectionId);
                if (!element) return false;

                return (
                    scrollPosition >= element.offsetTop &&
                    scrollPosition < element.offsetTop + element.offsetHeight
                );
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [pathname]);

    return (
        <div className={`fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ${(scrolled || isMenuOpen) ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
            
            <div className="flex items-center justify-between mx-auto py-4 sm:px-6 lg:px-8">
                
                <Link href="/" className="font-display font-bold text-lg ml-4.5 md:ml-0 tracking-tight hover:scale-[1.02] transition-transform">
                    🌟 Arpita Singh
                </Link>

                <div className="hidden md:flex gap-11 font-medium text-sm text-muted-foreground transition-colors">
                    <Link href="/#projects" className={activeSection === "projects" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Projects</Link>
                    <Link href="/#skills" className={activeSection === "skills" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Skills</Link>
                    <Link href="/#blog" className={(pathname.startsWith("/blog") || (pathname === "/" && activeSection === "blog")) ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Blog</Link>
                    <Link href="/#contact" className={activeSection === "contact" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Contact</Link>
                </div>

                <div className="flex items-center gap-3 mr-4.5 md:mr-0">
                    <ThemeToggle/>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded-lg hover:bg-surface/10 transition-colors focus:outline-none" aria-label="Toggle menu">
                        {isMenuOpen ? <CloseIcon/> : <OpenIcon/>}
                    </button>
                </div>
            
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border shadow-xl px-5 py-6 flex flex-col gap-4">
                    <Link href="/#projects" className={activeSection === "projects" ? "text-foreground border-l-2 border-primary pl-4 py-3 font-semibold transition-colors" : "text-muted-foreground hover:text-foreground pl-5 py-3 transition-colors"}>Projects</Link>
                    <Link href="/#skills" className={activeSection === "skills" ? "text-foreground border-l-2 border-primary pl-4 font-semibold py-3 transition-colors" : "text-muted-foreground hover:text-foreground pl-5 py-3 transition-colors"}>Skills</Link>
                    <Link href="/#blog" className={(pathname.startsWith("/blog") || (pathname === "/" && activeSection === "blog")) ? "text-foreground border-l-2 border-primary pl-4 font-semibold py-3 transition-colors" : "text-muted-foreground hover:text-foreground pl-5 py-3 transition-colors"}>Blog</Link>
                    <Link href="/#contact" className={activeSection === "contact" ? "text-foreground border-l-2 border-primary pl-4 font-semibold py-3 transition-colors" : "text-muted-foreground hover:text-foreground pl-5 py-3 transition-colors"}>Contact</Link>
                </div>
            )}

        </div>
    );
};
