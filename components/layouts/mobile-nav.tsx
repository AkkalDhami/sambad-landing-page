"use client"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/components/layouts/nabvar"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { motion } from "motion/react"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden"
            size="icon"
            variant="outline"
          >
            <div
              className={cn(
                "transition-all",
                open ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
            >
              <IconX />
            </div>
            <div
              className={cn(
                "absolute transition-all",
                open ? "scale-0 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <IconMenu2 />
            </div>
          </Button>
        }
      ></SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-6">
        <div className="mb-4">
          <Logo />
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="block rounded-full px-8 py-2 text-lg font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2 p-2">
          <Button size="lg" variant="brand" className="w-full rounded-full">
            Book a Demo
          </Button>
          <Button size="lg" variant="outline" className="w-full rounded-full">
            Sign Up
          </Button>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
