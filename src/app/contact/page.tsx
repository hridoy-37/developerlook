import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from './ContactForm'
import ContactHero from './ContactHero'

export const metadata = {
  title: 'Contact Us | RevEnComm',
  description: 'Get in touch with us to discuss your next big project or digital transformation.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-24 pb-0 bg-[#0A0A0F] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[25px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-[clamp(40px,8.6vw,100px)]">
          <ContactHero />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
