"use client"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { Facebook, Instagram, TikTok, WhatsApp } from "@/components/icons"
import { Logo } from "@/components/shared/logo"
import Link from "next/link"
import { IconHeartFilled } from "@tabler/icons-react"
import Image from "next/image"
import { VerifiedBusinessDetails } from "@/components/shared/business-details"
import { AnimatedContainer } from "@/components/ui/animated-container"

type FooterLink = {
  title: string
  href: string
  icon?: ReactNode
}

type FooterSection = {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Omnichannel Inbox", href: "#" },
      { title: "Lead Scoring", href: "#" },
      { title: "Message Labeling", href: "#" },
      { title: "Analytics", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Channels",
    links: [
      { title: "WhatsApp Business", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "Facebook", href: "#" },
      { title: "TikTok", href: "#" },
      { title: "Website Widget", href: "#" },
      { title: "Gmail", href: "#" },
      { title: "Outlook", href: "#" },
      { title: "Zoho Mail", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Sambad", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Refer & Earn", href: "#" },
      { title: "Contact", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Return & Refund", href: "#" },
    ],
  },
]

type ContactLink = FooterLink & { icon?: ReactNode }

const contactLinks: ContactLink[] = [
  {
    title: "Facebook",
    href: "#",
    icon: <Facebook />,
  },
  {
    title: "Instagram",
    href: "#",
    icon: <Instagram />,
  },
  {
    title: "WhatsApp",
    href: "#",
    icon: <WhatsApp />,
  },
  {
    title: "TikTok",
    href: "#",
    icon: <TikTok />,
  },
]

export function Footer() {
  return (
    <footer
      className={cn(
        "relative mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-center border-t px-6 md:px-8",
        "dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]"
      )}
    >
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

      <div className="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-4 lg:gap-8">
        <AnimatedContainer className="space-y-6">
          <Logo />
          <p className="mt-6 text-base text-muted-foreground md:mt-4">
            The AI-powered omnichannel messaging platform. One inbox. Every
            channel. AI that handles the work.
          </p>

          <div className="flex items-center gap-4">
            {contactLinks.map((link) => (
              <Link
                className="flex size-10 items-center justify-center rounded-full border border-input duration-250 hover:text-foreground [&_svg]:size-6"
                href={link.href}
                key={link.title}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 font-medium text-muted-foreground">
            Powered by{" "}
            <Link
              href={"https://www.blanxer.com/"}
              target="_blank"
              className="flex items-center gap-1 text-accent-foreground"
            >
              <Image
                src="/blanxer.png"
                alt="Blanxer"
                width={20}
                height={20}
                className="size-6"
              />
              Blanxer
            </Link>{" "}
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-3 lg:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm font-medium uppercase">
                  {section.label}
                </h3>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        className="inline-flex items-center duration-250 hover:text-foreground [&_svg]:me-1.5 [&_svg]:size-3.5"
                        href={link.href}
                        key={`${section.label}-${link.title}`}
                      >
                        {link.icon}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <VerifiedBusinessDetails />
      <FooterBrandName />
      <div className="h-px w-full bg-linear-to-r via-border" />
      <div className="flex w-full flex-wrap items-center justify-center gap-4 py-4">
        <p className="flex flex-wrap items-center gap-1 text-base text-muted-foreground">
          &copy; {new Date().getFullYear()} |{" "}
          <Link
            href={"https://www.blanxer.com/"}
            target="_blank"
            className="text-brand-500 underline-offset-2 hover:underline"
          >
            Blanxer
          </Link>{" "}
          Technology Pvt. Ltd. | Made with{" "}
          <IconHeartFilled className="size-3.5 text-red-600" /> in Nepal
        </p>
        <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          Redesigned by{" "}
          <Link
            href={"https://www.akkal.com.np"}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            Akkal Dhami
          </Link>{" "}
          {" | "}
          <Link
            href={"https://github.com/akkaldhami/sambad-landing-page"}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            Source Code
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterBrandName({ className }: { className?: string }) {
  return (
    <AnimatedContainer className={cn("my-4", className)}>
      <h3 className="flex items-center gap-2 mask-b-from-20% text-3xl font-semibold text-muted-foreground sm:text-6xl md:text-7xl lg:text-8xl">
        sambad.io by blanxer
      </h3>
    </AnimatedContainer>
  )
}

