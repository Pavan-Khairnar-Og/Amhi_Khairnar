"use client";

import { motion } from "framer-motion";
import { Compass, Scissors, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingGateway() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg-primary text-text-primary flex flex-col items-center justify-center p-6 md:p-12 font-body">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-2xl mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent-primary/40 via-text-primary to-accent-secondary/40">
          Amhi Khairnar
        </h1>
        <p className="mt-4 text-text-secondary text-lg md:text-xl font-light">
          Experience world-class tours & travels or explore bespoke high-fashion tailoring.
        </p>
      </motion.div>

      {/* Cards container */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Travels Gateway Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -8 }}
          className="relative group overflow-hidden rounded-2xl border border-border bg-bg-secondary/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent-primary/30 hover:bg-bg-secondary/80"
        >
          <div className="absolute -right-16 -top-16 w-36 h-36 bg-accent-primary/10 rounded-full blur-2xl group-hover:bg-accent-primary/20 transition-all duration-500" />
          
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex p-4 rounded-xl bg-accent-primary/10 text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                Tours & Travels
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Uncover breath-taking destinations, custom itineraries, and seamless journeys crafted just for you. Let&apos;s make your next escape unforgettable.
              </p>
            </div>
            
            <Link href="/travels" className="inline-flex items-center gap-2 text-accent-primary group-hover:text-accent-primary/80 font-semibold group/btn">
              Explore Destinations 
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Tailoring Studio Gateway Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ y: -8 }}
          className="relative group overflow-hidden rounded-2xl border border-border bg-bg-secondary/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent-secondary/30 hover:bg-bg-secondary/80"
        >
          <div className="absolute -right-16 -top-16 w-36 h-36 bg-accent-secondary/10 rounded-full blur-2xl group-hover:bg-accent-secondary/20 transition-all duration-500" />
          
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex p-4 rounded-xl bg-accent-secondary/10 text-accent-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scissors className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-text-primary group-hover:text-accent-secondary transition-colors">
                Tailoring Studio
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Bespoke garments designed to fit you flawlessly. High-quality craftsmanship, premium materials, and modern tailoring at your service.
              </p>
            </div>
            
            <Link href="/tailoring" className="inline-flex items-center gap-2 text-accent-secondary group-hover:text-accent-secondary/80 font-semibold group/btn">
              Visit Tailoring Studio 
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer / Admin gateway */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="z-10 mt-16 text-text-secondary/70 hover:text-text-secondary transition-colors"
      >
        <Link href="/admin">
          Admin Portal Dashboard
        </Link>
      </motion.div>
    </div>
  );
}
