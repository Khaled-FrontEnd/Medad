// app/page.jsx
import Header from './components/home/Header'
import HeroSection from './components/home/HeroSection'
import StatsSection from './components/home/StatsSection'
import TrustedBySection from './components/home/TrustedBySection'
import TracksSection from './components/home/TracksSection'
import HowItWorksSection from './components/home/HowItWorksSection'
import FeaturesSection from './components/home/FeaturesSection'
import TestimonialsSection from './components/home/TestimonialsSection'
import FAQSection from './components/home/FAQSection'
import CTASection from './components/home/CTASection'
import Footer from './components/home/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        {/* <TrustedBySection /> */}
        <TracksSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}