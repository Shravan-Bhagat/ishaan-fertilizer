import Link from "next/link";
import { CONFIRMED_PRODUCTS } from "@/data/products";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 text-center bg-background">
      <Card className="max-w-2xl bg-card border-border shadow-sm p-2 sm:p-4">
        <CardHeader className="border-b-0 pb-2">
          <div className="flex justify-center mb-2">
            <Badge variant="accent">Brand: Vasudhaan</Badge>
          </div>
          <CardTitle className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Ishaan Fertilizer
          </CardTitle>
          <p className="text-base md:text-lg font-medium text-secondary italic mt-2">
            &ldquo;Healthy Soil = Healthy Harvest = Prosperous Farmer&rdquo;
          </p>
        </CardHeader>

        <CardContent className="space-y-6 pt-0">
          <div className="p-4 bg-muted/60 rounded-xl border border-border text-foreground text-sm leading-relaxed">
            Welcome to the official digital platform of <strong>Ishaan Fertilizer</strong> (Satara District, Maharashtra).
            Day 1 foundation active &amp; Day 2 Design System established.
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Confirmed Products Preview ({CONFIRMED_PRODUCTS.length})
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {CONFIRMED_PRODUCTS.map((product) => (
                <Badge key={product.id} variant="primary" className="py-1.5 px-3">
                  {product.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <Link href="/design-system">
              <Button variant="primary" size="md">
                Explore Design System Showcase &rarr;
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

