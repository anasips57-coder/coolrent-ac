const steps = [
    {
        icon: "search",
        title: "Browse",
        description:
            "Select from our premium range of split and window ACs based on your room size.",
    },
    {
        icon: "description",
        title: "Submit Enquiry",
        description:
            "Fill in a quick form with your address and preferred rental duration.",
    },
    {
        icon: "local_shipping",
        title: "Contact & Deliver",
        description:
            "Our team confirms details and handles professional delivery & installation.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
                    <p className="text-slate-600 mt-2">
                        Get your AC installed in three simple steps
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="text-center p-8 bg-[color:var(--color-bg-light)] rounded-2xl border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-[color:var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-[color:var(--color-primary)] text-3xl">
                                    {step.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
