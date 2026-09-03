export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
}

export type ConfirmedProductName =
  | "Vasudhaan PROM"
  | "Vasudhaan KROM"
  | "Vasudhaan Enriched Compost";
