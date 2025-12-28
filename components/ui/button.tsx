import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-4 uppercase tracking-tight",
  {
    variants: {
      variant: {
        // Default: zwart op lichte achtergrond → lime op hover met zwarte shadow
        default: "bg-black text-white border-black hover:bg-accent hover:text-black hover:border-black hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5",
        // Lime: voor donkere achtergronden → wit op hover met lime shadow
        lime: "bg-accent text-black border-accent hover:bg-white hover:text-black hover:border-white hover:shadow-[6px_6px_0_0_#CCFF00] hover:-translate-x-0.5 hover:-translate-y-0.5",
        // Outline: transparant met zwarte border → lime fill op hover met zwarte shadow
        outline: "border-black bg-transparent text-black hover:bg-accent hover:text-black hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5",
        // Destructive
        destructive: "bg-destructive text-white border-destructive hover:bg-accent hover:text-destructive hover:border-destructive hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5",
        // Secondary
        secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-accent hover:text-accent-foreground hover:border-black hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5",
        // Ghost
        ghost: "border-transparent hover:bg-accent hover:text-black hover:border-black hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5",
        // Link
        link: "text-black border-transparent hover:underline underline-offset-4",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-14 px-8 has-[>svg]:px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
