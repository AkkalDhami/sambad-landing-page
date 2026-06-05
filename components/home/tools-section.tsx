"use client"

import {
  IconCalendar,
  IconDatabase,
  IconPackage,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react"
import { motion } from "motion/react"
import { Section } from "../ui/section"

const tools = [
  {
    icon: IconPackage,
    title: "Order System",
    description: "Track orders & deliveries",
  },
  {
    icon: IconUsers,
    title: "CRM",
    description: "Customer information",
  },
  {
    icon: IconCalendar,
    title: "Calendar",
    description: "Appointments & scheduling",
  },
  {
    icon: IconDatabase,
    title: "ERP",
    description: "Business operations",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ToolsSection() {
  return (
    <Section className="relative overflow-hidden py-32">
      {/* background */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

      <div className="relative container mx-auto px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <IconSparkles stroke={1} className="size-4" />
              AI Tool Calling
            </div>

            <h2 className="max-w-xl text-5xl font-bold tracking-tight lg:text-6xl">
              Connect your tools.
              <br />
              Let AI do the work.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Register your CRM, order system, calendar, ERP, or any internal
              software. Sambad AI automatically chooses the right tool during
              conversations and returns live answers instantly.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-primary px-6 py-3 text-primary-foreground">
                Start Building
              </button>

              <button className="rounded-xl border px-6 py-3">
                Documentation
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <WorkflowVisualization />
        </div>
      </div>
    </Section>
  )
}

function WorkflowVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto flex h-[700px] w-full max-w-xl items-center justify-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute top-0 grid w-full gap-4"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.title}
            variants={item}
            whileHover={{
              scale: 1.03,
            }}
            className="group rounded-3xl border bg-background/70 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl border p-3">
                <tool.icon className="size-5" />
              </div>

              <div>
                <h3 className="font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* AI NODE */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute top-[290px]"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-violet-500 opacity-40 blur-3xl" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border bg-background shadow-2xl">
            <IconSparkles stroke={1} className="size-10 text-violet-500" />
          </div>

          <p className="mt-4 text-center font-semibold">Sambad AI</p>
        </div>
      </motion.div>

      {/* Connection line */}
      <div className="absolute top-[180px] h-[130px] w-px border-l border-dashed border-violet-500/40" />

      <div className="absolute top-[390px] h-[80px] w-px border-l border-dashed border-violet-500/40" />

      {/* Chat Result */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
        viewport={{ once: true }}
        className="absolute bottom-0 w-full rounded-[32px] border bg-background/70 p-6 backdrop-blur-xl"
      >
        <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-muted-foreground">
          LIVE CONVERSATION
        </p>

        <div className="mb-4 flex justify-end">
          <div className="rounded-2xl bg-muted px-4 py-3">
            How many loyalty points do I have?
          </div>
        </div>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
            <span className="mr-2 text-xs font-bold tracking-wider text-violet-500">
              CALLING TOOL
            </span>
            You currently have{" "}
            <span className="font-semibold">2,450 loyalty points</span>.
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
