"use client"

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import {
  Testimonial,
  TestimonialQuote,
  TestimonialSpotlight,
} from "@/components/ui/testimonial"
import { IconQuoteOpen } from "@tabler/icons-react"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"
import { SubHeading } from "@/components/ui/sub-heading"
import { motion } from "motion/react"

export function TestimonialSection() {
  return (
    <Section
      id="testimonial"
      className="w-full space-y-4 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
    >
      <div className="animate-fade-in-blur mx-auto mb-8 max-w-4xl space-y-2">
        <Heading>Loved by businesses across Nepal</Heading>
        <SubHeading>
          Hundreds of brands use Sambad to handle conversations across every
          channel.
        </SubHeading>
      </div>

      {[TESTIMONIALS_2, TESTIMONIALS_1].map((list, index) => (
        <Marquee key={index} className="">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent direction={index % 2 === 1 ? "right" : "left"}>
            {list.map((item) => (
              <MarqueeItem key={item.quote} className="mx-4 h-full w-xs">
                <TestimonialSpotlight>
                  <Testimonial className="h-55 p-3">
                    <IconQuoteOpen
                      stroke={2}
                      className="size-8 text-muted-foreground"
                    />
                    <TestimonialQuote className="">
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 10,
                          filter: "blur(10px)",
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        }}
                      >
                        {item.quote}
                      </motion.p>
                    </TestimonialQuote>
                  </Testimonial>
                </TestimonialSpotlight>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      ))}
    </Section>
  )
}

const TESTIMONIALS_1 = [
  {
    quote:
      "“Honestly, the only work left for us now is creating content and packing orders. Sambad AI and Blanxer handle almost everything else.”",
  },
  {
    quote:
      "“Our Instagram inbox used to be chaos. Sambad AI now replies instantly, answers FAQs, and even guides customers toward placing orders. It feels like having a 24/7 sales employee.”",
  },
  {
    quote:
      "“Running ads became much more profitable after integrating Sambad AI. Customers get instant replies, follow-ups happen automatically, and conversions increased without adding more staff.”",
  },
]

const TESTIMONIALS_2 = [
  {
    quote:
      "“Blanxer + Sambad AI completely changed how we run our business. Website orders are automated, DMs are automated, and our sales process feels almost hands-free now.”",
  },
  {
    quote:
      "“We receive thousands of customer messages daily. Sambad AI now pre-qualifies leads automatically and sends only serious customers to our sales team. Huge time saver.”",
  },
  {
    quote:
      "“Before Sambad AI, our team spent hours replying to 'price please?' messages on Instagram and Facebook. Now AI handles DMs instantly and we focus on content and packing orders.”",
  },
]
