import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@shared/lib/utils"

const cardVariants = cva(
  "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl transition-all duration-300",
  {
    variants: {
      rarity: {
        default: "bg-card",
        common:
          "bg-[linear-gradient(135deg,#f1f5f9_0%,#94a3b8_50%,#64748b_100%)] border-[#e2e8f0] shadow-md text-[#0f172a]",
        rare: "bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_25%,#eff6ff_50%,#3b82f6_75%,#1e3a8a_100%)] border-[#bfdbfe] shadow-[0_0_20px_rgba(59,130,246,0.4)] text-[#0f172a]",
        epic: "bg-[linear-gradient(135deg,#2e1065_0%,#7c3aed_25%,#f5f3ff_50%,#7c3aed_75%,#2e1065_100%)] border-[#ddd6fe] shadow-[0_0_20px_rgba(139,92,246,0.4)] text-[#0f172a]",
        legendary:
          "bg-[linear-gradient(135deg,#fef3c7_0%,#fbbf24_50%,#f59e0b_100%)] border-[#fef08a] shadow-[0_0_20px_rgba(251,191,36,0.4)] text-[#451a03]",
      },
    },
    defaultVariants: {
      rarity: "default",
    },
  }
)

function Card({
  className,
  rarity,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ rarity, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
