import { Button } from "@/components/ui/button"
import WavyUnderline from "./WavyUnderline"

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Staffing solutions for{" "}
            <span className="relative inline-block pb-2">
              modern dentistry
              <WavyUnderline />
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexibility for hygienists. Reliability for offices. That&apos;s what the free
            Teero platform offers – from temporary to permanent.
          </p>

          <div className="flex gap-3 justify-center pt-2">
            <Button size="lg" className="rounded-full px-6">
              Work flexible shifts
            </Button>
            <Button size="lg" className="rounded-full px-6">
              Solve your shortage
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
