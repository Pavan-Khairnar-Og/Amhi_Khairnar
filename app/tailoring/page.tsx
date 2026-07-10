"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Ruler, Crown, Shirt, Layers, Palette } from "lucide-react";
import BackToGateway from "@/components/shared/back-to-gateway";
import ServiceCard from "@/components/shared/service-card";

export default function TailoringLanding() {
  const services = [
    {
      icon: Sparkles,
      title: "Designer Blouses",
      description: "Custom-designed blouses tailored to match your personal style and special occasions.",
    },
    {
      icon: Crown,
      title: "Bridal Blouses",
      description: "Exquisite bridal wear featuring intricate detailing, premium fabrics, and perfect fit.",
    },
    {
      icon: Shirt,
      title: "Dresses",
      description: "Custom tailored dresses, gowns, and western wear designed to fit beautifully.",
    },
    {
      icon: Layers,
      title: "Kurtis",
      description: "Daily wear and festive kurtis stitched to perfection with custom necklines and sleeves.",
    },
    {
      icon: Scissors,
      title: "Alterations",
      description: "Professional alteration services to adjust and resize your favorite garments.",
    },
    {
      icon: Ruler,
      title: "Custom Stitching",
      description: "Stitching services tailored to your exact measurements and design specifications.",
    },
    {
      icon: Palette,
      title: "Embroidery",
      description: "Artisan embroidery and embellishments to add a unique touch to your fabrics.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-bg-primary text-text-primary flex flex-col p-6 md:p-12 font-body">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="z-10 mb-12">
        <BackToGateway />
      </nav>

      {/* Hero content */}
      <div className="z-10 flex flex-col max-w-4xl my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary text-sm font-semibold mb-6">
            <Scissors className="w-4 h-4" />
            <span>Bespoke Tailoring Studio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
            Designed for Comfort, Cut for <span className="text-accent-primary">Elegance</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8">
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
          <div className="p-6 rounded-xl border border-border bg-bg-secondary/30 backdrop-blur">
            <Ruler className="w-6 h-6 text-accent-primary mb-4" />
            <h3 className="text-lg font-bold text-text-primary mb-2">Bespoke Fitting</h3>
            <p className="text-sm text-text-secondary">
              Precise, high-fidelity measurement services to guarantee your garments fit perfectly.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-bg-secondary/30 backdrop-blur">
            <Sparkles className="w-6 h-6 text-accent-secondary mb-4" />
            <h3 className="text-lg font-bold text-text-primary mb-2">Artisan Selection</h3>
            <p className="text-sm text-text-secondary">
              Choose from our curated library of luxury fabrics sourced globally.
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8 text-text-primary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
