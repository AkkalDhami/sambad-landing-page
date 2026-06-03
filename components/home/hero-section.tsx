import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  IconArrowRight,
  IconPlayerPlayFilled,
  IconSparkles,
} from "@tabler/icons-react"
import Link from "next/link"
import { HeroMocks } from "@/components/mocks/hero"
import { LogoCloud } from "./logo-cloud"
import { HexagonBackground } from "../shared/bg-shape"

export function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center pt-10">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-5 text-center">
        <div className="relative mx-auto flex max-w-100 items-center gap-2 rounded-full border px-3 py-1.5">
          <IconSparkles stroke={1} className="size-4" />
          <span className="text-[15px]">AI replies on every channel</span>
        </div>
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
      <HexagonBackground
        hexagonSize={100}
        className="absolute inset-0 flex items-center justify-center rounded-xl"
      />
      <div className="relative mt-8">
        {/* <div
          className={cn(
            "mask-b-from-95%",
            "animate-in delay-100 duration-1000 ease-out fill-mode-backwards slide-in-from-bottom-5 fade-in"
          )}
        > */}
        <HeroMocks />
        <LogoCloud />
        {/* </div> */}
      </div>
    </section>
  )
}
