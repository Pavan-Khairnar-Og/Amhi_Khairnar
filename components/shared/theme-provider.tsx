"use client";

import * as React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: "travels" | "tailoring";
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <div data-theme={theme} className="min-h-screen flex flex-col font-body">
      {children}
    </div>
  );
}
