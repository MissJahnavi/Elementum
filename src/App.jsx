import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TomorrowSection from './components/TomorrowSection'
import ProgressSection from './components/ProgressSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import NewsletterSection from './components/NewsletterSection'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TomorrowSection />
        <ProgressSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
    </div>
  )
}

export default App
