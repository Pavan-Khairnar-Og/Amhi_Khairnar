"use client";

import { motion } from "framer-motion";
import { Compass, Calendar, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TravelsLanding() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col p-6 md:p-12">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6">
            <Compass className="w-4 h-4" />
            <span>Premium Travels & Tours</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Crafting Journeys Beyond <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Imagination</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8">
            Explore curated global destinations, stay in handpicked luxury accommodations, and enjoy experiences designed uniquely for you.
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
            <MapPin className="w-6 h-6 text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Tailored Itineraries</h3>
            <p className="text-sm text-zinc-400">
              Personalized itineraries based on your interests, travel style, and pace.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur">
            <Calendar className="w-6 h-6 text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Concierge Booking</h3>
            <p className="text-sm text-zinc-400">
              End-to-end booking for flights, resorts, transfers, and exclusive VIP tours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
