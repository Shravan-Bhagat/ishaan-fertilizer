export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Ishaan", href: "/about" },
  { label: "Vasudhaan", href: "/vasudhaan" },
  {
    label: "Our Products",
    href: "/products",
    children: [
      { label: "Vasudhaan PROM", href: "/products/vasudhaan-prom" },
      { label: "Vasudhaan KROM", href: "/products/vasudhaan-krom" },
      { label: "Vasudhaan Enriched Compost", href: "/products/vasudhaan-enriched-compost" },
    ],
  },
  { label: "Why Choose Ishaan", href: "/why-choose-ishaan" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Our Facility", href: "/facility" },
  { label: "Contact", href: "/contact" },
];
