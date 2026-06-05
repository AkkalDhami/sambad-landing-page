"use client"

import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"
import { NoiseTexture } from "@/components/ui/noise-texture"
import { MacbookPro } from "@/components/mocks/macbook-pro"

type VideoCardProps = {
  data: {
    src: string
    title: string
    description: string
  }
  type: "default" | "macbook"
}

const data: VideoCardProps[] = [
  {
    type: "macbook",
    data: {
      src: "/digest-1.webm",
      title: "Open the app, see everything.",
      description:
        "New leads, urgent replies, missed conversations — all surfaced the moment you open Sambad.",
    },
  },
  {
    type: "macbook",
    data: {
      src: "/digest-2.webm",
      title: "Jump straight into context.",
      description:
        "Ask Sambad AI to show your leads or any open thread — and it opens the full conversation for you.",
    },
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
      <div className="mt-8 grid grid-cols-1 flex-wrap items-center gap-5 lg:grid-cols-2">
        {data.map((item) => (
          <VideoCard key={item.data.title} type={item.type} data={item.data} />
        ))}
      </div>
    </Section>
  )
}

function VideoCard({ data, type }: VideoCardProps) {
  const { src, title, description } = data
  return (
    <div className="relative overflow-hidden rounded-xl p-4">
      <NoiseTexture noiseOpacity={0.3} />
      <div className="relative">
        <Heading className="font-normal sm:text-3xl sm:font-normal">
          {title}
        </Heading>
        <SubHeading className="mt-4">{description}</SubHeading>
        {type === "macbook" ? (
          <MacbookPro
            video={src}
            className="mx-auto w-[400px] sm:mt-4 sm:w-[600px]"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            className="mt-6 w-full rounded-lg border object-cover"
          >
            <source src={src} type="video/webm" />
          </video>
        )}
      </div>
    </div>
  )
}
