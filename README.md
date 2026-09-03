# Ishaan Fertilizer Website

This repository contains the frontend static website for Ishaan Fertilizer and its agricultural brand Vasudhaan.

## Project Overview

Ishaan Fertilizer is an agricultural enterprise headquartered in Satara district, Maharashtra, focused on organic, eco-friendly, and sustainable agriculture. Under its primary brand **Vasudhaan**, the company produces high-quality organic fertilizers and soil conditioners tailored for sustainable crop productivity.

**Core Philosophy:**
> *Healthy Soil = Healthy Harvest = Prosperous Farmer*

**Core Values:**
- Sustainability
- Integrity
- Innovation
- Farmer-Centricity

---

## Current Milestone

**Current Milestone:** `"Static Frontend Website Development"`

This initial phase focuses exclusively on establishing a high-performance, mobile-first, responsive static web interface for Ishaan Fertilizer.

---

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting & Quality:** [ESLint](https://eslint.org/)

---

## Project Structure

```text
ishaan-fertilizer/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind directives
│   │   ├── layout.tsx       # Root layout & global metadata
│   │   └── page.tsx         # Starter homepage component
│   ├── components/
│   │   ├── common/          # Cross-page shared components
│   │   ├── layout/          # Page layout structures (Nav, Footer, Header)
│   │   └── ui/              # Reusable UI primitives
│   ├── data/
│   │   └── products.ts      # Confirmed product list & datasets
│   ├── types/
│   │   └── product.ts       # TypeScript interfaces & types
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/
│   ├── images/              # Static image assets
│   └── icons/               # SVG & icon assets
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignored patterns
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript compiler settings
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation
```

---

## Confirmed Products

The project currently supports and displays **ONLY** the following confirmed products:

1. **Vasudhaan PROM** (Phosphate Rich Organic Manure)
2. **Vasudhaan KROM** (Potassium & Rich Organic Matter)
3. **Vasudhaan Enriched Compost** (Organic Soil Conditioner)

*Note: No additional products or unverified claims are included in this project.*

---

## Development Status

- [x] Day 1 project setup completed.
- [x] Scalable frontend folder architecture created.
- [x] TypeScript & Tailwind CSS configured.
- [x] Starter homepage verified.
- [!] **Backend, Database, Authentication, Real AI Chatbot, and Real Voice Assistant integration are intentionally deferred.** These features will be integrated in future phases when stable backend APIs become available.

---

## Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "ishaan fertilizer"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## Available Scripts

- `npm run dev` – Starts the Next.js development server.
- `npm run build` – Builds the production bundle.
- `npm run start` – Runs the built production server.
- `npm run lint` – Runs ESLint code quality checks.
