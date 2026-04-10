import * as React from "react"

import { cn } from "@shared/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full rounded-lg border border-border bg-input-bg px-3 py-1 text-sm text-text-primary shadow-sm transition-all outline-none placeholder:text-text-muted focus:border-active-border disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500/50 aria-invalid:focus:border-red-500/50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
