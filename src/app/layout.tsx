import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishaan Fertilizer | Vasudhaan - Sustainable Organic Farming",
  description: "Ishaan Fertilizer provides eco-friendly organic soil inputs under the Vasudhaan brand in Satara district, Maharashtra. Healthy Soil = Healthy Harvest = Prosperous Farmer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

