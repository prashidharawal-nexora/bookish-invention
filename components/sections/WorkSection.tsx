"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function WorkSection() {
  return (
    <section className="py-32 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <SectionBadge>OUR WORK</SectionBadge>
          <h2 className="text-[40px] leading-[48px] font-semibold text-white mb-4 font-['Poppins']">
            Our Work in Action
          </h2>
          <p className="text-[17px] leading-[26px] text-[#989898] max-w-2xl mx-auto font-['Poppins']">
            Showcasing how Nexora builds scalable digital products — starting with our in-house platform, Handy Bee.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111111] to-[#1c1c1c] rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
            {/* Left side - Image placeholder */}
            <div className="bg-primary rounded-lg p-8 flex items-start justify-start min-h-[400px]">
              <span className="text-[12px] font-medium text-white bg-black/30 px-3 py-1.5 rounded font-['Poppins']">
                Task Management
              </span>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[24px] leading-[32px] font-semibold text-white mb-6 font-['Poppins']">
                  Handy Bee
                </h3>
                <p className="text-[16px] leading-[26px] text-[rgba(255,255,255,0.7)] mb-8 font-['Poppins']">
                  A verified technician marketplace that connects homeowners with trusted professionals across Nepal. 
                  Nexora handled the full development — from design to deployment — building a scalable Flutter-based app ecosystem.
                </p>

                <div className="mb-6">
                  <p className="text-[17px] text-[#989898] font-['Poppins']">
                    <span className="text-primary text-[17px] font-semibold">60%</span> improved employee retention
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Flutter", "Firebase", "MongoDB", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] text-[rgba(255,255,255,0.7)] bg-[#2a2a2a] px-3 py-1.5 rounded font-['Inter']"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="flex items-center gap-2 text-primary text-[16px] font-normal hover:gap-4 transition-all font-['Inter']">
                Learn More
                <ArrowRightIcon width={18} height={18} color="#0a84ff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}