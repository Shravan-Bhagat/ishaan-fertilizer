"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION, NavItem } from "@/data/navigation";
import { Button, Badge } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = React.useState(false);
  const [currentLang, setCurrentLang] = React.useState<"EN" | "MR">("EN");
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close products dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur-md border-b border-border/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Treatment */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-xs group-hover:scale-105 transition-transform">
              🌱
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-primary leading-none">
                Ishaan Fertilizer
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider leading-none">
                  Satara, Maharashtra
                </span>
                <Badge variant="accent" className="text-[9px] py-0 px-1.5 h-3.5">
                  Vasudhaan
                </Badge>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item: NavItem) => {
              const isActive = pathname === item.href;
              const hasChildren = Boolean(item.children && item.children.length > 0);

              if (hasChildren) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                        pathname.startsWith(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                      aria-expanded={productsDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-150 ${
                          productsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                        className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-border bg-card shadow-lg p-2 space-y-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      >
                        <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50">
                          Confirmed Products
                        </div>
                        {item.children?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setProductsDropdownOpen(false)}
                            className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                              pathname === subItem.href
                                ? "bg-primary/10 text-primary font-bold"
                                : "text-foreground hover:bg-muted hover:text-primary"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                    isActive
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Utilities (Language Switcher & Contact CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher UI Foundation */}
            <div className="inline-flex rounded-lg border border-border bg-muted/50 p-1" title="Language Switcher UI">
              <button
                onClick={() => setCurrentLang("EN")}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
                  currentLang === "EN"
                    ? "bg-card text-primary shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setCurrentLang("MR")}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
                  currentLang === "MR"
                    ? "bg-card text-primary shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="मराठी मध्ये बदला"
              >
                मराठी
              </button>
            </div>

            <Link href="/contact">
              <Button variant="primary" size="sm">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Button preview */}
            <button
              onClick={() => setCurrentLang(currentLang === "EN" ? "MR" : "EN")}
              className="px-2 py-1 text-xs font-bold border border-border rounded-md text-foreground bg-muted/40 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle language"
            >
              {currentLang}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-border text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentLang={currentLang}
        onLangChange={setCurrentLang}
      />
    </header>
  );
}
