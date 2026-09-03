import { CONFIRMED_PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 text-center bg-gradient-to-b from-green-50 via-stone-50 to-emerald-50">
      <div className="max-w-2xl bg-white border border-emerald-100 shadow-sm rounded-2xl p-8 md:p-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-100 rounded-full mb-4 uppercase">
          Brand: Vasudhaan
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-900 mb-4 tracking-tight">
          Ishaan Fertilizer
        </h1>
        <p className="text-base md:text-lg font-medium text-emerald-700 mb-6 italic">
          &ldquo;Healthy Soil = Healthy Harvest = Prosperous Farmer&rdquo;
        </p>
        
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 mb-8 text-stone-700 text-sm leading-relaxed">
          Welcome to the official digital platform of <strong>Ishaan Fertilizer</strong> (Satara District, Maharashtra).
          Day 1 initial foundation setup complete and running smoothly.
        </div>

        <div className="border-t border-stone-100 pt-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            Confirmed Products Preview ({CONFIRMED_PRODUCTS.length})
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {CONFIRMED_PRODUCTS.map((product) => (
              <span key={product.id} className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                {product.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
