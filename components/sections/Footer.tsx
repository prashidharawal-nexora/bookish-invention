"use client";

import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import EmailIcon from "@/components/icons/EmailIcon";

const footerLinks = {
  product: ["Services", "Work", "Process", "Pricing"],
  company: ["About", "Team", "Contact", "Careers"],
  resources: ["Blog", "Case Studies", "Documentation", "Support"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <p className="text-[14px] leading-[22px] text-[rgba(255,255,255,0.6)] font-['Poppins']">
              Office: Mahalaxmi-Imadol, Lalitpur<br />
              UK Office: 4th Floor, Silverstream House,<br />
              45 Fitzroy Street, London W1T 6EB
            </p>

            {/* Social icons */}
            <div className="flex gap-8 mt-8">
              <button className="w-8 h-8 rounded border border-[rgba(255,255,255,0.7)] flex items-center justify-center hover:bg-white/10 transition-colors">
                <TwitterIcon width={16} height={14} color="rgba(255,255,255,0.7)" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                <LinkedInIcon width={18} height={18} color="rgba(255,255,255,0.7)" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                <GitHubIcon width={18} height={18} color="rgba(255,255,255,0.7)" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
                <EmailIcon width={18} height={18} color="rgba(255,255,255,0.7)" />
              </button>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-[14px] font-semibold leading-[20px] text-white mb-6 font-['Poppins']">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors font-['Inter']">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-[14px] font-semibold leading-[20px] text-white mb-6 font-['Poppins']">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors font-['Inter']">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-[14px] font-semibold leading-[20px] text-white mb-6 font-['Poppins']">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors font-['Inter']">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[rgba(255,255,255,0.4)] font-['Inter']">
            Copyright © 2025 Nexora, . All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-white transition-colors font-['Inter']">
              Terms of Service
            </a>
            <a href="#" className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-white transition-colors font-['Inter']">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}