"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { IconArrowRight, IconPlayerPlayFilled } from "@tabler/icons-react"
import { NoiseTexture } from "@/components/ui/noise-texture"
import { Heading } from "@/components/ui/heading"
import AnimatedText from "@/components/shared/animated-text"

export function CallToAction() {
  return (
    <Section className="relative">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border px-6 py-12 md:py-20 lg:py-16">
        <NoiseTexture noiseOpacity={0.4} />
        <div className="text-center">
          <Heading className="text-4xl font-medium text-balance lg:text-5xl">
            Every conversation, handled automatically.
          </Heading>
          <AnimatedText
            className={"mt-4 text-muted-foreground"}
            delay={0.02}
            duration={0.1}
            text="Get started in minutes. Sambad AI handles the channels, your team
            handles the big calls."
          />

          <div className="animate-fade-in-blur mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant={"brand"}
              size={"lg"}
              className={"h-14 w-44 text-lg"}
            >
              Get started <IconArrowRight className="size-5" />
            </Button>
            <Button
              nativeButton={false}
              render={
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/watch?v=HzX_ImtCelo"}
                  className="flex items-center gap-2"
                >
                  <IconPlayerPlayFilled className="size-5" /> Watch Demo
                </Link>
              }
              variant={"outline"}
              size={"lg"}
              className={"h-14 w-46 text-lg"}
            ></Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
