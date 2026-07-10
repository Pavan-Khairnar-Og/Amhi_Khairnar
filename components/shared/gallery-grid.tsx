"use client";

import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="break-inside-avoid overflow-hidden rounded-xl border border-border bg-bg-secondary/30 backdrop-blur"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            unoptimized
            className="w-full h-auto object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
