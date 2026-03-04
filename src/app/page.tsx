import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ACListings from "@/components/ACListings";
import WhyUs from "@/components/WhyUs";
import SupportCTA from "@/components/SupportCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <ACListings />
        <WhyUs />
        <SupportCTA />
      </main>
      <Footer />
    </div>
  );
}
