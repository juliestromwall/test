import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageIcon, Calendar, DollarSign } from "lucide-react"

export default function HeroImage() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-secondary rounded-2xl overflow-hidden min-h-[400px] sm:min-h-[480px]">
          {/* Background placeholder */}
          <div className="flex items-center justify-center h-full min-h-[400px] sm:min-h-[480px]">
            <div className="flex flex-col items-center gap-3 text-muted-foreground/40">
              <ImageIcon className="size-16" />
              <span className="text-sm">Hero Image – Woman with phone</span>
            </div>
          </div>

          {/* Upcoming Shift Card - bottom left */}
          <Card className="absolute bottom-16 left-4 sm:left-8 w-56 shadow-lg border-none">
            <CardHeader className="pb-2 pt-4 px-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xs font-semibold">Upcoming shift</CardTitle>
                <div className="flex flex-col items-center bg-primary text-primary-foreground rounded-md px-2 py-1">
                  <span className="text-[10px] font-medium uppercase">Nov</span>
                  <span className="text-sm font-bold leading-none">27</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-2">
              <div className="border-l-2 border-primary pl-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold">The Dental Pearl</p>
                  <span className="text-[10px] text-muted-foreground">9:30 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] text-muted-foreground">Minneapolis, MN</p>
                  <span className="text-[10px] text-muted-foreground">5:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Earnings Card - top right */}
          <Card className="absolute top-8 right-4 sm:right-8 w-64 shadow-lg border-none hidden sm:block">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500" />
                  <div>
                    <p className="text-xs font-semibold">December 5</p>
                    <p className="text-[10px] text-muted-foreground">Instantly available: $331.41</p>
                  </div>
                </div>
                <span className="text-xs font-bold">$1,098 &rsaquo;</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-500" />
                  <div>
                    <p className="text-xs font-semibold">November 28</p>
                    <p className="text-[10px] text-muted-foreground">Instant pay not available</p>
                  </div>
                </div>
                <span className="text-xs font-bold">$1,068 &rsaquo;</span>
              </div>
            </CardContent>
          </Card>

          {/* Find shift button - bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Button variant="outline" className="rounded-full bg-white shadow-md text-xs">
              Find my next shift
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
