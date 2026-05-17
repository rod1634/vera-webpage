import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold transition-all duration-fast ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.985]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-strong shadow-soft",
        primaryGradient:
          "bg-gradient-to-br from-accent to-accent-strong text-white hover:from-accent-strong hover:to-accent-strong shadow-soft",
        secondary:
          "bg-surface text-text-primary border border-border-strong backdrop-blur-md hover:bg-surface-elevated",
        ghost:
          "text-accent hover:bg-surface-subtle",
        destructive:
          "bg-destructive text-white hover:brightness-95",
      },
      size: {
        sm: "h-9  px-4 text-[15px] leading-none",
        md: "h-11 px-6 text-[15px] leading-none",
        lg: "h-12 px-6 text-[17px] leading-none",
        xl: "h-14 px-8 text-[18px] leading-none tracking-[-0.005em]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const LIGHT_TEXT_VARIANTS = new Set(["primary", "primaryGradient", "destructive"])

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, style, ...props }, ref) => {
    const forceWhite = LIGHT_TEXT_VARIANTS.has(variant ?? "primary")
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        style={forceWhite ? { color: "#ffffff", ...style } : style}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
