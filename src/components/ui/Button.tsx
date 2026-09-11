import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95 shadow-sm border border-primary/20",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/95 shadow-sm border border-secondary/20",
      outline:
        "border border-border bg-card text-foreground hover:bg-muted hover:text-foreground active:bg-muted/80 shadow-xs",
      ghost:
        "text-foreground hover:bg-muted hover:text-foreground active:bg-muted/80",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95 shadow-sm",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 min-h-[44px] px-5 text-sm gap-2", // Min 44px for accessible mobile touch target
      lg: "h-13 min-h-[48px] px-7 text-base gap-2.5 rounded-xl",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
