"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";

export default function CTASection() {
  return (
    <section className="py-32 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,43,107,0.7)] to-[rgba(0,72,181,0.07)]">
            <img
              src="/images/cta-background.svg"
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-24 px-8">
            <h2 className="text-[64px] leading-[76px] font-semibold text-white mb-6 font-['Poppins']">
              Ready to Get<br />Things Done?
            </h2>
            <p className="text-[16px] text-[#f4f6f8] mb-10 font-['Poppins']">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <button className="bg-primary hover:bg-interactive text-white px-8 py-3.5 rounded-full font-semibold text-[14px] inline-flex items-center gap-2.5 transition-colors font-['Poppins']">
              Get Started for free
              <ArrowIcon width={15} height={13} color="#f4f6f8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}