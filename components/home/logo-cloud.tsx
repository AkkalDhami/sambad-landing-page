"use client"

import { Marquee } from "@/components/ui/marqueee"
import { Container } from "@/components/shared/container"
import React from "react"
import {
  Facebook,
  Gmail,
  Instagram,
  Mail,
  Messenger,
  MicrosoftOutlook,
  TikTok,
  WhatsApp,
} from "@/components/icons"
import { cn } from "@/lib/utils"

type BrandList = {
  icon: React.ReactNode
  name: string
}

export const LogoCloud = ({
  type = "marquee",
  className,
}: {
  type?: "marquee" | "grid"
  className?: string
}) => {
  const brandList: BrandList[] = [
    {
      icon: <Instagram className="size-6 sm:size-8" />,
      name: "Instagram",
    },
    {
      icon: <MicrosoftOutlook className="size-6 sm:size-8" />,
      name: "MS. Outlook",
    },
    {
      icon: <WhatsApp className="size-6 sm:size-8" />,
      name: "WhatsApp",
    },
    {
      icon: <TikTok className="size-6 sm:size-8" />,
      name: "TikTok",
    },
    {
      icon: <Messenger className="size-6 sm:size-8" />,
      name: "Messenger",
    },
    {
      icon: <Gmail className="size-6 sm:size-8" />,
      name: "Gmail",
    },
    {
      icon: <Facebook className="size-6 sm:size-8" />,
      name: "Facebook",
    },
    {
      icon: <Mail className="size-6 sm:size-8" />,
      name: "Zoho Mail",
    },
  ]

  return (
    <>
      <Container
        className={cn(
          "relative mx-auto w-full max-w-7xl overflow-hidden py-8 sm:py-16 lg:py-20",
          className
        )}
      >
        {type === "marquee" && (
          <>
            <Marquee pauseOnHover className="space-x-4 p-0 [--duration:20s]">
              {brandList.map((brand, index) => (
                <div key={index} className="flex items-center gap-2">
                  {brand.icon}
                  <div className="text-2xl font-medium text-muted-foreground">
                    {brand.name}
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent" />
          </>
        )}

        {type === "grid" && (
          <>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 items-center justify-center md:grid-cols-3">
              {brandList.map((brand, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-2 grayscale-100 duration-300 group-hover:grayscale-0">
                    {brand.icon}
                    <div className="text-lg sm:text-2xl group-hover:text-foreground sm:font-medium text-muted-foreground">
                      {brand.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </>
  )
}
