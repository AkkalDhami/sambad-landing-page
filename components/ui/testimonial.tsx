"use client"

import type { ComponentProps } from "react"
import { useRef } from "react"

import { cn } from "@/lib/utils"

export function Testimonial({ className, ...props }: ComponentProps<"figure">) {
  return (
    <figure
      data-slot="testimonial"
      className={cn("flex h-full flex-col", className)}
      {...props}
    />
  )
}

export function TestimonialQuote({
  className,
  ...props
}: ComponentProps<"blockquote">) {
  return (
    <blockquote
      data-slot="testimonial-quote"
      className={cn(
        "grow px-4 py-3 text-base text-pretty text-foreground",
        className
      )}
      {...props}
    />
  )
}

export type TestimonialSpotlightProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "onMouseMove"
> & {
  children: React.ReactNode
}

export function TestimonialSpotlight({
  children,
  className,
  ...props
}: TestimonialSpotlightProps) {
  const itemRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!itemRef.current) return

    const rect = itemRef.current.getBoundingClientRect()

    itemRef.current.style.setProperty(
      "--spotlight-x",
      `${e.clientX - rect.left}px`
    )
    itemRef.current.style.setProperty(
      "--spotlight-y",
      `${e.clientY - rect.top}px`
    )
  }

  return (
    <div
      ref={itemRef}
      data-slot="testimonial-spotlight"
      className={cn(
        "group/testimonial-spotlight relative overflow-hidden rounded-xl bg-card/50 inset-ring-1 inset-ring-foreground/10",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/testimonial-spotlight:opacity-(--spotlight-opacity,0.5)"
        style={{
          background: `radial-gradient(circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color,rgba(255,255,255,0.2)), transparent var(--spotlight-size,60%))`,
        }}
      />
      {children}
    </div>
  )
}
