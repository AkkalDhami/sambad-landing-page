import { CallToAction } from "@/components/home/cta-section"
import { FaqsSection } from "@/components/home/faq-section"
import { HeroSection2 } from "@/components/home/hero-section"
import { PricingSection } from "@/components/home/pricing-section"
import { TestimonialSection } from "@/components/home/testimonial-section"
import { VideoSection } from "@/components/home/video-section"
import { Container } from "@/components/shared/container"

export default function page() {
  return (
    <Container className="">
      {/* <HeroSection /> */}
      <HeroSection2 />
      <VideoSection />
      <PricingSection />
      <FaqsSection />
      {/* <HeroSection /> */}
      <TestimonialSection />
      <CallToAction />
    </Container>
  )
}
