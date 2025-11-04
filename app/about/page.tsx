"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faStar,
  faHandshake,
  faBullseye,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const team = [
    {
      name: "Dipendra Karki",
      role: "Director & Founder",
      bio: "Visionary leader with 15+ years in digital transformation",
    },
    {
      name: "Shiva Shrestha",
      role: "Operations Manager",
      bio: "Chronically Onchained",
    },
    {
      name: "Yukti Bhatt",
      role: "Tecnical Project Manager",
      bio: "Project Management Expert",
    },
    {
      name: "Prashidha Rawal",
      role: "Full Stack Developer",
      bio: "Its been kind of my daily iteration",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: faLightbulb,
    },
    {
      title: "Quality",
      description: "Excellence is not an option—it's our standard. Every project receives meticulous attention to detail.",
      icon: faStar,
    },
    {
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and exceptional service.",
      icon: faHandshake,
    },
    {
      title: "Impact",
      description: "We measure success by the positive transformation we create for our clients and their users.",
      icon: faBullseye,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business goals, challenges, and vision.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Crafting a comprehensive roadmap tailored to your unique requirements.",
    },
    {
      step: "03",
      title: "Design",
      description: "Creating intuitive, beautiful interfaces that resonate with your users.",
    },
    {
      step: "04",
      title: "Development",
      description: "Building robust, scalable solutions with cutting-edge technologies.",
    },
    {
      step: "05",
      title: "Launch",
      description: "Seamless deployment with comprehensive testing and quality assurance.",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance, optimization, and continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-interactive/10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-interactive bg-clip-text text-transparent">
                Nexora
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-['Sora']"
            >
              We're a team of passionate innovators dedicated to transforming businesses
              through exceptional digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2020, Nexora emerged from a simple belief: that technology should
                empower, not complicate. Our journey began with a small team of dedicated
                professionals who shared a vision of creating digital solutions that truly
                make a difference.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Today, we've grown into a trusted partner for businesses worldwide, helping
                them navigate the digital landscape with confidence and achieve remarkable
                results.
              </p>
              <p className="text-lg text-muted-foreground">
                Our commitment to innovation, quality, and client success remains at the
                heart of everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary/20 to-interactive/20 rounded-2xl p-12 lg:p-16"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-primary mb-2">200+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="text-5xl mb-4">
                  {/* <FontAwesomeIcon icon={value.icon} /> */}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-all h-full">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="bg-gradient-to-br from-primary/20 to-interactive/20 h-48 flex items-center justify-center">
                  <div className="text-6xl text-primary">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-accent/20 to-interactive/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something amazing together
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-interactive text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-primary/50"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-interactive bg-clip-text text-transparent">
                Nexora
              </h3>
              <p className="text-muted-foreground">
                Innovation meets excellence in digital transformation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/#services" className="hover:text-foreground transition-colors">Services</Link></li>
                <li><Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">UI/UX Design</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Nexora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
