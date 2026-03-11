import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Benefits } from '@/components/Benefits'
import { Waitlist } from '@/components/Waitlist'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
