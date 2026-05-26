"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/Banner"), { ssr: false });
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: false });
const PricingSection = dynamic(() => import("@/components/Pricing"), { ssr: false });
const CallToAction = dynamic(() => import("@/components/Cta"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <PricingSection />
      <CallToAction />

    </div>
  );
}
