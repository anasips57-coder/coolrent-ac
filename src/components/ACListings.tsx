"use client";

import Image from "next/image";
import { useState } from "react";
import siteConfig from "@/config/site";

type ACCard = {
    name: string;
    subtitle: string;
    price: string;
    badge?: string;
    imageSrc: string;
    imageAlt: string;
    specs: { icon: string; label: string }[];
    category: "split" | "window";
};

const acData: ACCard[] = [
    // ── Split ACs ──────────────────────────────────────────────
    {
        category: "split",
        name: "1.5 Ton Split AC",
        subtitle: "Inverter Technology",
        price: "₹1,200",
        badge: "Most Popular",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA6RJi4NMv4aaeImCIPP4BQpdCOT5GKMN4JBbL3suncoQXyuj0XtDAgFQ_5-evuzkaeFqdKhkiYb1ASBzaKZB2BYhAOxn4IdMvAzDLQZ3sD8zOzQpvJr_T7ya2_iw5G61uK0FTNnx3nUnDJjRzOyqXwv2D0ny92ldHwdaUbO1Y9uoWZgHX84XyjUrMtU19Zq7gDyu-zYyXACK-m6lf3IswhHQe4PPdw0GTBVLjQhuaEfEYoeJW_N701MeUiInuImqXnqvkStKIZdsw",
        imageAlt: "1.5 ton split AC installed in a living room",
        specs: [
            { icon: "ac_unit", label: "1.5 Ton" },
            { icon: "star", label: "3 Star Rating" },
            { icon: "square_foot", label: "150–180 sqft" },
            { icon: "settings", label: "High Cooling" },
        ],
    },
    {
        category: "split",
        name: "1 Ton Split AC",
        subtitle: "Dual Inverter",
        price: "₹999",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD0__SZXakyJjz-HMuNnilgo3I6vZhwqmldly3DvvCWk6DdvWC9njxB5wQs5URkqui2k1pN55HgV23CvMNccAAy7N8NHDX0kBNIuACjhCARCA-TvDXKkkggNS7szniKNY_pjFkqUH0jsF-jrV33hfLD6jnhbrKY_oiwPuqJsWKgsG-XPwQmIsEum5jvudS9nXZafn6OxcVoBCnjzBOFlhTWoXThosibpJFFBCzJd2OehME-WSMEjzds-G0BOrGqvcvBx-U5sQwbGEg",
        imageAlt: "1 ton split AC mounted on a wall",
        specs: [
            { icon: "ac_unit", label: "1.0 Ton" },
            { icon: "star", label: "5 Star Rating" },
            { icon: "square_foot", label: "Up to 120 sqft" },
            { icon: "eco", label: "Low Energy" },
        ],
    },
    {
        category: "split",
        name: "1.5 Ton Premium Split",
        subtitle: "Air Purifier Built-in",
        price: "₹1,450",
        imageSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBpspH7OVaN1RyRXv4a5TPjUWAHPtcCRtyx269vtlpaCoyEIBIetOREwmb1bwNgXWcGwDc5jvICsnaetQHwBGUl2cXrfqg_DVB6yzS8ZII63uWJnOS7_ZPmWqP5Sspwri2U2zFL0gPveV6GWEs6BvIroTWVkqkny0_S0TmKUfTYqUeNk8uWcucsWVxHWap5K5tl9S572GYjAu32kiJ2faVFrUxnvXwckrFCN_u5P1bCNDVlYoDmkVi9k355FbwkGDqnm2LtHS2V4Io",
        imageAlt: "Premium 1.5 ton split AC with air purifier in a bedroom",
        specs: [
            { icon: "ac_unit", label: "1.5 Ton" },
            { icon: "star", label: "4 Star Rating" },
            { icon: "square_foot", label: "150–200 sqft" },
            { icon: "filter_alt", label: "Air Purifier" },
        ],
    },

    // ── Window ACs ─────────────────────────────────────────────
    {
        category: "window",
        name: "1.5 Ton Window AC",
        subtitle: "Classic Cooling",
        price: "₹799",
        imageSrc: "/images/window_ac_1.png",
        imageAlt: "1.5 ton window AC installed in a room window",
        specs: [
            { icon: "ac_unit", label: "1.5 Ton" },
            { icon: "star", label: "3 Star Rating" },
            { icon: "square_foot", label: "120–160 sqft" },
            { icon: "bolt", label: "Energy Saver" },
        ],
    },
    {
        category: "window",
        name: "1 Ton Window AC",
        subtitle: "Compact & Affordable",
        price: "₹699",
        imageSrc: "/images/window_ac_2.png",
        imageAlt: "Compact 1 ton window AC in a bedroom",
        specs: [
            { icon: "ac_unit", label: "1.0 Ton" },
            { icon: "star", label: "2 Star Rating" },
            { icon: "square_foot", label: "Up to 100 sqft" },
            { icon: "eco", label: "Budget Pick" },
        ],
    },
    {
        category: "window",
        name: "2 Ton Window AC",
        subtitle: "High Capacity",
        price: "₹1,099",
        imageSrc: "/images/window_ac_3.png",
        imageAlt: "Large 2 ton window AC in a spacious living room",
        specs: [
            { icon: "ac_unit", label: "2.0 Ton" },
            { icon: "star", label: "3 Star Rating" },
            { icon: "square_foot", label: "200–250 sqft" },
            { icon: "settings", label: "Turbo Cool" },
        ],
    },
];

export default function ACListings() {
    const [tab, setTab] = useState<"split" | "window">("split");
    const filtered = acData.filter((ac) => ac.category === tab);

    return (
        <section className="py-20 bg-[color:var(--color-bg-light)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Popular AC Units for Rent in {siteConfig.CITY}
                        </h2>
                        <p className="text-slate-600 mt-2">
                            Subject to availability · Choose the best fit for your space
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {(["split", "window"] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${tab === t
                                        ? "bg-[color:var(--color-primary)] text-white"
                                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                    }`}
                            >
                                {t === "split" ? "Split ACs" : "Window ACs"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((ac) => (
                        <div
                            key={ac.name}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-video relative bg-slate-100">
                                <Image
                                    src={ac.imageSrc}
                                    alt={ac.imageAlt}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                {ac.badge && (
                                    <span className="absolute top-4 left-4 bg-[color:var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {ac.badge}
                                    </span>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {ac.name}
                                        </h3>
                                        <p className="text-sm text-slate-500">{ac.subtitle}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                                            Starting at
                                        </p>
                                        <p className="text-xl font-extrabold text-[color:var(--color-primary)]">
                                            {ac.price}
                                            <span className="text-sm font-normal text-slate-500">
                                                /mo
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-y-3 mb-6">
                                    {ac.specs.map((spec) => (
                                        <div
                                            key={spec.label}
                                            className="flex items-center gap-2 text-sm text-slate-600"
                                        >
                                            <span className="material-symbols-outlined text-sm">
                                                {spec.icon}
                                            </span>
                                            {spec.label}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={siteConfig.telLink()}
                                        className="flex-1 border border-[color:var(--color-primary)] text-[color:var(--color-primary)] py-2 rounded-lg font-bold text-sm hover:bg-[color:var(--color-primary)] hover:text-white transition-colors text-center"
                                    >
                                        Call Now
                                    </a>
                                    <a
                                        href={siteConfig.waLink(
                                            `Hi! I'm interested in renting a *${ac.name}* (${ac.subtitle}) at ${ac.price}/mo in ${siteConfig.CITY}. Please share details.`
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#25D366] text-white py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1"
                                    >
                                        <span className="material-symbols-outlined text-sm">
                                            forum
                                        </span>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
