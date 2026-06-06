/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import AnimatedText from "@/components/shared/animated-text"
import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"
import { MacbookPro } from "../mocks/macbook-pro"

export interface FeaturesDataProps {
  id: number
  title: string
  content: string
  image?: string
  video?: string
}

export interface FeaturesProps {
  collapseDelay?: number
  ltr?: boolean
  linePosition?: "left" | "right" | "top" | "bottom"
}

const data: FeaturesDataProps[] = [
  {
    id: 1,
    title: "Connect a social channel",
    content:
      "Connect any one — Instagram, WhatsApp, Facebook, TikTok, Gmail, Outlook or Zoho Mail — and you're set.",
    image: "/step-1.png",
  },
  {
    id: 2,
    title: "Train your AI",
    content:
      "Add your business identity — name, support email, phone, and an about-us blurb — so the AI can introduce you.",
    image: "/step-2-kb1.png",
  },
  {
    id: 3,
    title: "Connect ecommerce",
    content:
      "Connect Blanxer so AI can place real orders, check stock, and quote delivery — straight inside the chat.",
    image: "/step-3.png",
  },
  {
    id: 4,
    title: "Connect CRM",
    content:
      "Connect BlanxerCRM so AI can capture leads and create deals from every conversation.",
    image: "/step-4.png",
  },
  {
    id: 5,
    title: "Turn on Sambad AI",
    content:
      "Master switch. AI starts handling new conversations on every connected channel.",
    image: "/step-5.png",
  },
]

export function WorkingSection({
  collapseDelay = 7000,
  ltr = false,
  linePosition = "left",
}: FeaturesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const carouselRef = useRef<HTMLUListElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(-1)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isInView])

  const scrollToIndex = React.useCallback(
    (index: number) => {
      if (carouselRef.current) {
        const card = carouselRef.current.querySelectorAll(".card")[index]
        if (card) {
          const cardRect = card.getBoundingClientRect()
          const carouselRect = carouselRef.current.getBoundingClientRect()
          const offset =
            cardRect.left -
            carouselRect.left -
            (carouselRect.width - cardRect.width) / 2

          carouselRef.current.scrollTo({
            left: carouselRef.current.scrollLeft + offset,
            behavior: "smooth",
          })
        }
      }
    },
    [data.length]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          (prevIndex !== undefined ? prevIndex + 1 : 0) % data.length
        scrollToIndex(nextIndex)
        return nextIndex
      })
    }, collapseDelay)

    return () => clearInterval(timer)
  }, [collapseDelay, data.length, scrollToIndex])

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft
        const cardWidth = carousel.querySelector(".card")?.clientWidth || 0
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          data.length - 1
        )
        setCurrentIndex(newIndex)
      }

      carousel.addEventListener("scroll", handleScroll)
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={ref} className="py-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <Heading>Working with Sambad AI</Heading>
          <SubHeading className="mt-4">
            Connect your social channels, train your AI, and let it handle your
            conversations.
          </SubHeading>
        </div>

        <div className="mx-auto my-12 grid h-full items-start gap-1 lg:grid-cols-2">
          <div
            className={`order-1 hidden lg:order-0 lg:flex ${
              ltr ? "lg:order-2 lg:justify-end" : "justify-start"
            }`}
          >
            <Accordion
              className=""
              multiple={false}
              defaultValue={currentIndex === -1 ? [] : [`item-${currentIndex}`]}
              value={currentIndex === -1 ? [] : [`item-${currentIndex}`]}
              onValueChange={(value) => {
                if (value.length === 0) {
                  setCurrentIndex(-1)
                } else {
                  setCurrentIndex(Number(value[0].split("-")[1]))
                }
              }}
            >
              {data.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  className="relative mb-8 last:mb-0"
                  value={`item-${index}`}
                >
                  {linePosition === "left" || linePosition === "right" ? (
                    <div
                      className={`absolute inset-y-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ${
                        linePosition === "right"
                          ? "right-0 left-auto"
                          : "right-auto left-0"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 w-full ${
                          currentIndex === index ? "h-full" : "h-0"
                        } origin-top bg-brand-600 transition-all ease-linear`}
                        style={{
                          transitionDuration:
                            currentIndex === index
                              ? `${collapseDelay}ms`
                              : "0s",
                        }}
                      ></div>
                    </div>
                  ) : null}

                  {linePosition === "top" || linePosition === "bottom" ? (
                    <div
                      className={`absolute inset-x-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ${
                        linePosition === "bottom" ? "bottom-0" : "top-0"
                      }`}
                    >
                      <div
                        className={`absolute left-0 ${
                          linePosition === "bottom" ? "bottom-0" : "top-0"
                        } h-full ${
                          currentIndex === index ? "w-full" : "w-0"
                        } origin-left bg-primary transition-all ease-linear dark:bg-white`}
                        style={{
                          transitionDuration:
                            currentIndex === index
                              ? `${collapseDelay}ms`
                              : "0s",
                        }}
                      ></div>
                    </div>
                  ) : null}

                  <div className="relative flex">
                    <div className="px-3">
                      <AccordionTrigger
                        chevron={false}
                        className="flex w-full items-center gap-2 py-3 pl-0 text-xl font-medium hover:no-underline focus-visible:underline focus-visible:ring-0"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "flex size-8 items-center justify-center rounded-full bg-muted text-sm",
                              {
                                "bg-brand-600 text-white":
                                  currentIndex === index,
                              }
                            )}
                          >
                            {index + 1}
                          </div>
                          {item.title}
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pl-4 text-base text-muted-foreground">
                        <AnimatedText text={item.content} duration={0.1} />
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className={`${ltr && "lg:order-1"}`}>
            {data[currentIndex]?.image || data[currentIndex]?.video ? (
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  origin: "top left",
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <MacbookPro
                  image={data[currentIndex]?.image}
                  video={data[currentIndex]?.video}
                  className="mx-auto h-auto w-[330px] sm:h-[600px] sm:w-[600px] md:w-[500px] lg:w-[700px]"
                />
              </motion.div>
            ) : (
              <div className="aspect-auto size-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"></div>
            )}
          </div>

          <ul
            ref={carouselRef}
            className="flex h-full w-[200px] snap-x snap-mandatory scrollbar-none flex-nowrap overflow-x-auto mask-[linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] lg:hidden [&::-webkit-scrollbar]:hidden"
            style={{
              padding: "50px calc(50%)",
            }}
          >
            {data.map((item, index) => (
              <div
                key={item.id}
                className="card relative mr-8 grid h-full max-w-40 shrink-0 items-start justify-center py-4 last:mr-0 sm:max-w-60"
                onClick={() => setCurrentIndex(index)}
                style={{
                  scrollSnapAlign: "center",
                }}
              >
                <div className="absolute inset-y-0 right-auto left-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30">
                  <div
                    className={`absolute top-0 left-0 h-full ${
                      currentIndex === index ? "w-full" : "w-0"
                    } origin-top bg-brand-600 transition-all ease-linear`}
                    style={{
                      transitionDuration:
                        currentIndex === index ? `${collapseDelay}ms` : "0s",
                    }}
                  ></div>
                </div>
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="mx-0 max-w-sm text-sm text-balance text-muted-foreground">
                  {item.content}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
