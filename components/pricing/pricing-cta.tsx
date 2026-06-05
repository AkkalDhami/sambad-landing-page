"use client"

import { motion } from "motion/react"
import { IconCheck, IconArrowRight } from "@tabler/icons-react"
import AnimatedText from "../shared/animated-text"

const features = [
  "All available channels",
  "Unlimited users",
  "Custom AI training",
  "Dedicated account manager",
  "Custom integrations",
  "SLA guarantee",
  "On-premise option",
  "24/7 phone support",
]

export function PricingCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl border border-neutral-500/10 bg-card/30 backdrop-blur-lg"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.04),transparent_40%)]" />

      <div className="relative grid gap-8 p-8 lg:grid-cols-[1.2fr_1.5fr_auto] lg:items-center">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h3 className="animate-fade-in-blur text-4xl font-bold tracking-tight">
              Enterprise
            </h3>

            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium tracking-wider text-primary uppercase">
              Custom
            </span>
          </div>

          <AnimatedText
            delay={0.05}
            className="text-base text-muted-foreground"
            text={
              "Custom setup for high-volume teams with advanced security, integrations, and dedicated support."
            }
          />

          <motion.button
            whileTap={{
              scale: 0.98,
            }}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-medium"
          >
            Contact sales
            <IconArrowRight className="size-4" />
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-brand-600 to-transparent"></span>
            <span className="absolute inset-x-0 bottom-1 mx-auto h-1.5 w-full bg-linear-to-r from-transparent via-brand-600 to-transparent opacity-0 blur-sm group-hover:opacity-100"></span>
          </motion.button>
        </div>

        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              className="flex items-center gap-3"
            >
              <div className="flex size-6 items-center justify-center rounded-full bg-green-500/10">
                <IconCheck className="size-3.5 text-green-500" />
              </div>

              <span className="text-sm font-normal md:text-base">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
