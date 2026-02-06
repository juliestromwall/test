import { Button } from "@/components/ui/button"
import PlaceholderImage from "./PlaceholderImage"
import { Smartphone } from "lucide-react"

export default function FeatureWork() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Work on your terms, earn what you deserve
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore shifts in your area, work flexibly, earn good money. That&apos;s Teero.
              And it all starts from the comfort of your couch with our simple, free app.
            </p>
            <Button size="lg" className="rounded-full px-6">
              Download the Teero app
            </Button>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <PlaceholderImage
              label="Phone Mockup – App interface"
              icon={Smartphone}
              className="w-64 h-[460px] rounded-3xl bg-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
