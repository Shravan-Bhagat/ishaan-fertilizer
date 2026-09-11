import Link from "next/link";
import { CONFIRMED_PRODUCTS } from "@/data/products";
import { Badge } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                🌱
              </div>
              <div>
                <span className="font-extrabold text-lg text-secondary-foreground block leading-none">
                  Ishaan Fertilizer
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent block">
                  Brand: Vasudhaan
                </span>
              </div>
            </div>

            <p className="text-sm italic font-medium text-accent/90 leading-relaxed">
              &ldquo;Healthy Soil = Healthy Harvest = Prosperous Farmer&rdquo;
            </p>

            <p className="text-xs text-secondary-foreground/80 leading-relaxed">
              Dedicated to eco-friendly, bio-enriched organic soil conditioning and sustainable farming solutions.
            </p>

            <div className="pt-1">
              <Badge variant="accent" className="text-[10px]">
                Satara District, Maharashtra
              </Badge>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent font-mono">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Ishaan Fertilizer
                </Link>
              </li>
              <li>
                <Link href="/vasudhaan" className="hover:text-accent transition-colors">
                  Our Brand — Vasudhaan
                </Link>
              </li>
              <li>
                <Link href="/why-choose-ishaan" className="hover:text-accent transition-colors">
                  Why Choose Ishaan
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:text-accent transition-colors">
                  Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/facility" className="hover:text-accent transition-colors">
                  Our Manufacturing Facility
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Confirmed Products */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent font-mono">
              Vasudhaan Organic Products
            </h3>
            <ul className="space-y-2.5 text-xs">
              {CONFIRMED_PRODUCTS.map((prod) => (
                <li key={prod.id} className="border-b border-secondary-foreground/10 pb-1.5">
                  <Link href={`/products/${prod.id}`} className="hover:text-accent transition-colors font-semibold block">
                    {prod.name}
                  </Link>
                  <span className="text-[11px] text-secondary-foreground/70 block">
                    {prod.category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Core Values & Location */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent font-mono">
              Core Brand Values
            </h3>
            <ul className="space-y-2 text-xs text-secondary-foreground/90">
              <li className="flex items-center gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span>Sustainability &amp; Eco-Friendliness</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span>Integrity &amp; Scientific Quality</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span>Soil Revitalization Innovation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-bold">&bull;</span>
                <span>Farmer-Centric Commitment</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-secondary-foreground/15 text-xs text-secondary-foreground/70">
              <p className="font-semibold text-secondary-foreground">Region of Operation:</p>
              <p>Satara District, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-secondary-foreground/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/70">
          <p>&copy; {currentYear} Ishaan Fertilizer. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Vasudhaan Brand Soil Solutions</span>
            <span>&bull;</span>
            <span className="hover:underline cursor-pointer">Satara, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
