import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import HeroImage from "@/components/landing/HeroImage"
import FeatureWork from "@/components/landing/FeatureWork"
import FeatureHire from "@/components/landing/FeatureHire"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HeroImage />
        <FeatureWork />
        <FeatureHire />
      </main>
    </div>
  )
}

export default App
