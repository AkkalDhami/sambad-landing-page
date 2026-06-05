import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React from "react"

export function SubHeading({
  children,
  as = "p",
  className,
}: {
  children: React.ReactNode
  as?: "h3" | "p"
  className?: string
}) {
  const Tag = motion[as] || "h3"
  return (
    <Tag
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={cn(
        "font-inter animate-fade-in-blur mx-auto max-w-3xl text-center text-base text-muted-foreground sm:text-lg",
        className
      )}
    >
      {children}
    </Tag>
  )
}
