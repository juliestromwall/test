import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PlaceholderImage({ label, icon: Icon = ImageIcon, className }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3 bg-muted/60 rounded-xl", className)}>
      <Icon className="size-10 text-muted-foreground/40" />
      {label && <span className="text-sm text-muted-foreground/60">{label}</span>}
    </div>
  )
}
