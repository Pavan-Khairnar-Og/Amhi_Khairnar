"use client";

import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export default function ReviewCard({ name, rating, date, text }: ReviewCardProps) {
  return (
    <div className="p-6 rounded-xl border border-border bg-bg-secondary/30 backdrop-blur flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold font-display text-text-primary">{name}</h3>
          <span className="text-xs text-text-secondary">{date}</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, index) => {
            const isFilled = index < rating;
            return (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  isFilled ? "text-accent-primary fill-accent-primary" : "text-text-secondary"
                }`}
              />
            );
          })}
        </div>
        <p className="text-sm font-body text-text-primary leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
