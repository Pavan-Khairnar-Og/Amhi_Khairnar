"use client";

interface FooterProps {
  businessName: string;
}

export default function Footer({ businessName }: FooterProps) {
  return (
    <footer className="w-full mt-24 py-8 border-t border-border text-center text-sm text-text-secondary font-body">
      <div className="max-w-4xl mx-auto px-6">
        <p>{businessName} &copy; 2026 Amhi Khairnar</p>
      </div>
    </footer>
  );
}
