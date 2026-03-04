const features = [
    {
        icon: "local_shipping",
        title: "Fast Delivery",
        description:
            "We deliver within 24-48 hours of order confirmation to keep you cool.",
    },
    {
        icon: "construction",
        title: "Free Installation",
        description:
            "Professional technicians handle everything. No hidden setup costs.",
    },
    {
        icon: "payments",
        title: "Affordable Plans",
        description:
            "Low monthly rentals starting at just ₹999. No huge upfront investments.",
    },
    {
        icon: "support_agent",
        title: "Free Maintenance",
        description:
            "Any issues? We repair or replace within 24 hours at no extra charge.",
    },
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-[color:var(--color-primary)]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Why Rent From Us?
                    </h2>
                    <p className="text-slate-600 mt-2">
                        Hassle-free experience designed for your convenience
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="material-symbols-outlined text-4xl text-[color:var(--color-primary)] mb-4 block">
                                {f.icon}
                            </span>
                            <h4 className="text-lg font-bold mb-2">{f.title}</h4>
                            <p className="text-sm text-slate-600">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
