"use client"

import { ConversationList } from "@/components/conversation"
import { cn } from "@/lib/utils"
import { IconSearch } from "@tabler/icons-react"
import { motion } from "motion/react"

export function PhoneCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-168 w-100 rounded-4xl border-8 border-accent",
        className
      )}
    >
      <ConversationList className="h-full w-full rounded-4xl bg-background mask-b-from-90% p-4" />

      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(6px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute bottom-4 left-1/2 mx-auto flex w-[74%] -translate-x-1/2 items-center gap-2 rounded-full border bg-background px-3 py-2 text-sm"
      >
        <IconSearch className="size-3.5" /> Search conversations...
      </motion.div>
    </div>
  )
}
