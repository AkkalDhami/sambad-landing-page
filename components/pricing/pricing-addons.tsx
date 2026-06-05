"use client"

import { motion } from "motion/react"
import {
  IconBolt,
  IconUsers,
  IconMessageCircleBolt,
  IconArrowRight,
} from "@tabler/icons-react"
import Link from "next/link"
import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"
import { NoiseTexture } from "@/components/ui/noise-texture"

type Addon = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  price?: string
  subtitle?: string
  action: string
  href: string
}

const addons: Addon[] = [
  {
    title: "AI credit system",
    description:
      "Every plan includes free AI messages each month. Run over? Pay a small usage-based fee — only for what you use.",
    icon: IconBolt,
    action: "View real-time usage in dashboard",
    href: "#",
  },
  {
    title: "Additional users",
    description: "Scale your team without upgrading your plan.",
    icon: IconUsers,
    price: "Rs. 1,500",
    subtitle: "per user / month",
    action: "Add users",
    href: "#",
  },
  {
    title: "Extra AI messages",
    description: "Top up AI credits beyond your free monthly allowance.",
    icon: IconMessageCircleBolt,
    price: "Usage-based",
    subtitle: "pay per message",
    action: "View rates",
    href: "#",
  },
]

export function PricingAddons() {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <Heading className="text-4xl font-bold tracking-tight">
          Flexible add-ons
        </Heading>

        <SubHeading className="mt-4 text-lg text-muted-foreground">
          Pay only for what you use. Scale without changing plans.
        </SubHeading>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {addons.map((addon, index) => {
          const Icon = addon.icon

          return (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.35,
              }}
              className="rounded-x relative overflow-hidden rounded-xl border p-5"
            >
              <NoiseTexture noiseOpacity={0.2} />
              <div className="group flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-brand-500/10">
                    <Icon className="size-4 text-brand-600" />
                  </div>

                  <h3 className="text-xl font-medium">{addon.title}</h3>
                </div>

                <p className="mt-2 mb-2 flex-1 leading-6 text-muted-foreground">
                  {addon.description}
                </p>

                {addon.price ? (
                  <div className="mt-auto flex items-end justify-between gap-4">
                    <div>
                      <div className="text-lg font-medium">{addon.price}</div>

                      <div className="text-sm text-muted-foreground">
                        {addon.subtitle}
                      </div>
                    </div>

                    <button className="rounded-full border px-4 py-1.5 text-sm transition-colors hover:bg-accent">
                      {addon.action}
                    </button>
                  </div>
                ) : (
                  <Link
                    href={addon.href}
                    className="mt-auto inline-flex items-center gap-2 font-medium text-primary"
                  >
                    {addon.action}
                    <IconArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
