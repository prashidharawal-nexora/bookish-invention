"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import LightningIcon from "@/components/icons/LightningIcon";
import LockIcon from "@/components/icons/LockIcon";
import PixLogoIcon from "@/components/icons/PixLogoIcon";

const features = [
  {
    icon: LightningIcon,
    title: "Rapid Delivery",
    description: "Build, test, and launch faster with Nexora's agile development system.",
  },
  {
    icon: LockIcon,
    title: "Enterprise-Grade Security",
    description: "Every line of code is built for stability, privacy, and compliance.",
  },
  {
    icon: PixLogoIcon,
    title: "Designs That Drive Results",
    description: "Beautiful, intuitive, and conversion-focused interfaces.",
  },
];

export default function WhyNexoraSection() {
  return (
    <section className="py-32 bg-[#0d0d0d] relative">
      {/* Blur glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1421px] h-[581px] bg-[rgba(0,102,255,0.42)] blur-[400px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <SectionBadge>WHY NEXORA</SectionBadge>
          <h2 className="text-[40px] leading-[48px] font-semibold text-white mb-4 font-['Poppins']">
            Engineering reliable digital systems<br />that scale with your growth.
          </h2>
          <p className="text-[17px] leading-[26px] text-[#989898] max-w-2xl mx-auto font-['Poppins']">
            End-to-end design and development for apps, web, and automation — built to scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <IconComponent width={48} height={48} color="#0a84ff" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#e9e9e9] mb-2 font-['Poppins']">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#989898] font-['Poppins']">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}