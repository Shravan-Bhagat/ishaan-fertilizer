"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface NavLinkItem {
  label: string;
  href: string;
}

export const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Why Organic", href: "#why-organic" },
  { label: "Soil Health", href: "#soil-health" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export interface NavbarProps {
  links?: NavLinkItem[];
  onInquireClick?: () => void;
  className?: string;
}

export function Navbar({
  links = DEFAULT_NAV_LINKS,
  onInquireClick,
  className,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to enhance navbar elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80"
          : "bg-white/80 backdrop-blur-sm border-b border-stone-100",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-xl p-1"
          >
            {/* Organic Sprout Icon Badge */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.16-.62.38-1.57.42-2.18.06-.93.07-1.98.07-2.31 0-1.02-.63-1.44-1.12-1.89-1.27-1.16-1.56-2.58-1.56-3.86 0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.28-.29 2.7-1.56 3.86-.49.45-1.12.87-1.12 1.89 0 .33.01 1.38.07 2.31.04.61.26 1.56.42 2.18 3.97-1.32 6.84-5.07 6.84-9.49 0-5.52-4.48-10-10-10zM12 14c-1.1 0-2-.9-2-2 0-1.66 1.34-3 3-3 .55 0 1 .45 1 1s-.45 1-1 1c-.55 0-1 .45-1 1 0 .55-.45 1-1 1z" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-stone-900 tracking-tight text-lg sm:text-xl group-hover:text-brand-800 transition-colors">
                  Ishaan Fertilizer
                </span>
                <Badge variant="brand" size="sm" className="hidden sm:inline-flex">
                  Vasudhaan
                </Badge>
              </div>
              <span className="text-[11px] text-stone-500 font-medium tracking-wide">
                Satara, Maharashtra • Organic Agriculture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-brand-800 hover:bg-brand-50 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            {onInquireClick ? (
              <Button variant="primary" size="sm" onClick={onInquireClick}>
                Inquire Now
              </Button>
            ) : (
              <Button variant="primary" size="sm" href="#contact">
                Inquire Now
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[80px] bg-white border-b border-stone-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Menu
              </span>
              <Badge variant="brand" size="sm">
                Vasudhaan
              </Badge>
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-base font-semibold text-stone-800 hover:text-brand-800 hover:bg-brand-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
              <div className="text-xs text-stone-500 px-1">
                📍 Satara District, Maharashtra, India
              </div>
              {onInquireClick ? (
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => {
                    closeMobileMenu();
                    onInquireClick();
                  }}
                >
                  Inquire Now
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  href="#contact"
                  onClick={closeMobileMenu}
                >
                  Inquire Now
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
