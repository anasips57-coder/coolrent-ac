import siteConfig from "@/config/site";

export default function SupportCTA() {
    return (
        <section className="py-20 bg-[color:var(--color-bg-light)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[color:var(--color-secondary)]/10 rounded-3xl p-8 md:p-12 lg:flex items-center justify-between border border-[color:var(--color-secondary)]/20">
                    <div className="lg:max-w-xl mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Need Help Choosing?
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Our {siteConfig.CITY} cooling experts are here to recommend the
                            perfect AC based on your room size and budget. Reach us instantly
                            via call or WhatsApp.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Direct call — shows number */}
                        <a
                            href={siteConfig.telLink()}
                            className="bg-[color:var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <span className="material-symbols-outlined">call</span>
                            <span>
                                Call Expert
                                <span className="block text-xs font-medium opacity-80">
                                    {siteConfig.PHONE_DISPLAY}
                                </span>
                            </span>
                        </a>
                        {/* WhatsApp with pre-filled general message */}
                        <a
                            href={siteConfig.waLink(
                                `Hi! I'd like help choosing the right AC for my space in ${siteConfig.CITY}. Can you assist me?`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <span className="material-symbols-outlined">forum</span>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
