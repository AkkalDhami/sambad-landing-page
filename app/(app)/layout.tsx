import { BackToTop } from "@/components/layouts/back-to-top"
import { Footer } from "@/components/layouts/footer"
import { Navbar } from "@/components/layouts/navbar"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
