"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPlaceholder() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col p-6 md:p-12">
      {/* Navigation */}
      <nav className="z-10 mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to gateway</span>
        </Link>
      </nav>

      {/* Placeholder content */}
      <div className="z-10 flex flex-col items-center justify-center max-w-lg mx-auto my-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full mb-6">
            <Shield className="w-12 h-12 text-zinc-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-zinc-500 font-light leading-relaxed mb-6">
            This space is currently a placeholder for the administrative dashboard. Future updates will include analytics, booking systems, and studio inventory management.
          </p>
          <div className="text-xs uppercase tracking-wider text-zinc-600 font-semibold px-3 py-1 rounded bg-zinc-900 border border-zinc-800">
            Scaffolding Active
          </div>
        </motion.div>
      </div>
    </div>
  );
}
