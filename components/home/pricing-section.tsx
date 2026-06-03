"use client"
import { cn } from "@/lib/utils"
import NumberFlow from "@number-flow/react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { FREQUENCY, FrequencyToggle } from "../ui/frequency-toggle"
import { IconCircleCheck, IconStar } from "@tabler/icons-react"
import { Heading } from "../ui/heading"
import { SubHeading } from "../ui/sub-heading"

type Plan = {
  name: string
  info: string
  price: {
    monthly: number
    yearly: number // yearly per month
  }
  features: string[]
  btn: {
    text: string
    href: string
  }
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    info: "For small teams ready to unify their channels.",
    price: {
      monthly: 2499,
      yearly: 1999,
    },
    features: [
      "3 channels (any combination)",
      "2 users",
      "200 free AI messages / month",
      "Conversation summaries",
      "Basic lead scoring",
      "Message labeling",
    ],
    btn: {
      text: "Start your free trial",
      href: "#",
    },
  },
  {
    highlighted: true,
    name: "Growth",
    info: "For growing ecommerce brands that need AI-powered selling.",
    price: {
      monthly: 5999,
      yearly: 4799,
    },
    features: [
      "5 channels",
      "5 users",
      "500 free AI messages / month",
      "Advanced lead scoring & filtering",
      "Blanxer integration (agentic selling)",
      "Priority support",
      "Custom workflows",
      "Analytics dashboard",
    ],
    btn: {
      text: "Get started",
      href: "https://app.sambad.io/",
    },
  },
  {
    name: "Scale",
    info: "For scaling teams that need more channels, seats, and onboarding support.",
    price: {
      monthly: 7999,
      yearly: 9999,
    },
    features: [
      "10 channels",
      "10 users",
      "1,000 free AI messages / month",
      "Advanced lead scoring & filtering",
      "Blanxer integration (agentic selling)",
      "Priority support",
      "Custom workflows",
      "Analytics dashboard",
      "Priority onboarding",
    ],
    btn: {
      text: "Contact sales",
      href: "#",
    },
  },
]

export function PricingSection() {
  const [frequency, setFrequency] = React.useState<"monthly" | "yearly">(
    "monthly"
  )

  return (
    <section
      id="pricing"
      className="animate-fade-in-blur flex w-full flex-col items-center justify-center space-y-7 p-4"
    >
      <div className="animate-fade-in-blur mx-auto max-w-4xl space-y-2">
        <Heading>Simple pricing that scales with you.</Heading>
        <SubHeading>
          Whether you&apos;re just starting out or growing fast, our flexible
          pricing has you covered — with no hidden costs.
        </SubHeading>
      </div>

      <FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard frequency={frequency} key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}

type PricingCardProps = React.ComponentProps<"div"> & {
  plan: Plan
  frequency?: FREQUENCY
}

export function PricingCard({
  plan,
  className,
  frequency = "monthly",
  ...props
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-2xl border shadow-xs",
        plan.highlighted && "scale-105",

        className
      )}
      key={plan.name}
      {...props}
    >
      <div
        className={cn(
          "space-y-2 border-b p-4",
          plan.highlighted && "bg-card dark:bg-card/80"
        )}
      >
        <AnimatePresence mode="wait">
          <div className="animate-fade-in-blur absolute top-2 right-2 z-10 flex items-center gap-2">
            {plan.highlighted && (
              <motion.div
                className="border-brand-300 flex items-center gap-1 rounded-full border bg-brand-600 px-2 py-0.5 text-xs font-medium text-white dark:border-brand-800"
                key="popular-badge"
                layout
                transition={{ duration: 0.1 }}
              >
                <IconStar className="size-3 fill-current" />
                Popular
              </motion.div>
            )}

            {frequency === "yearly" &&
              plan.price.monthly > plan.price.yearly && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1 rounded-full border bg-green-600 px-2 py-0.5 text-xs text-white"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  key="discount-badge"
                  layout
                  transition={{ duration: 0.15 }}
                >
                  {/* Calculate the actual discount percentage of the plan */}
                  {Math.round(
                    ((plan.price.monthly - plan.price.yearly) /
                      plan.price.monthly) *
                      100
                  )}
                  % off
                </motion.div>
              )}
          </div>
        </AnimatePresence>

        <div className="animate-fade-in-blur text-xl font-semibold">
          {plan.name}
        </div>
        <p className="animate-fade-in-blur text-base font-normal text-muted-foreground">
          {plan.info}
        </p>
        <h3 className="mt-2 flex w-max items-end gap-1">
          <NumberFlow
            className="text-3xl font-extrabold [&::part(suffix)]:text-base [&::part(suffix)]:font-normal [&::part(suffix)]:text-muted-foreground"
            format={{
              style: "currency",
              currency: "INR",
              notation: "standard",
            }}
            suffix="/month"
            value={plan.price[frequency]}
          />
        </h3>
        <p className="animate-fade-in-blur mb-2 text-sm font-normal text-muted-foreground">
          billed {frequency}
        </p>
      </div>
      <div
        className={cn(
          "space-y-3 px-4 pt-6 pb-8 text-sm text-muted-foreground",
          plan.highlighted && "bg-muted/10"
        )}
      >
        {plan.features.map((feature) => (
          <div
            className="animate-fade-in-blur flex items-center gap-2"
            key={feature}
          >
            <IconCircleCheck className="size-4 text-green-500" />
            <p className="text-base font-medium">{feature}</p>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "mt-auto w-full border-t p-3",
          plan.highlighted && "bg-card dark:bg-card/80"
        )}
      >
        <Button
          render={<Link href={plan.btn.href}>{plan.btn.text}</Link>}
          className="h-11 w-full"
          variant={plan.highlighted ? "brand" : "outline"}
        ></Button>
      </div>
    </div>
  )
}
