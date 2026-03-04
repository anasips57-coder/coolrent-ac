const footerLinks = {
    Company: ["About Us", "Careers", "Blog", "Contact"],
    Services: [
        "Split AC Rental",
        "Window AC Rental",
        "Annual Maintenance",
        "Corporate Plans",
    ],
    Support: ["Help Center", "Privacy Policy", "Terms of Service", "Cancellation"],
};

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-[color:var(--color-primary)] text-3xl">
                                ac_unit
                            </span>
                            <span className="text-xl font-extrabold tracking-tight text-[color:var(--color-primary)]">
                                CoolRent
                            </span>
                        </div>
                        <p className="text-slate-500 max-w-sm mb-6 text-sm leading-relaxed">
                            Leading provider of air conditioning rental services. Dedicated to
                            keeping you comfortable throughout the summer with premium units
                            and top-tier service.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[color:var(--color-primary)] transition-colors"
                            >
                                <span className="material-symbols-outlined">share</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[color:var(--color-primary)] transition-colors"
                            >
                                <span className="material-symbols-outlined">public</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <h5 className="font-bold mb-4">{heading}</h5>
                            <ul className="space-y-3 text-sm text-slate-500">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="hover:text-[color:var(--color-primary)] transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © 2024 CoolRent AC Services Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">mail</span>
                            support@coolrent.com
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">call</span>
                            1800-COOL-RENT
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
