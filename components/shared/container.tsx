"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4", className)}>{children}</div>
  )
}
