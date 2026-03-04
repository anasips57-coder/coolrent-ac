import Image from "next/image";
import siteConfig from "@/config/site";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[color:var(--color-bg-light)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                    {/* Left — Text */}
                    <div className="lg:col-span-6">
                        <div className="inline-flex items-center gap-2 bg-[color:var(--color-secondary)]/10 text-[color:var(--color-secondary)] text-sm font-semibold px-3 py-1 rounded-full mb-5">
                            <span className="material-symbols-outlined text-base">
                                location_on
                            </span>
                            Serving {siteConfig.CITY} &amp; surrounding areas
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                            Rent an AC in Minutes —{" "}
                            <span className="text-[color:var(--color-secondary)]">
                                Stay Cool
                            </span>{" "}
                            Without the High Cost
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-xl">
                            Affordable cooling solutions for homes across {siteConfig.CITY}.
                            Professional installation included with flexible monthly plans and
                            lightning-fast 24-hour delivery.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[color:var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:opacity-95 transition-all">
                                Browse AC Options
                            </button>
                            {/* Request a Call — shows number + opens dialler */}
                            <a
                                href={siteConfig.telLink()}
                                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">call</span>
                                <span>
                                    Request a Call
                                    <span className="block text-sm font-medium text-[color:var(--color-primary)]">
                                        {siteConfig.PHONE_DISPLAY}
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right — Image + Floating Badges */}
                    <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6RJi4NMv4aaeImCIPP4BQpdCOT5GKMN4JBbL3suncoQXyuj0XtDAgFQ_5-evuzkaeFqdKhkiYb1ASBzaKZB2BYhAOxn4IdMvAzDLQZ3sD8zOzQpvJr_T7ya2_iw5G61uK0FTNnx3nUnDJjRzOyqXwv2D0ny92ldHwdaUbO1Y9uoWZgHX84XyjUrMtU19Zq7gDyu-zYyXACK-m6lf3IswhHQe4PPdw0GTBVLjQhuaEfEYoeJW_N701MeUiInuImqXnqvkStKIZdsw"
                                alt="Split air conditioner installed in a modern living room"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Floating Badge: Installation Included */}
                        <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                            <div className="bg-green-100 p-2 rounded-full">
                                <span className="material-symbols-outlined text-green-600">
                                    check_circle
                                </span>
                            </div>
                            <span className="text-sm font-bold">Installation Included</span>
                        </div>

                        {/* Floating Badge: Flexible Plans */}
                        <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <span className="material-symbols-outlined text-blue-600">
                                    calendar_today
                                </span>
                            </div>
                            <span className="text-sm font-bold">Flexible Monthly Plans</span>
                        </div>

                        {/* Floating Badge: Fast Delivery */}
                        <div className="absolute -bottom-4 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                            <div className="bg-orange-100 p-2 rounded-full">
                                <span className="material-symbols-outlined text-orange-600">
                                    bolt
                                </span>
                            </div>
                            <span className="text-sm font-bold">Fast 24h Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
