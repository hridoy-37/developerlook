import Link from 'next/link'
import { ArrowLeft, Fingerprint, Mail, Phone, MapPin, Eye, Lock, Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | RevEnComm',
  description: 'How we collect, use, and safeguard your data with transparency and integrity.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 selection:bg-[#FF8A00]/30">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative z-10">
        
        {/* Header */}
        <header className="max-w-4xl mb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-white/40 hover:text-[#FF8A00] mb-12 text-[10px] font-black tracking-[0.3em] uppercase transition-all"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF8A00]/40 group-hover:-translate-x-1 transition-all">
              <ArrowLeft size={14} />
            </div>
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center">
              <Fingerprint className="text-[#FF8A00]" size={24} />
            </div>
            <span className="text-[#FF8A00] text-xs font-bold tracking-[0.3em] uppercase">Data Protection</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight text-white leading-[0.95] uppercase mb-8">
            Privacy <br/>
            <span className="text-white/20 italic font-light"> & Policy.</span>
          </h1>
          
          <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Last updated: April 28, 2026<br /><br />
            At Revencomm, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
        </header>

        {/* Content Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[48px] p-8 md:p-16 lg:p-20 shadow-2xl">
              <div className="prose prose-invert prose-orange max-w-none space-y-16">
                
                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">1. Information We Collect</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium mb-6">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="grid gap-3 list-none p-0 mb-8">
                    {[
                      'Name, email address, and phone number when you contact us',
                      'Business information when requesting our services',
                      'Payment information for processing transactions',
                      'Communications you send to us'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/50 leading-relaxed text-lg font-medium mb-6">
                    We also automatically collect certain information when you visit our website:
                  </p>
                  <ul className="grid gap-3 list-none p-0">
                    {[
                      'IP address and browser type',
                      'Pages visited and time spent on our site',
                      'Referring website and search terms',
                      'Device information and operating system'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">2. How We Use Your Information</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">We use the information we collect to:</p>
                  <ul className="grid gap-4 list-none p-0">
                    {[
                      'Provide and improve our services',
                      'Communicate with you about our services',
                      'Process payments and transactions',
                      'Send marketing communications (with your consent)',
                      'Analyze website usage and improve user experience',
                      'Comply with legal obligations'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">3. Information Sharing</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">We do not sell your personal information. We may share your information with:</p>
                  <ul className="grid gap-4 list-none p-0 mb-8">
                    {[
                      'Service providers who assist in our operations (hosting, analytics, payment processing)',
                      'Professional advisors (lawyers, accountants) when necessary',
                      'Law enforcement or regulatory authorities when required by law',
                      'Third parties with your explicit consent'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-sm italic font-medium">
                    All third-party service providers are bound by confidentiality agreements and are required to protect your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">4. Cookies and Tracking</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">We use cookies and similar tracking technologies to:</p>
                  <ul className="grid gap-4 list-none p-0 mb-8">
                    {[
                      'Remember your preferences and settings',
                      'Understand how you use our website',
                      'Improve our services and user experience',
                      'Provide relevant content and advertising'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/50 leading-relaxed font-medium">
                    You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">5. Data Security</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                  <ul className="grid gap-4 list-none p-0 mb-8">
                    {[
                      'Encrypted data transmission (SSL/TLS)',
                      'Secure server infrastructure',
                      'Regular security assessments',
                      'Restricted access to personal data'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/40 text-sm italic font-medium">
                    While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">6. Your Rights</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">You have the right to:</p>
                  <ul className="grid gap-4 list-none p-0 mb-8">
                    {[
                      'Access the personal information we hold about you',
                      'Request correction of inaccurate information',
                      'Request deletion of your personal information',
                      'Opt out of marketing communications',
                      'Object to processing of your personal data',
                      'Request a copy of your data in a portable format'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/50 leading-relaxed font-medium">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">7. Data Retention</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">We retain your personal information for as long as necessary to:</p>
                  <ul className="grid gap-4 list-none p-0">
                    {[
                      'Provide our services to you',
                      'Comply with legal obligations',
                      'Resolve disputes and enforce our agreements',
                      'Maintain business records'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/50 leading-relaxed font-medium mt-6">
                    When your information is no longer needed, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">8. Third-Party Websites</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">9. Children's Privacy</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">10. Changes to This Policy</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website with an updated "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">11. Contact Us</h2>
                  <p className="text-white/50 leading-relaxed mb-8 font-medium">If you have questions or concerns about this privacy policy or our data practices, please contact us:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <p className="text-[#FF8A00] text-[10px] font-black uppercase tracking-widest mb-2">Direct Email</p>
                      <p className="text-white font-bold text-lg">info@revencomm.com</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <p className="text-[#FF8A00] text-[10px] font-black uppercase tracking-widest mb-2">Support Line</p>
                      <p className="text-white font-bold text-lg">01806673304</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 p-10 rounded-[40px]">
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Bangladesh Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">HQ Location</p>
                    <p className="text-white font-bold text-sm tracking-tight leading-relaxed">Square Road, GP Ja, Mohakhali, Dhaka.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Call Directly</p>
                    <p className="text-white font-bold text-sm tracking-tight">01806673304</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-all shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Email Us</p>
                    <p className="text-white font-bold text-sm tracking-tight">info@revencomm.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FF8A00]/5 border border-[#FF8A00]/10 p-10 rounded-[40px]">
              <h3 className="text-[#FF8A00] font-black uppercase tracking-widest text-xs mb-8">Related Documents</h3>
              <div className="space-y-5">
                <Link
                  href="/terms/conditions"
                  className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FF8A00]/30 transition-all"
                >
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-[#FF8A00]">Terms & Conditions</span>
                  <ArrowLeft className="rotate-180 text-white/20 group-hover:text-[#FF8A00]" size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FF8A00]/30 transition-all"
                >
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-[#FF8A00]">Contact Us</span>
                  <ArrowLeft className="rotate-180 text-white/20 group-hover:text-[#FF8A00]" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
