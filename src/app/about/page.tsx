import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutHero from './AboutHero'
import OurTeam from './OurTeam'

export const metadata = {
  title: 'About Us | RevEnComm',
  description: 'Learn more about our mission, vision, and the team driving digital excellence.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-0 bg-[#0A0A0F]">
        <AboutHero />
        <OurTeam />
      </main>
      <Footer />
    </>
  )
}
