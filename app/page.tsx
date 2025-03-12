import Header from "../src/app/components/Header"
import Hero from "../src/app/components/Hero"
import Features from "../src/app/components/Features"
import Testimonials from "../src/app/components/Testimonials"
import Pricing from "../src/app/components/Pricing"
import CTA from "../src/app/components/CTA"
import Footer from "../src/app/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

