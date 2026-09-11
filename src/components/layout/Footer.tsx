import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors",
        className
      )}
    >
      {/* Upper Organic Highlight Banner */}
      <div className="bg-brand-900/60 border-b border-brand-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-brand-800 text-brand-300">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.16-.62.38-1.57.42-2.18.06-.93.07-1.98.07-2.31 0-1.02-.63-1.44-1.12-1.89-1.27-1.16-1.56-2.58-1.56-3.86 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.28-.29 2.7-1.56 3.86-.49.45-1.12.87-1.12 1.89 0 .33.01 1.38.07 2.31.04.61.26 1.56.42 2.18 3.97-1.32 6.84-5.07 6.84-9.49 0-5.52-4.48-10-10-10z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Committed to Sustainable & Organic Soil Enrichment
              </p>
              <p className="text-xs text-brand-200">
                Eco-friendly soil inputs manufactured for maximum harvest vitality.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="brand" size="sm" className="bg-brand-950/80 text-brand-200 border-brand-700">
              100% Organic Focus
            </Badge>
            <Badge variant="earth" size="sm" className="bg-stone-900 text-amber-200 border-stone-700">
              Satara District, MH
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Philosophy (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-700 flex items-center justify-center text-white font-bold">
                IF
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Ishaan Fertilizer
                </h3>
                <span className="text-xs text-brand-400 font-semibold tracking-wider uppercase">
                  Brand: Vasudhaan
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold italic text-brand-300 border-l-2 border-brand-500 pl-3 py-0.5">
              &ldquo;Healthy Soil = Healthy Harvest = Prosperous Farmer&rdquo;
            </p>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Ishaan Fertilizer is an agricultural enterprise in Satara district, Maharashtra,
              dedicated to sustainable, organic crop nutrition. Our Vasudhaan range restores natural
              soil biology and empowers farmers with long-term agricultural resilience.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <span className="font-semibold text-stone-300">Core Values: </span>
              Sustainability • Integrity • Innovation • Farmer-Centricity
            </div>
          </div>

          {/* Col 2: Confirmed Products (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Confirmed Products
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a
                  href="#products"
                  className="hover:text-brand-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  Vasudhaan PROM
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-brand-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  Vasudhaan KROM
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-brand-300 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  Vasudhaan Enriched Compost
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#" className="hover:text-brand-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-organic" className="hover:text-brand-300 transition-colors">
                  Why Organic
                </a>
              </li>
              <li>
                <a href="#soil-health" className="hover:text-brand-300 transition-colors">
                  Soil Health
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-300 transition-colors">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Headquarters
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">📍</span>
                <span>Satara District, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">🌱</span>
                <span>Organic Soil Revitalization</span>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-brand-300 hover:text-brand-200 underline underline-offset-4"
                >
                  Send Inquiry &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {currentYear} Ishaan Fertilizer (Vasudhaan). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Satara, Maharashtra</span>
            <span>•</span>
            <span>Eco-friendly Soil Inputs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
