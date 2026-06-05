"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { IconArrowRight, IconPlayerPlayFilled } from "@tabler/icons-react"
import { NoiseTexture } from "@/components/ui/noise-texture"
import { Heading } from "@/components/ui/heading"
import AnimatedText from "@/components/shared/animated-text"

import React from "react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { TextGlitch } from "@/components/ui/text-glitch"

export function CallToAction() {
  return (
    <Section className="relative">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border px-6 py-10 md:py-12 lg:py-14">
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

type CtaVariant = "dark" | "light"

interface CtaSectionProps {
  variant?: CtaVariant
}

export const CtaSection = ({ variant }: CtaSectionProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const theme = (variant ??
    (mounted ? resolvedTheme : undefined) ??
    "dark") as CtaVariant
  const isLight = theme === "light"

  return (
    <>
      <Section
        className={cn("relative w-full pt-1 pb-12")}
        data-theme={theme}
      >
        <div className="fle relative mx-auto max-w-full flex-col items-center justify-center px-4 py-1">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)] bg-size-[3rem_3rem]",
              isLight
                ? "bg-[linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"
            )}
            aria-hidden
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute left-0 hidden h-full w-24 md:block"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke={`url(#left-fadeStroke-${theme})`} strokeWidth="0.4">
                <path d="M 1 12 v 65 l 28 24 v 70 " />
              </g>
              <g mask={`url(#left-mask-${theme})`}>
                <circle
                  className="leftrightline left-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill={`url(#left-blue-grad-${theme})`}
                />
              </g>
              <defs>
                <mask id={`left-mask-${theme}`}>
                  <path
                    d="M 1 12 v 65 l 28 24 v 70"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id={`left-fadeStroke-${theme}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="12"
                  x2="0"
                  y2="170"
                >
                  <stop
                    offset="0%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="90%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id={`left-blue-grad-${theme}`} fx="1">
                  <stop offset="0%" stopColor="var(--color-brand-600)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute right-0 hidden h-full w-24 md:block"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke={`url(#right-fadeStroke-${theme})`} strokeWidth="0.4">
                <path d="M 29 12 v 65 l -28 24 v 65" />
              </g>
              <g mask={`url(#right-mask-${theme})`}>
                <circle
                  className="leftrightline right-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill={`url(#right-blue-grad-${theme})`}
                />
              </g>
              <defs>
                <mask id={`right-mask-${theme}`}>
                  <path
                    d="M 29 12 v 65 l -28 24 v 65"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id={`right-fadeStroke-${theme}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="12"
                  x2="0"
                  y2="170"
                >
                  <stop
                    offset="0%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="90%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={"var(--color-muted)"}
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id={`right-blue-grad-${theme}`} fx="1">
                  <stop offset="0%" stopColor="var(--color-brand-600)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.h1
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={cn(
              "relative z-10 mx-auto mt-18 max-w-4xl bg-clip-text pb-2 text-center text-3xl leading-[1.15] font-medium tracking-tighter text-balance text-transparent sm:text-5xl md:text-[4.2rem]",
              isLight
                ? "bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-700"
                : "bg-linear-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/40"
            )}
          >
            One inbox for every customer conversation.
          </motion.h1>
          <motion.p
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={cn(
              "relative z-10 mx-auto mt-3 mb-8 max-w-xl bg-clip-text text-center text-base leading-relaxed text-balance text-transparent sm:max-w-3xl sm:text-lg",
              isLight
                ? "bg-linear-to-br from-neutral-600 via-neutral-500 to-neutral-600/90"
                : "bg-linear-to-br from-neutral-400 via-neutral-300 to-neutral-400/90"
            )}
          >
            Connect WhatsApp, Messenger, Instagram, TikTok, and more. Manage
            every message from a single workspace built for fast-growing teams.
          </motion.p>
          <motion.div
            initial={{
              y: 5,
              filter: "blur(5px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4"
          >
            <Link
              href={"#"}
              className={cn(buttonVariants({ variant: "brand" }), "h-14 px-8")}
            >
              Start Free Trial
            </Link>
            <Link
              href={"#"}
              className={cn(
                "group flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 md:text-[1rem]",
                isLight
                  ? "border border-neutral-300 bg-white text-neutral-900 shadow-sm hover:border-neutral-400 hover:bg-neutral-50"
                  : "border border-white/15 bg-neutral-950/90 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/25 hover:bg-neutral-900/90"
              )}
            >
              <TextGlitch text="Book a Demo" />
            </Link>
          </motion.div>
        </div>
      </Section>
      <style>
        {`    
.leftrightline {
  offset-anchor: 10px 0px;
  animation: leftrightline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.left-line {
  offset-path: path(
    "M 1 12 v 65 l 28 24 v 80"
  );
}
.right-line {
  offset-path: path(
    "M 29 12 v 65 l -28 24 v 80"
  );
}

@keyframes leftrightline-animation-path {
  0% {
    offset-distance: 0%;
  }
  60% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  )
}
