import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "success";
}

export function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors duration-150 select-none uppercase";

  const variants = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-secondary/10 text-secondary border border-secondary/20",
    accent: "bg-accent/15 text-accent-foreground border border-accent/30 font-bold",
    outline: "bg-card text-foreground border border-border",
    success: "bg-success/10 text-success border border-success/20",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
