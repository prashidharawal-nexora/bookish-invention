"use client";

import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d] pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a3a5c] opacity-80" 
           style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }} />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#1a3a5c] opacity-80 rotate-45" 
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[64px] leading-[76px] font-semibold text-[#e9e9e9] mb-6 font-['Poppins']">
            We build digital systems that grow with you.
          </h1>
          <p className="text-[17px] text-[#bababa] mb-10 font-['Poppins']">
            Apps, web, and automations — engineered for reliability and scale.
          </p>
          <Button variant="primary" size="lg">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}