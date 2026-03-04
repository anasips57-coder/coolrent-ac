/**
 * CoolRent Site Configuration
 * ─────────────────────────────────────────────
 * Update PHONE_NUMBER with your real WhatsApp /
 * call-enabled number (digits only, with country
 * code, no + or spaces).
 *
 * Example: "919876543210"  →  +91 98765 43210
 */
const siteConfig = {
    /** WhatsApp / call number — digits only, with country code */
    PHONE_NUMBER: "8574455048",

    /** Display-friendly version shown in the UI */
    PHONE_DISPLAY: "8574455048",

    /** Business city / service area */
    CITY: "Lucknow",

    /** Business name */
    BUSINESS_NAME: "CoolRent",

    /** WhatsApp helper — returns a wa.me URL with optional pre-filled text */
    waLink: (text?: string) => {
        // WhatsApp requires the country code (91 for India) without the plus sign.
        const base = `https://wa.me/91${siteConfig.PHONE_NUMBER}`;
        return text ? `${base}?text=${encodeURIComponent(text)}` : base;
    },

    /** tel: link for direct dialling */
    telLink: () => `tel:${siteConfig.PHONE_NUMBER}`,
};

export default siteConfig;
