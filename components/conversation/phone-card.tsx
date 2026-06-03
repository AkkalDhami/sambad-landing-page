"use client"

import { ConversationList } from "@/components/conversation"
import { cn } from "@/lib/utils"
import { IconSearch } from "@tabler/icons-react"

export function PhoneCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-168 w-100 rounded-4xl border-8 border-accent",
        className
      )}
    >
      <ConversationList className="h-full w-full rounded-4xl bg-background mask-b-from-90% p-4" />

      <div className="absolute bottom-4 left-1/2 mx-auto flex w-[74%] -translate-x-1/2 items-center gap-2 rounded-full border bg-background p-3 text-sm">
        <IconSearch className="size-3.5" /> Search conversations...
      </div>
    </div>
  )
}
