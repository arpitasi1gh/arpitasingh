"use client";
import { useState, useEffect } from "react";
import {Sun, Moon} from "@/components/ui/Icons";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-surface/50 transition-colors border border-border hover:border-primary/30" aria-label="Toggle theme">
            {theme === "light" ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
        </button>
    );
};