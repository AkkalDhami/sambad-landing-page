import { HeroSection } from "@/components/home/hero-section"
import { PricingSection } from "@/components/home/pricing-section"
import { HexagonBackground } from "@/components/shared/bg-shape"
import { Container } from "@/components/shared/container"

export default function page() {
  return (
    <Container>
      <HeroSection />
      <PricingSection />
      <HexagonBackground />
    </Container>
  )
}
