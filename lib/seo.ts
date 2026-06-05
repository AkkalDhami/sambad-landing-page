import { Metadata } from "next"

export const siteConfig = {
  name: "Sambad — AI-Powered Omnichannel Inbox for Business",
  description:
    "Simple, transparent pricing for teams of all sizes. Start free for 7 days. Sambad unifies WhatsApp, Instagram, Facebook, TikTok, website chat, Gmail, Outlook (Microsoft 365) & Zoho Mail into one AI-powered inbox. Automate conversations, qualify leads, and respond to customers 24/7.",
  url: "https://sambad.io",
  ogImage: "https://sambad.io/og.jpg",
  links: {
    twitter: "https://twitter.com/sambad",
  },
  keywords: [
    "WhatsApp Business API",
    "omnichannel inbox",
    "AI chatbot",
    "social media inbox management",
    "WhatsApp marketing automation",
    "Instagram DM automation",
    "unified messaging platform",
    "AI sales agent",
    "customer support automation",
    "omnichannel customer support",
    "Facebook Messenger automation",
    "TikTok business messaging",
    "Gmail shared inbox",
    "Outlook shared inbox",
    "Microsoft 365 email inbox",
    "Zoho Mail integration",
    "email + chat unified inbox",
    "conversational commerce",
    "AI inbox",
    "Sambad",
    "Blanxer AI agent",
  ],
}

export const seo: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Sambad",
      url: siteConfig.url,
    },
  ],
  creator: "Sambad",
  publisher: "Sambad",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "One inbox. Every channel. AI that qualifies leads, answers questions, and handles conversations 24/7. Trusted by 500+ businesses.",
    images: [siteConfig.ogImage],
    creator: "@sambad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
