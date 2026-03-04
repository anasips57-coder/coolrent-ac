"use client";

import { useState } from "react";
import siteConfig from "@/config/site";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[color:var(--color-primary)] text-3xl">
                            ac_unit
                        </span>
                        <div>
                            <span className="text-xl font-extrabold tracking-tight text-[color:var(--color-primary)]">
                                CoolRent
                            </span>
                            <p className="text-xs text-slate-500 font-semibold leading-none">
                                {siteConfig.CITY}
                            </p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["Browse ACs", "How it Works", "Why Us", "Support"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm font-semibold text-slate-600 hover:text-[color:var(--color-primary)] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-[color:var(--color-primary)]">
                            <span className="material-symbols-outlined text-lg">login</span>
                            {"Login"}
                        </button>
                        {/* Mobile call button */}
                        <div className="flex md:hidden gap-2">
                            <a
                                href={siteConfig.telLink()}
                                className="bg-[color:var(--color-primary)] text-white p-2 rounded-lg text-sm font-bold flex items-center justify-center hover:opacity-90"
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    call
                                </span>
                            </a>
                        </div>
                        <a
                            href={siteConfig.telLink()}
                            className="bg-[color:var(--color-primary)] text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity hidden md:flex"
                        >
                            Rent Now
                        </a>
                        {/* Mobile menu toggle */}
                        <button
                            className="md:hidden text-slate-600"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined">
                                {mobileOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
                    {["Browse ACs", "How it Works", "Why Us", "Support"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="block text-sm font-semibold text-slate-700 hover:text-[color:var(--color-primary)] transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="block text-sm font-bold text-[color:var(--color-primary)]"
                    >
                        Login
                    </a>
                </div>
            )}
        </header>
    );
}
