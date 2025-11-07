"use client";

import Navbar from "@/components/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import WhyNexoraSection from "@/components/sections/WhyNexoraSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <HeroSection />
      <WhyNexoraSection />
      <ProcessSection />
      <ServicesSection />
      <WorkSection />
      <CTASection />
      <Footer /> 
    </div>
  );
}