import Link from "next/link";
import { CONFIRMED_PRODUCTS } from "@/data/products";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Label,
  Select,
  Checkbox,
  Badge,
} from "@/components/ui";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Banner */}
        <header className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent">Development Environment</Badge>
                <Badge variant="secondary">Day 2 Foundation</Badge>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Ishaan Fertilizer — Design System Showcase
              </h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                Brand: <strong className="text-foreground">Vasudhaan</strong> | Location: Satara district, Maharashtra
              </p>
              <p className="text-xs text-muted-foreground mt-1 italic">
                &ldquo;Healthy Soil = Healthy Harvest = Prosperous Farmer&rdquo;
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                &larr; Back to Landing Preview
              </Button>
            </Link>
          </div>
        </header>

        {/* Section 1: Color Tokens */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              1. Color Token System
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Centralized CSS variables mapped to Tailwind utility classes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-primary text-primary-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-primary/20">
              <span className="text-xs font-semibold uppercase opacity-90">Primary</span>
              <span className="text-xs font-mono">Forest Green</span>
            </div>

            <div className="bg-secondary text-secondary-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-secondary/20">
              <span className="text-xs font-semibold uppercase opacity-90">Secondary</span>
              <span className="text-xs font-mono">Soil Earth</span>
            </div>

            <div className="bg-accent text-accent-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-accent/20">
              <span className="text-xs font-semibold uppercase opacity-90">Accent</span>
              <span className="text-xs font-mono">Harvest Gold</span>
            </div>

            <div className="bg-card text-card-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-border">
              <span className="text-xs font-semibold uppercase text-muted-foreground">Surface / Card</span>
              <span className="text-xs font-mono">Pure White</span>
            </div>

            <div className="bg-muted text-muted-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-border">
              <span className="text-xs font-semibold uppercase">Muted Surface</span>
              <span className="text-xs font-mono">Sage Tint</span>
            </div>

            <div className="bg-success text-success-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-success/20">
              <span className="text-xs font-semibold uppercase opacity-90">Success</span>
              <span className="text-xs font-mono">Crop Green</span>
            </div>

            <div className="bg-destructive text-destructive-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-destructive/20">
              <span className="text-xs font-semibold uppercase opacity-90">Destructive</span>
              <span className="text-xs font-mono">Alert Red</span>
            </div>

            <div className="bg-background text-foreground p-4 rounded-xl shadow-xs flex flex-col justify-between h-28 border border-border">
              <span className="text-xs font-semibold uppercase text-muted-foreground">Background</span>
              <span className="text-xs font-mono">Organic White</span>
            </div>
          </div>
        </section>

        {/* Section 2: Typography Hierarchy */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              2. Typography Scale
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              High-readability typography hierarchy tuned for mobile and desktop viewing.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">Display Heading</span>
              <span className="text-3xl sm:text-5xl font-extrabold tracking-tight text-primary">
                Vasudhaan Organic Soil Solutions
              </span>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">H1 Heading</span>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                Ishaan Fertilizer — Empowering Sustainable Farming
              </h1>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">H2 Heading</span>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-foreground">
                Bio-Enriched Soil Inputs for Satara District
              </h2>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">H3 Heading</span>
              <h3 className="text-lg sm:text-2xl font-semibold text-foreground">
                Healthy Soil = Healthy Harvest = Prosperous Farmer
              </h3>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">H4 Heading</span>
              <h4 className="text-base sm:text-xl font-semibold text-foreground">
                Confirmed Organic Product Portfolio
              </h4>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">Body Large</span>
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                Our organic inputs nourish beneficial soil micro-organisms, rebuild soil humus, and maximize crop yields naturally.
              </p>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">Body Standard</span>
              <p className="text-sm sm:text-base leading-relaxed text-foreground">
                Ishaan Fertilizer is committed to eco-friendly, sustainable agriculture in Maharashtra. Every bag of Vasudhaan is crafted with scientific integrity.
              </p>
            </div>

            <div className="border-b border-border/50 pb-4">
              <span className="text-xs text-muted-foreground block font-mono mb-1">Body Small / Micro</span>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Suitable for field crops, sugarcane, horticulture, and commercial organic farming.
              </p>
            </div>

            <div>
              <span className="text-xs text-muted-foreground block font-mono mb-1">Caption / Badge Text</span>
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                SATARA DISTRICT • ORGANIC INPUT REGISTERED
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Button System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              3. Button Component System
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Variants, sizes, touch targets (&ge;44px min-height), and interactive states.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase text-muted-foreground mb-3">Variants</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive Action</Button>
                <Button variant="primary" disabled>Disabled State</Button>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-muted-foreground mb-3">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm">Small (sm)</Button>
                <Button variant="primary" size="md">Medium / Touch (md)</Button>
                <Button variant="primary" size="lg">Large CTA (lg)</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Card Component System */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              4. Card Component System
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Modular structure supporting future product, feature, and value sections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONFIRMED_PRODUCTS.map((prod, idx) => (
              <Card key={prod.id} className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant={idx === 0 ? "primary" : idx === 1 ? "secondary" : "accent"}>
                        Vasudhaan
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">0{idx + 1}</span>
                    </div>
                    <CardTitle>{prod.name}</CardTitle>
                    <CardDescription>{prod.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      {prod.description}
                    </p>
                    <ul className="space-y-1.5 pt-2 border-t border-border/40">
                      {prod.benefits.map((b, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-success font-bold mt-0.5">&check;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Component Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 5: Form & UI Controls Foundation */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              5. Basic UI & Form Controls Foundation
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Reusable form fields with focus rings, accessible labels, and touch targets.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="farmerName" required>
                  Farmer Name / Customer Name
                </Label>
                <Input
                  id="farmerName"
                  placeholder="e.g. Ramesh Patil"
                />
              </div>

              <div>
                <Label htmlFor="district">District / Location</Label>
                <Input
                  id="district"
                  defaultValue="Satara District, Maharashtra"
                  readOnly
                  className="bg-muted/40"
                />
              </div>

              <div>
                <Label htmlFor="productInterest">Select Product Interest</Label>
                <Select id="productInterest">
                  <option value="">Choose a Vasudhaan product...</option>
                  <option value="prom">Vasudhaan PROM</option>
                  <option value="krom">Vasudhaan KROM</option>
                  <option value="compost">Vasudhaan Enriched Compost</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="errorInput" required>
                  Validation Error State Demo
                </Label>
                <Input
                  id="errorInput"
                  error
                  defaultValue="Invalid input format example"
                />
                <span className="text-xs text-destructive mt-1 block">
                  Please enter a valid phone number.
                </span>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="message">Enquiry Message / Crop Details</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your crop type, farm acreage, or organic fertilizer requirement..."
                  rows={3}
                />
              </div>

              <div className="md:col-span-2 space-y-3 pt-2">
                <Checkbox
                  id="organicCert"
                  label="I am interested in organic, eco-friendly sustainable soil conditioning."
                  defaultChecked
                />
                <Checkbox
                  id="dealerInterest"
                  label="I am interested in becoming a regional fertilizer distributor / dealer in Satara."
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer info */}
        <footer className="text-center py-6 border-t border-border text-xs text-muted-foreground">
          <p>Ishaan Fertilizer Design System • Day 2 Setup Complete</p>
        </footer>
      </div>
    </div>
  );
}
