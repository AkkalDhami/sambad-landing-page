"use client"

import React from "react"

import { FrequencyToggle } from "@/components/ui/frequency-toggle"

import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"
import { Section } from "@/components/ui/section"
import { PricingCard } from "@/components/pricing/pricing-card"
import { PricingStats } from "@/components/pricing/pricing-stat"
import { PricingCta } from "@/components/pricing/pricing-cta"
import { PricingAddons } from "@/components/pricing/pricing-addons"

export type Plan = {
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
      "Every feature included in Growth +",
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
    <Section
      id="pricing"
      className="animate-fade-in-blur mt-12 flex w-full flex-col items-center justify-center space-y-7 p-4"
    >
      <div className="animate-fade-in-blur mx-auto max-w-4xl space-y-2">
        <Heading>Simple pricing that scales with you.</Heading>
        <SubHeading>
          Whether you&apos;re just starting out or growing fast, our flexible
          pricing has you covered — with no hidden costs.
        </SubHeading>
      </div>

      <FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
      <div className="mt-3 grid w-full grid-cols-1 items-center gap-6 space-y-5 sm:space-y-0 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard frequency={frequency} key={plan.name} plan={plan} />
        ))}
      </div>

      <PricingStats />
      <PricingCta />
      <PricingAddons />
    </Section>
  )
}
