"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faPalette,
  faCloud,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const partners = [
    "TechCorp",
    "Innovate Inc",
    "Digital Solutions",
    "Cloud Systems",
    "Data Analytics Co",
    "Smart Tech",
  ];

  const services = [
    {
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies.",
      icon: faRocket,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      icon: faPalette,
    },
    {
      title: "Cloud Solutions",
      description: "Robust cloud infrastructure for your growing business needs.",
      icon: faCloud,
    },
    {
      title: "Consulting",
      description: "Expert guidance to transform your digital vision into reality.",
      icon: faLightbulb,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-interactive/5" />

        {/* Geometric Background Illustration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.3, rotate: 25 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative w-[500px] h-[500px]">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-80 h-80 bg-primary/40 rounded-3xl"
                style={{ transform: "rotate(25deg)" }}
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-10 right-0 w-64 h-64 bg-interactive/30 rounded-3xl"
                style={{ transform: "rotate(25deg)" }}
              />
              <div className="absolute top-20 right-32 w-1 h-32 bg-foreground/20" style={{ transform: "rotate(45deg)" }} />
              <div className="absolute bottom-32 left-20 w-1 h-40 bg-foreground/20" style={{ transform: "rotate(-45deg)" }} />
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="border border-primary/50 bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm uppercase tracking-wider text-primary">
                Powering Innovation for Startups & Enterprises
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Empowering Digital Growth
              <br />
              with{" "}
              <span className="bg-gradient-to-r from-primary to-interactive bg-clip-text text-transparent">
                Trusted Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-['Sora']"
            >
              Smart, scalable solutions designed to fuel your growth.
              <br />
              We blend innovation with reliability to keep your business ahead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-interactive text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-primary/50 flex items-center gap-2 justify-center"
                >
                  Get Started
                  <span>→</span>
                </motion.button>
              </Link>
              <Link href="#services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-muted-foreground/30 hover:border-primary hover:bg-primary/10 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  View our work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted by Partners Section */}
      <section className="py-16 bg-accent/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Trusted by
            </p>
          </motion.div>

          {/* Animated Logo Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-16 items-center"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors"
                  style={{ minWidth: "200px" }}
                >
                  {partner}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {/* <FontAwesomeIcon icon={service.icon} /> */}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/20 via-accent/20 to-interactive/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-interactive text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg shadow-primary/50"
            >
              Contact Us Today
            </motion.button>
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
