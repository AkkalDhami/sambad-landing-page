import Image from "next/image"
import Link from "next/link"

export const Logo = () => (
  <Link href={"/"} className="relative">
    <Image
      src="/logo-white.svg"
      alt="Sambad"
      width={29}
      height={29}
      className="h-7 w-auto object-contain transition-[filter] duration-300 dark:brightness-0 dark:invert"
    />
  </Link>
)
