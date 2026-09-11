import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "elevated" | "outline" | "brand" | "interactive";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const cardVariantStyles: Record<CardVariant, string> = {
  default: "bg-white border border-stone-200/80 shadow-sm",
  elevated: "bg-white border border-stone-100 shadow-md hover:shadow-lg transition-shadow",
  outline: "bg-transparent border-2 border-stone-200",
  brand: "bg-brand-50/50 border border-brand-200/80 shadow-sm",
  interactive:
    "bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-brand-300 hover:-translate-y-0.5 transition-all cursor-pointer",
};

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-200",
        cardVariantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn("p-6 pb-3 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function CardTitle({
  as: Component = "h3",
  className,
  children,
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={cn("text-lg font-bold text-stone-900 tracking-tight", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({
  className,
  children,
  ...props
}: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-stone-600 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn("p-6 pt-3 text-stone-700", className)} {...props}>
      {children}
    </div>
  );
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        "p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
