"use client"
import { cn } from "@/lib/utils"
import NumberFlow from "@number-flow/react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FREQUENCY } from "@/components/ui/frequency-toggle"
import { IconCircleCheck, IconStar } from "@tabler/icons-react"
import { NoiseTexture } from "@/components/ui/noise-texture"
import { Plan } from "@/components/home/pricing-section"
import AnimatedText from "@/components/shared/animated-text"

type PricingCardProps = React.ComponentProps<"div"> & {
  plan: Plan
  frequency?: FREQUENCY
}

export function PricingCard({
  plan,
  className,
  frequency = "monthly",
}: PricingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-2xl border shadow-xs",
        plan.highlighted && "scale-105 ring-2 ring-brand-600",
        className
      )}
      key={plan.name}
    >
      <NoiseTexture noiseOpacity={0.2} />
      <div
        className={cn(
          "space-y-2 border-b p-4",
          plan.highlighted && "bg-card dark:bg-card/80"
        )}
      >
        <AnimatePresence mode="wait">
          <div className="animate-fade-in-blur absolute top-2 right-2 z-10 flex items-center gap-2">
            {plan.highlighted && (
              <motion.div
                className="flex items-center gap-1 rounded-full border border-brand-300 bg-brand-600 px-2 py-0.5 text-xs font-medium text-white dark:border-brand-800"
                key="popular-badge"
                layout
                transition={{ duration: 0.1 }}
              >
                <IconStar className="size-3 fill-current" />
                Popular
              </motion.div>
            )}

            {frequency === "yearly" &&
              plan.price.monthly > plan.price.yearly && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1 rounded-full border bg-green-600 px-2 py-0.5 text-xs text-white"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  key="discount-badge"
                  layout
                  transition={{ duration: 0.15 }}
                >
                  {/* Calculate the actual discount percentage of the plan */}
                  {Math.round(
                    ((plan.price.monthly - plan.price.yearly) /
                      plan.price.monthly) *
                      100
                  )}
                  % off
                </motion.div>
              )}
          </div>
        </AnimatePresence>

        <AnimatedText
          className="animate-fade-in-blur text-xl font-semibold"
          text={plan.name}
        />
        <AnimatedText
          className="animate-fade-in-blur text-base font-normal text-muted-foreground"
          text={plan.info}
        />

        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={{
            hidden: {
              opacity: 0,
              filter: "blur(4px)",
            },
            visible: {
              transition: {
                staggerChildren: 0.08,
                duration: 0.4,
              },
              opacity: 1,
              filter: "blur(0px)",
            },
          }}
          className="mt-2 flex w-max items-end gap-1"
        >
          <NumberFlow
            className="text-3xl font-extrabold [&::part(suffix)]:text-base [&::part(suffix)]:font-normal [&::part(suffix)]:text-muted-foreground"
            format={{
              style: "currency",
              currency: "INR",
              notation: "standard",
            }}
            suffix="/month"
            value={plan.price[frequency]}
          />
        </motion.h3>

        <AnimatedText
          className="animate-fade-in-blur mb-2 text-sm font-normal text-muted-foreground"
          text={`billed ${frequency}`}
        />
      </div>

      <div
        className={cn(
          "mt-auto w-full border-y border-border p-3",
          plan.highlighted && "bg-card dark:bg-card/80"
        )}
      >
        <Button
          nativeButton={false}
          render={<Link href={plan.btn.href}>{plan.btn.text}</Link>}
          className="h-11 w-full"
          variant={plan.highlighted ? "brand" : "outline"}
        ></Button>
      </div>

      <div
        className={cn(
          "space-y-3 px-4 pt-6 pb-8 text-sm text-muted-foreground",
          plan.highlighted && "bg-muted/10"
        )}
      >
        {plan.features.map((feature) => (
          <div
            className="animate-fade-in-blur flex items-center gap-2"
            key={feature}
          >
            <IconCircleCheck className="size-4 text-green-500" />
            <AnimatedText
              className="animate-fade-in-blur text-base font-normal"
              text={feature}
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
