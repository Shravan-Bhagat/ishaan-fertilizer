"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION, NavItem } from "@/data/navigation";
import { Button, Badge } from "@/components/ui";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: "EN" | "MR";
  onLangChange: (lang: "EN" | "MR") => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  currentLang,
  onLangChange,
}: MobileMenuProps) {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = React.useState(false);

  // Close menu on pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-background/95 backdrop-blur-md transition-all duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
            🌱
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-primary block leading-none">
              Ishaan Fertilizer
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-accent-foreground/80 block">
              Vasudhaan
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          className="p-2.5 rounded-lg border border-border text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Language Switcher UI */}
      <div className="px-4 py-3 bg-muted/40 border-b border-border flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Language / भाषा
        </span>
        <div className="inline-flex rounded-lg border border-border bg-card p-1">
          <button
            onClick={() => onLangChange("EN")}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-colors min-h-[36px] ${
              currentLang === "EN"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Select English language"
          >
            English
          </button>
          <button
            onClick={() => onLangChange("MR")}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-colors min-h-[36px] ${
              currentLang === "MR"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="मराठी भाषा निवडा"
          >
            मराठी
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {MAIN_NAVIGATION.map((item: NavItem) => {
          const isActive = pathname === item.href;
          const hasChildren = Boolean(item.children && item.children.length > 0);

          if (hasChildren) {
            return (
              <div key={item.label} className="border-b border-border/40 py-2">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-foreground rounded-lg hover:bg-muted min-h-[44px]"
                  aria-expanded={productsOpen}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsOpen && item.children && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-muted/30 rounded-lg mt-1 border border-border/50">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline min-h-[40px] flex items-center"
                    >
                      View All Products &rarr;
                    </Link>
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={onClose}
                        className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors min-h-[44px] flex items-center ${
                          pathname === subItem.href
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
              onClick={onClose}
              className={`flex items-center px-4 py-3 text-base font-semibold rounded-lg transition-colors min-h-[44px] ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Footer CTAs & Location info */}
      <div className="p-4 border-t border-border bg-card space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Satara District, Maharashtra</span>
          <Badge variant="accent" className="text-[10px]">Vasudhaan</Badge>
        </div>
        <Link href="/contact" onClick={onClose} className="block w-full">
          <Button variant="primary" size="md" className="w-full">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}
