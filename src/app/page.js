import Banner from "@/components/Banner";
import CallToAction from "@/components/Cta";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturesSection/>
      <PricingSection/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
