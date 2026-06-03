"use client"

import { Marquee } from "@/components/ui/marquee"
import { Container } from "../shared/container"
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
} from "../icons"

type BrandList = {
  icon: React.ReactNode
  name: string
}

export const LogoCloud = () => {
  const brandList: BrandList[] = [
    {
      icon: <Instagram className="size-8" />,
      name: "Instagram",
    },
    {
      icon: <MicrosoftOutlook className="size-8" />,
      name: "Microsoft Outlook",
    },
    {
      icon: <WhatsApp className="size-8" />,
      name: "WhatsApp",
    },
    {
      icon: <TikTok className="size-8" />,
      name: "TikTok",
    },
    {
      icon: <Messenger className="size-8" />,
      name: "Messenger",
    },
    {
      icon: <Gmail className="size-8" />,
      name: "Gmail",
    },
    {
      icon: <Facebook className="size-8" />,
      name: "Facebook",
    },
    {
      icon: <Mail className="size-8" />,
      name: "Zoho Mail",
    },
  ]

  return (
    <>
      <Container className="relative mx-auto w-full max-w-7xl overflow-hidden py-8 sm:py-16 lg:py-20">
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

        {/* Left blur */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent" />

        {/* Right blur */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent" />
      </Container>
    </>
  )
}
