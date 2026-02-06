import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = ["For offices", "For hygienists", "About Teero"]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-foreground tracking-tight">
            ✦ Teero
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              {link}
              <ChevronDown className="size-3.5" />
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Log in
          </button>
          <Button variant="outline" size="sm" className="rounded-full">
            Sign up now
          </Button>
        </div>
      </div>
    </nav>
  )
}
