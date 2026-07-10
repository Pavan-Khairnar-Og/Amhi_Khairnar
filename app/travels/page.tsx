"use client";

import { motion } from "framer-motion";
import { Compass, Calendar, MapPin, Car, UserCheck, Plane, Binoculars, Route, Briefcase, Phone, Mail } from "lucide-react";
import BackToGateway from "@/components/shared/back-to-gateway";
import ServiceCard from "@/components/shared/service-card";
import GalleryGrid from "@/components/shared/gallery-grid";
import ReviewCard from "@/components/shared/review-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/shared/footer";

export default function TravelsLanding() {
  const services = [
    {
      icon: Car,
      title: "Car Rentals",
      description: "Wide range of clean, well-maintained vehicles for self-drive or chauffeur-driven options.",
    },
    {
      icon: UserCheck,
      title: "Driver on Hire",
      description: "Professional, experienced, and verified drivers available for your personal trips.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Timely and hassle-free pickup and drop services to ensure you never miss a flight.",
    },
    {
      icon: Binoculars,
      title: "Local Sightseeing",
      description: "Curated tours to experience local culture, landmarks, and hidden gems.",
    },
    {
      icon: Route,
      title: "Outstation Trips",
      description: "Comfortable and safe long-distance travel options for weekend getaways and vacations.",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Tailored travel solutions, billing, and dedicated support for business travelers.",
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
            <Compass className="w-4 h-4" />
            <span>Premium Travels & Tours</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
            Crafting Journeys Beyond <span className="text-accent-primary">Imagination</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8">
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
          <div className="p-6 rounded-xl border border-border bg-bg-secondary/30 backdrop-blur">
            <MapPin className="w-6 h-6 text-accent-primary mb-4" />
            <h3 className="text-lg font-bold text-text-primary mb-2">Tailored Itineraries</h3>
            <p className="text-sm text-text-secondary">
              Personalized itineraries based on your interests, travel style, and pace.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-bg-secondary/30 backdrop-blur">
            <Calendar className="w-6 h-6 text-accent-secondary mb-4" />
            <h3 className="text-lg font-bold text-text-primary mb-2">Concierge Booking</h3>
            <p className="text-sm text-text-secondary">
              End-to-end booking for flights, resorts, transfers, and exclusive VIP tours.
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
              { src: "https://placehold.co/400x300", alt: "Premium Vehicle", width: 400, height: 300 },
              { src: "https://placehold.co/400x500", alt: "Scenic Route", width: 400, height: 500 },
              { src: "https://placehold.co/400x400", alt: "Airport Transfer", width: 400, height: 400 },
              { src: "https://placehold.co/400x600", alt: "Luxury Resort", width: 400, height: 600 },
              { src: "https://placehold.co/400x450", alt: "Local Tour", width: 400, height: 450 },
              { src: "https://placehold.co/400x350", alt: "Happy Clients", width: 400, height: 350 },
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
              name="Amit Sharma"
              rating={5}
              date="2 weeks ago"
              text="Excellent service! The car was extremely clean and the driver was very professional."
            />
            <ReviewCard
              name="Priya Patel"
              rating={4}
              date="1 month ago"
              text="Very reliable airport transfers. Smooth booking process and on-time service."
            />
            <ReviewCard
              name="Rajesh Kumar"
              rating={5}
              date="3 days ago"
              text="Had an amazing family trip to the hills. The custom itinerary was perfect and relaxed."
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
                  Have questions or want to customize your tour? Send us a message and our team will get back to you within 24 hours.
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
                    <p className="text-sm font-semibold text-text-primary">travels@amhi-khairnar.com</p>
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
        <Footer businessName="Amhi Khairnar Travels & Tours" />
      </div>
    </div>
  );
}
