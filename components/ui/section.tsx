import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

export function Section({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("w-full py-16", className)} {...props}>
      {children}
    </section>
  )
}
