"use client"

import { motion } from "motion/react"
import {
  Facebook,
  Gmail,
  Instagram,
  Messenger,
  TikTok,
  WhatsApp,
} from "@/components/icons"
import { IconSparkles } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface ConversationCardProps {
  avatar?: string
  initials?: string
  read?: boolean
  name: string
  message: string
  date: string
  platform:
    | "instagram"
    | "whatsapp"
    | "tiktok"
    | "messenger"
    | "facebook"
    | "gmail"
  tag?: string
  interested?: boolean
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
}

export function ConversationCard({
  avatar,
  initials,
  name,
  message,
  date,
  platform,
  tag,
  interested,
}: ConversationCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex items-start gap-3 border-b pb-2"
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-10 items-center justify-center rounded-full bg-purple-500/10 font-semibold text-purple-600">
            {initials}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="truncate text-[14px] font-medium text-accent-foreground">
            {name}
          </h3>

          <span className="shrink-0 text-xs text-muted-foreground">{date}</span>
        </div>

        <p className="truncate text-xs text-muted-foreground">{message}</p>

        <div className="mt-1 flex items-center justify-between">
          <PlatformIcon platform={platform} className="size-3" />

          <div className="flex items-center gap-2">
            {tag && (
              <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-700">
                {tag}
              </span>
            )}

            {interested && (
              <div className="flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-700">
                Interested <IconSparkles className="size-3" stroke={1} />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PlatformIcon({
  platform,
  className,
}: {
  platform: ConversationCardProps["platform"]
  className?: string
}) {
  const icons = {
    instagram: <Instagram />,
    whatsapp: <WhatsApp />,
    tiktok: <TikTok />,
    messenger: <Messenger />,
    facebook: <Facebook />,
    gmail: <Gmail />,
    default: <Instagram />,
  }

  return (
    <span className={cn("rounded-full text-lg", className)}>
      {icons[platform]}
    </span>
  )
}
