import { IconShieldCheckFilled } from "@tabler/icons-react"
import { NoiseTexture } from "@/components/ui/noise-texture"
import { AnimatedContainer } from "@/components/ui/animated-container"

export function VerifiedBusinessDetails() {
  return (
    <AnimatedContainer className="relative my-6 w-full overflow-hidden rounded-3xl border border-white/10">
      <div className="relative flex items-center gap-3 border-b border-white/10 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
          <IconShieldCheckFilled className="h-5 w-5 text-green-600" />
        </div>

        <h2 className="text-xl font-medium animate-fade-in-blur">Verified Business Details</h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <InfoColumn
          items={[
            {
              label: "Registered Name",
              value: "Blanxer Technology Pvt. Ltd.",
            },
            {
              label: "Registration No.",
              value: "305069/079/080",
            },
          ]}
        />

        <InfoColumn
          items={[
            {
              label: "Address",
              value: "Lokanthali-1, Bhaktapur, Nepal",
            },
            {
              label: "E-Commerce ID",
              value: "3-33-374-239/2082/83",
            },
          ]}
        />

        <InfoColumn
          items={[
            {
              label: "Contact",
              value: "hello@sambad.io",
            },
            {
              label: "Office",
              value: "Bhaktapur",
            },
          ]}
        />

        <InfoColumn
          items={[
            {
              label: "PAN / VAT",
              value: "610426740",
            },
            {
              label: "Complaint Officer",
              value: (
                <div className="space-y-1">
                  <div className="font-medium">
                    Prasiddha Bogati
                  </div>
                  <div className="text-sm text-muted-foreground">9840172158</div>
                  <div className="text-sm text-muted-foreground">support@sambad.io</div>
                </div>
              ),
            },
          ]}
        />
      </div>
      <NoiseTexture noiseOpacity={0.2} />
    </AnimatedContainer>
  )
}

type InfoColumnProps = {
  items: {
    label: string
    value: React.ReactNode
  }[]
}

function InfoColumn({ items }: InfoColumnProps) {
  return (
    <div className="border-r border-white/10 last:border-r-0">
      {items.map((item) => (
        <div key={item.label} className="px-6 py-4">
          <p className="mb-3 text-xs animate-fade-in-blur font-medium tracking-[0.2em] text-zinc-500 uppercase">
            {item.label}
          </p>

          <div className="text-base font-normal animate-fade-in-blur">{item.value}</div>
        </div>
      ))}
    </div>
  )
}
