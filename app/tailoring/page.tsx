"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Ruler, Crown, Shirt, Layers, Palette, Phone, Mail } from "lucide-react";
import BackToGateway from "@/components/shared/back-to-gateway";
import ServiceCard from "@/components/shared/service-card";
import GalleryGrid from "@/components/shared/gallery-grid";
import ReviewCard from "@/components/shared/review-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/footer";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // TODO Phase 8: wire to backend/API route
    console.log("Contact form submitted:", data);
  };

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

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8 text-accent-primary">
            Gallery
          </h2>
          <GalleryGrid
            items={[
              { src: "https://placehold.co/400x400", alt: "Bridal Blouse", width: 400, height: 400 },
              { src: "https://placehold.co/400x500", alt: "Embroidery Detail", width: 400, height: 500 },
              { src: "https://placehold.co/400x300", alt: "Custom Dress", width: 400, height: 300 },
              { src: "https://placehold.co/400x600", alt: "Designer Suit", width: 400, height: 600 },
              { src: "https://placehold.co/400x350", alt: "Fabric Selection", width: 400, height: 350 },
              { src: "https://placehold.co/400x450", alt: "Artisan Stitching", width: 400, height: 450 },
            ]}
          />
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8 text-accent-primary">
            Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              name="Sunita Rao"
              rating={5}
              date="1 week ago"
              text="Absolutely loved the bridal blouse stitching! The embroidery details are stunning."
            />
            <ReviewCard
              name="Anjali Nair"
              rating={4}
              date="3 weeks ago"
              text="Great fitting for my designer dresses. Completed on time as promised."
            />
            <ReviewCard
              name="Meera Joshi"
              rating={5}
              date="5 days ago"
              text="Very professional boutique. The alterations made my old gowns fit like new again."
            />
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8 text-accent-primary">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-bg-secondary/20 border border-border rounded-2xl p-8 md:p-12 backdrop-blur">
            {/* Left side: Info */}
            <div className="flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-4">
                  Get in Touch
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                  Ready for a bespoke fitting or have questions about custom designs? Send us a message and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Call Us</p>
                    <p className="text-sm font-semibold text-text-primary">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Email Us</p>
                    <p className="text-sm font-semibold text-text-primary">tailoring@amhi-khairnar.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Name
                </label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Phone Number
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your Message" required className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full bg-accent-primary text-bg-primary hover:bg-accent-primary/90 font-bold h-10 rounded-lg cursor-pointer transition-colors duration-200">
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <Footer businessName="Amhi Khairnar Bespoke Tailoring Studio" />
      </div>
    </div>
  );
}
