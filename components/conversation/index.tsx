"use client"

import { motion } from "motion/react"
import { conversations } from "@/data/conversations"
import { ConversationCard } from "./card"
import { cn } from "@/lib/utils"

export function ConversationList({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <h1 className="mb-3 text-lg font-bold">Conversations</h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="space-y-2"
      >
        {conversations.map((conversation) => (
          <ConversationCard key={conversation.name} {...conversation} />
        ))}
      </motion.div>
    </div>
  )
}
