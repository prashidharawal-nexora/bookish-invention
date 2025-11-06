"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We start by understanding your vision, business goals, and target users — defining a clear roadmap for success",
    timeline: "Timeline: 1–2 weeks",
  },
  {
    number: "02",
    title: "Design",
    description: "Our UI/UX team transforms insights into visually stunning, user-friendly interfaces that align with your brand identity",
    timeline: "Timeline: 1–2 weeks",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build scalable, high-performance solutions using modern frameworks and best practices",
    timeline: "Timeline: 2–4 weeks",
  },
  {
    number: "04",
    title: "Test & Launch",
    description: "We rigorously test every feature and ensure a smooth, reliable launch — backed by ongoing support",
    timeline: "Timeline: 1–2 weeks",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={sectionRef} className="py-32 bg-[#0d0d0d]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Process steps */}
          <div className="lg:pl-8">
            <SectionBadge>OUR PROCESS</SectionBadge>
            <h2 className="text-[40px] leading-[48px] font-semibold text-white mb-4 font-['Poppins']">
              Idea to Impact
            </h2>
            <p className="text-[17px] text-[#989898] mb-12 font-['Poppins']">
              A proven process that delivers results, every time
            </p>

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const stepProgress = useTransform(
                  scrollYProgress,
                  [index / processSteps.length, (index + 1) / processSteps.length],
                  [0, 1]
                );

                return (
                  <motion.div 
                    key={index} 
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Timeline connector */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium relative overflow-hidden"
                        style={{
                          backgroundColor: useTransform(
                            stepProgress,
                            [0, 0.5],
                            ["#3a3a3a", "#0a84ff"]
                          ),
                        }}
                      >
                        <motion.span
                          style={{
                            color: useTransform(
                              stepProgress,
                              [0, 0.5],
                              ["#e9e9e9", "#ffffff"]
                            ),
                          }}
                        >
                          {step.number}
                        </motion.span>
                      </motion.div>
                      {index < processSteps.length - 1 && (
                        <div className="relative w-0.5 h-24 bg-[#3a3a3a] my-2 overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 w-full bg-primary"
                            style={{
                              height: useTransform(stepProgress, [0, 1], ["0%", "100%"]),
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-[20px] font-medium text-white mb-2 font-['Poppins']">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-[16px] leading-[26px] text-[#989898] mb-2 font-['Poppins']">
                          {step.description}
                        </p>
                      )}
                      {step.timeline && (
                        <span className="inline-block text-[12px] text-[rgba(255,255,255,0.7)] bg-[#1a1a1a] px-3 py-1 rounded font-['Inter']">
                          {step.timeline}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button className="mt-8 text-[14px] font-semibold text-[#f4f6f8] border border-[#f4f6f8]/30 rounded-full px-6 py-2 hover:bg-[#f4f6f8]/10 transition-colors font-['Poppins']">
              View in detail
            </button>
          </div>

          {/* Right side - Illustration */}
          <motion.div 
            className="relative h-[536px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/images/process-illustration.svg"
                alt="Process illustration"
                width={642}
                height={536}
                className="object-contain mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}