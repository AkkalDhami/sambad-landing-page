"use client"

import { Container } from "@/components/shared/container"
import { IconLink } from "@tabler/icons-react"
import Image from "next/image"

export function HeroMocks() {
  return (
    <Container className="relative">
      <div className="overflow-hidden rounded-2xl p-2 ring-1 ring-neutral-200 sm:block lg:block dark:ring-neutral-700">
        <div className="flex items-center justify-between rounded-t-xl bg-white px-3 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500" />
            <span className="size-2.5 rounded-full bg-yellow-500" />
            <span className="size-2.5 rounded-full bg-green-500" />
          </div>
          <div className="flex w-40 items-center justify-center gap-2 rounded-lg border bg-neutral-500/10 px-2 py-0.5 text-sm text-black">
            <IconLink className="size-4 rotate-45" />
            app.sambad.io
          </div>
          <div />
        </div>
        <Image
          width={600}
          height={600}
          src="/main-hero.png"
          alt="Hero Image"
          className="w-325"
        />
        {/* <PhoneCard className="top-1/2 -left-3 z-10 h-150 w-80 -translate-y-1/2 bg-background lg:absolute" /> */}
      </div>
      {/* <PhoneCard className="bg-background lg:hidden" /> */}
    </Container>
  )
}
