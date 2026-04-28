import ContactForm from './ContactForm'
import ContactHero from './ContactHero'

export const metadata = {
  title: 'Contact Us | RevEnComm',
  description: 'Get in touch with us to discuss your next big project or digital transformation.',
}

export default function ContactPage() {
  return (
    <>
      <main id="main-content" className="pb-0 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-5 md:px-[25px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-[clamp(120px,12vw,200px)] relative z-10">
          <ContactHero />
          <ContactForm />
        </div>
      </main>
    </>
  )
}
