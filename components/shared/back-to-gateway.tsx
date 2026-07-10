"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToGateway() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back to gateway</span>
    </Link>
  );
}
