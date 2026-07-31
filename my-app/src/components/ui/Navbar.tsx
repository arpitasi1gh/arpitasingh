"use client";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("contact");
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
        <div className={`fixed w-full z-50 top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
            <div className="flex items-center justify-between mx-auto py-4 sm:px-6 lg:px-8">
                <div className="font-display font-bold text-lg tracking-tight hover:scale-[1.02] transition-transform">
                    🌟 Arpita Singh
                </div>
                <div className="flex gap-11 font-medium text-sm text-muted-foreground transition-colors">
                    <Link href="/#projects" className={activeSection === "projects" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Projects</Link>
                    <Link href="/#skills" className={activeSection === "skills" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Skills</Link>
                    <Link href="/#blog" className={(pathname.startsWith("/blog") || (pathname === "/" && activeSection === "blog")) ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Blog</Link>
                    <Link href="/#contact" className={activeSection === "contact" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}>Contact</Link>
                </div>
                <ThemeToggle/>
            </div>
        </div>
    );
};
