import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "brand" | "earth" | "success" | "neutral" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  brand: "bg-brand-100 text-brand-800 border-brand-200",
  earth: "bg-earth-100 text-earth-800 border-earth-600/20",
  success: "bg-emerald-100 text-emerald-800 border-emerald-200",
  neutral: "bg-stone-100 text-stone-700 border-stone-200",
  outline: "bg-transparent text-stone-700 border-stone-300",
};

const dotColors: Record<BadgeVariant, string> = {
  brand: "bg-brand-600",
  earth: "bg-earth-600",
  success: "bg-emerald-600",
  neutral: "bg-stone-500",
  outline: "bg-stone-500",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
};

export function Badge({
  variant = "brand",
  size = "md",
  dot = false,
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full border tracking-wide uppercase transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
