import { Button } from "@/components/ui/button"
import PlaceholderImage from "./PlaceholderImage"
import { Users } from "lucide-react"

export default function FeatureHire() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <PlaceholderImage
            label="Team Photo – Three dental professionals"
            icon={Users}
            className="aspect-[4/3] bg-secondary rounded-2xl"
          />

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Fill your shifts without the hiring hassle
            </h2>
            <p className="text-lg text-muted-foreground">
              Find top dental hygienists to fill your shifts – fast. The Teero platform
              is easy to use and we take care of all things admin. Because you&apos;re
              probably busy enough as it is.
            </p>
            <Button size="lg" className="rounded-full px-6">
              Start filling shifts
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
