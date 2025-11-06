"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import LightningIcon2 from "@/components/icons/LightningIcon2";
import CodeBlockIcon from "@/components/icons/CodeBlockIcon";
import ProjectorChartIcon from "@/components/icons/ProjectorChartIcon";
import PentagramIcon from "@/components/icons/PentagramIcon";
import MegaphoneIcon from "@/components/icons/MegaphoneIcon";
import HeadsetIcon from "@/components/icons/HeadsetIcon";

const services = [
  {
    icon: LightningIcon2,
    title: "UI/UX Design",
    description: "Intuitive, conversion-focused interfaces built for seamless user journeys.",
  },
  {
    icon: CodeBlockIcon,
    title: "Web & App Development",
    description: "Scalable, high-performance applications built with modern frameworks",
  },
  {
    icon: ProjectorChartIcon,
    title: "Product Strategy",
    description: "Turning ideas into executable digital roadmaps with measurable results.",
  },
  {
    icon: PentagramIcon,
    title: "Brand Identity",
    description: "Visual systems that define how your brand looks, feels, and connects.",
  },
  {
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    description: "Creative, performance-driven campaigns that bring brands to life online.",
  },
  {
    icon: HeadsetIcon,
    title: "Maintenance & Support",
    description: "Long-term technical care and optimization to keep your platforms running smoothly.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <SectionBadge>OUR SERVICES</SectionBadge>
          <h2 className="text-[40px] leading-[48px] font-semibold text-white mb-4 font-['Poppins']">
            End-to-end digital<br />craftsmanship.
          </h2>
          <p className="text-[17px] leading-[26px] text-[#989898] max-w-2xl mx-auto font-['Poppins']">
            From design to deployment, we help you build what's next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-xl p-8 hover:border hover:border-primary/30 transition-all"
              >
                <div className="mb-6">
                  <IconComponent width={48} height={48} color="#0a84ff" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#e9e9e9] mb-3 font-['Poppins']">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#989898] font-['Poppins']">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}