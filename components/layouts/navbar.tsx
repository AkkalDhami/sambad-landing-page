"use client"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/shared/logo"
import { useScroll } from "@/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/layouts/mobile-nav"
import Link from "next/link"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export const navLinks = [
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Sign In",
    href: "#",
  },
]

export function Navbar() {
  const scrolled = useScroll(10)

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent", {
        "bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav
        className={cn(
          "mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4"
        )}
      >
        <div className="flex items-center gap-5">
          <Logo />
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            size={"lg"}
            variant="brand"
            className={"rounded-full px-4 font-medium"}
          >
            Book a Demo
          </Button>
          <ThemeToggle />
        </div>
        <MobileNav />
      </nav>
    </header>
  )
}
