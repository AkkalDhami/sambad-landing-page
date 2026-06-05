"use client"

import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"
import { NoiseTexture } from "../ui/noise-texture"

type VideoCardProps = {
  src: string
  title: string
  description: string
}

const data: VideoCardProps[] = [
  {
    src: "/digest-1.webm",
    title: "Open the app, see everything.",
    description:
      "New leads, urgent replies, missed conversations — all surfaced the moment you open Sambad.",
  },
  {
    src: "/digest-2.webm",
    title: "Jump straight into context.",
    description:
      "Ask Sambad AI to show your leads or any open thread — and it opens the full conversation for you.",
  },
]

export function VideoSection() {
  return (
    <Section>
      <Heading>Stop chasing every update.</Heading>
      <SubHeading className="mt-4">
        Ask Sambad AI what&apos;s happening across your channels — and skip the
        scroll. Everything that matters surfaces in seconds.
      </SubHeading>
      <div className="mt-8 flex flex-wrap items-center gap-5 md:flex-nowrap">
        {data.map((item) => (
          <VideoCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  )
}

function VideoCard({ description, title, src }: VideoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl p-4">
      <NoiseTexture noiseOpacity={0.5} />
      <div className="relative">
        <Heading className="font-normal sm:text-3xl sm:font-normal">
          {title}
        </Heading>
        <SubHeading className="mt-4">{description}</SubHeading>
        <video
          autoPlay
          loop
          muted
          className="mt-6 w-full rounded-lg border object-cover"
        >
          <source src={src} type="video/webm" />
        </video>
      </div>
    </div>
  )
}
