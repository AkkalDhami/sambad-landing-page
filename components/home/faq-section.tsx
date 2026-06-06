"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from "@/components/ui/section"
import AnimatedText from "@/components/shared/animated-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"

export function FaqsSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <Section id="faq" className="mx-auto mt-12 max-w-4xl space-y-4">
      <div className="space-y-7">
        <div className="space-y-2 text-center">
          <Heading className="mb-3 text-3xl font-semibold sm:text-4xl">
            Questions we get all the time.
          </Heading>
          <SubHeading className="text-base text-muted-foreground sm:text-lg">
            Answers to the things teams ask before they switch to Sambad.
          </SubHeading>
        </div>
      </div>
      <Accordion className="mt-8 rounded-lg border">
        {questions.map((item, ind) => {
          const isActive = activeId === item.id
          const isHovered = hoveredId === item.id
          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <AccordionItem className="px-4" value={item.id}>
                <AccordionTrigger
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="flex items-center gap-2 py-4 text-base font-normal hover:no-underline focus-visible:underline focus-visible:ring-0 sm:text-xl"
                >
                  <div
                    className={cn(
                      "relative flex size-7 items-center justify-center rounded-full text-sm",
                      isActive && "text-white"
                    )}
                  >
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-full bg-foreground"
                      )}
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 1 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                        backgroundColor: isActive
                          ? "var(--color-brand-600)"
                          : isHovered
                            ? "var(--color-foreground)"
                            : "transparent",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />{" "}
                    <motion.span
                      className="relative z-10 flex size-[50px] shrink-0 items-center justify-center text-xs font-medium tracking-wide sm:text-sm"
                      animate={{
                        color: isActive
                          ? "white"
                          : "var(--color-accent-foreground)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {ind + 1}
                    </motion.span>
                  </div>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4! text-base text-muted-foreground">
                  <AnimatedText
                    text={item.content}
                    className="text-sm sm:text-lg"
                  />
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          )
        })}
      </Accordion>
      <p className="text-center text-lg text-muted-foreground">
        Still have questions?
        <Button
          nativeButton={false}
          variant={"link"}
          render={
            <Link href={"https://www.sambad.io/book-demo"} className="text-lg">
              Talk to our team
            </Link>
          }
        ></Button>
      </p>
    </Section>
  )
}

const questions = [
  {
    id: "item-1",
    title: "What channels does Sambad support?",
    content:
      "WhatsApp, Instagram, Facebook Messenger, TikTok, a website chat widget, and email — Gmail, Outlook (Microsoft 365), and Zoho Mail. All eight channels live in one shared inbox.",
  },
  {
    id: "item-2",
    title: "How does the AI agent take orders on my behalf?",
    content:
      "Sambad AI is natively integrated with Blanxer. When a buyer shows intent, the AI confirms the product, captures the address, and places the order — inside the chat. Supports COD, Khalti, and eSewa.",
  },
  {
    id: "item-3",
    title: "Can I control what the AI says?",
    content:
      "Yes. Train it with your catalog, FAQs, policies, and brand voice. Set escalation rules so it always hands off to a human when needed.",
  },
  {
    id: "item-4",
    title: "How is lead scoring calculated?",
    content:
      "12+ signals — message frequency, purchase history, intent keywords, and sentiment. Scores range 0-100 and update in real time.",
  },
  {
    id: "item-5",
    title: "Do I need technical skills to set up Sambad?",
    content:
      "No. Connect channels via OAuth, upload your knowledge base, and embed the widget with one line of code. Under an hour, no engineers needed.",
  },
  {
    id: "item-6",
    title: "Is Sambad suitable for businesses outside Nepal?",
    content:
      "Yes. Built for South Asia but works globally. AI auto-replies in 30+ languages.",
  },
  {
    id: "item-7",
    title: "What happens when the AI can't answer a question?",
    content:
      "AI scales automatically — handles 90%+ of the surge, no extra staff needed. Set up campaign-specific replies for Dashain, Tihar, or sale events in advance.",
  },
]
