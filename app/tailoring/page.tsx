"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Ruler, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TailoringLanding() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col p-6 md:p-12">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="z-10 mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to gateway</span>
        </Link>
      </nav>

      {/* Hero content */}
      <div className="z-10 flex flex-col max-w-4xl my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm font-semibold mb-6">
            <Scissors className="w-4 h-4" />
            <span>Bespoke Tailoring Studio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Designed for Comfort, Cut for <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-amber-400">Elegance</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8">
            Experience the luxury of custom-tailored apparel. Hand-selected premium fabrics, precision measurement, and artisan craftsmanship.
          </p>
        </motion.div>

        {/* Feature section/placeholder cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur">
            <Ruler className="w-6 h-6 text-rose-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Bespoke Fitting</h3>
            <p className="text-sm text-zinc-400">
              Precise, high-fidelity measurement services to guarantee your garments fit perfectly.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur">
            <Sparkles className="w-6 h-6 text-rose-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Artisan Selection</h3>
            <p className="text-sm text-zinc-400">
              Choose from our curated library of luxury fabrics sourced globally.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
