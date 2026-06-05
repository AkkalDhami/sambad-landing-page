import { CtaSection } from "@/components/home/cta-section"
import { PricingSection } from "@/components/home/pricing-section"
import { Container } from "@/components/shared/container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing plans for Sambad",
}

export default function page() {
  return (
    <Container>
      <PricingSection />
      <CtaSection />
    </Container>
  )
}
