import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React from "react"

export function Heading({
  children,
  as = "h2",
  className,
}: {
  children: React.ReactNode
  as?: "h1" | "h2"
  className?: string
}) {
  const Tag = motion[as]

  return (
    <Tag
      className={cn(
        "font-inter mb-3 text-center text-3xl font-bold sm:text-5xl",
        as === "h2" &&
          "text-center text-4xl font-medium sm:text-4xl sm:font-semibold",
        className
      )}
    >
      {children}
    </Tag>
  )
}
