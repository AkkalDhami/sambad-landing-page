"use client"

import { cn } from "@/lib/utils"
import {
  IconRocket,
  IconArrowBackUp,
  IconCashOff,
  IconMessageCircleHeart,
  IconProps,
} from "@tabler/icons-react"
import { motion } from "motion/react"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import AnimatedText from "@/components/shared/animated-text"

type Stat = {
  label: string
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  description: string
}

const stats: Stat[] = [
  {
    label: "7-day free trial",
    description: "No credit card required",
    icon: IconRocket,
  },
  {
    label: "Cancel anytime",
    description: "No hidden fees or long-term commitments",
    icon: IconArrowBackUp,
  },
  {
    label: "No setup fees",
    description: "Get started without any upfront costs",
    icon: IconCashOff,
  },
  {
    label: "24/7 support on Growth+",
    description: "Dedicated support team available around the clock",
    icon: IconMessageCircleHeart,
  },
]

export function PricingStats({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "my-8 flex w-full items-center justify-between gap-4",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <motion.div
            key={stat.label}
            className="flex gap-2"
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="size-10 rounded-lg bg-green-500/10 p-2 text-green-600" />
            </motion.div>

            <div className="flex flex-col">
              <AnimatedText
                className="text-base"
                text={stat.label}
              />

              <AnimatedText
                className="text-sm text-muted-foreground"
                text={stat.description}
              />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
