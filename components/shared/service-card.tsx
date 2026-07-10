"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl border border-border bg-bg-secondary/30 backdrop-blur">
      <Icon className="w-6 h-6 text-accent-primary mb-4" />
      <h3 className="text-lg font-bold font-display text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary font-body leading-relaxed">{description}</p>
    </div>
  );
}
