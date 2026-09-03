import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
