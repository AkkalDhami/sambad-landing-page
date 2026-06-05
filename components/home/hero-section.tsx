"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  IconArrowRight,
  IconPlayerPlayFilled,
  IconSparkles,
} from "@tabler/icons-react"
import Link from "next/link"
import { HeroMocks } from "@/components/mocks/hero"
import { PhoneCard } from "@/components/conversation/phone-card"
import AnimatedText from "@/components/shared/animated-text"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { BorderBeam } from "@/components/ui/border-beam"
import { motion } from "motion/react"
import { LogoCloud } from "./logo-cloud"
import { MacbookPro } from "@/components/mocks/macbook-pro"

export function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center pt-10">
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col gap-5 text-center">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.05,
          }}
          viewport={{ once: true }}
          className="relative mx-auto flex max-w-100 items-center gap-2 rounded-full border px-3 py-1.5"
        >
          <BorderBeam
            size={40}
            initialOffset={50}
            className="from-transparent via-brand-600 to-transparent"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          />
          <IconSparkles stroke={1} className="size-4" />
          <span className="text-[15px] font-normal">
            AI replies on every channel
          </span>
        </motion.div>
        <h1
          className={cn(
            "text-4xl leading-tight font-medium text-balance text-foreground md:text-6xl",
            "animate-in delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in",
            "animate-fade-in-blur"
          )}
        >
          One Inbox To Manage Every Customer Conversation.
        </h1>

        <p
          className={cn(
            "mx-auto max-w-3xl text-base tracking-wider text-muted-foreground sm:text-lg md:text-xl",
            "animate-in delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in",
            "animate-fade-in-blur"
          )}
        >
          Streamline customer messaging across WhatsApp, Instagram, email and
          more — one AI-powered inbox built for growing teams.
        </p>

        <div className="animate-fade-in-blur mx-auto flex w-fit max-w-2xl animate-in items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in">
          <Button variant={"brand"} size={"lg"} className={"h-14 w-44 text-lg"}>
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
      <HexagonPattern
        className={cn(
          "stroke-neutral-100 dark:stroke-neutral-900",
          "inset-0 skew-y-6"
        )}
      />

      <div className="relative z-10 mt-8">
        <HeroMocks />
      </div>
      <div className="max-w-7xl overflow-hidden">{/* <LogoCloud /> */}</div>
    </section>
  )
}

export function HeroSection2() {
  return (
    <section className="flex w-full flex-col items-center pt-10">
      <div className="relative z-20 grid justify-center gap-5 overflow-hidden lg:flex lg:grid-cols-2 lg:items-center lg:justify-between">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="relative z-10 flex max-w-2xl flex-col gap-5 md:max-w-3xl lg:max-w-4xl"
        >
          <div className="relative mx-auto flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 sm:mx-0 sm:max-w-60">
            <BorderBeam
              size={40}
              initialOffset={50}
              className="from-transparent via-brand-600 to-transparent"
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            />
            <IconSparkles stroke={1} className="size-4" />
            <span className="text-[15px] font-normal">
              AI replies on every channel
            </span>
          </div>
          <AnimatedText
            className={cn(
              "text-4xl leading-tight font-medium text-balance text-foreground md:text-6xl",
              "animate-in delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in",
              "animate-fade-in-blur",
              "text-center sm:text-start"
            )}
            delay={0.02}
            duration={0.1}
            text="One Inbox To Manage Every Customer Conversation."
          />

          <AnimatedText
            className={cn(
              "max-w-3xl text-base tracking-wider text-muted-foreground sm:text-lg md:text-xl",
              "animate-in delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in",
              "animate-fade-in-blur",
              "text-center sm:text-start"
            )}
            delay={0.02}
            duration={0.1}
            text="Streamline customer messaging across WhatsApp, Instagram, email and
            more — one AI-powered inbox built for growing teams."
          />

          <div
            className={cn(
              "animate-fade-in-blur flex w-fit animate-in items-center justify-center gap-3 pt-2 delay-300 duration-300 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in",
              "mx-auto max-w-2xl sm:mx-0"
            )}
          >
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

          <LogoCloud type="grid" className="sm:py-6 lg:py-10" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <PhoneCard className="relative z-20 h-150 w-90 bg-background sm:hidden lg:block lg:w-80" />
        </motion.div>
      </div>
      {/* <HexagonBackground
        hexagonSize={140}
        className="absolute inset-0 flex items-center justify-center rounded-xl"
      /> */}
      <HexagonPattern
        className={cn(
          "stroke-neutral-100 dark:stroke-neutral-900",
          "inset-0 skew-y-6"
        )}
      />
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          delay: 0.6,
        }}
        viewport={{ once: true }}
        className="relative mt-8 overflow-hidden"
      >
        <MacbookPro
          image="/main-hero.png"
          className="mt-8 w-[400px] sm:h-[600px] sm:w-[600px] md:w-[800px] lg:h-[800px] lg:w-[1150px]"
        />
      </motion.div>
    </section>
  )
}
