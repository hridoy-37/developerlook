import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | RevEnComm',
  description: 'Our commitment to transparency, legal compliance, and excellence in service delivery.',
}

export default function TermsConditionsPage() {
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
              <ShieldCheck className="text-[#FF8A00]" size={24} />
            </div>
            <span className="text-[#FF8A00] text-xs font-bold tracking-[0.3em] uppercase">Legal Governance</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight text-white leading-[0.95] uppercase mb-8">
            Terms <br/>
            <span className="text-white/20 italic font-light"> & Conditions.</span>
          </h1>
          
          <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Last updated: April 28, 2026<br /><br />
            By accessing and using Revencomm's services, you agree to these terms and conditions. Please read them carefully.
          </p>
        </header>

        {/* Content Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[48px] p-8 md:p-16 lg:p-20 shadow-2xl">
              <div className="prose prose-invert prose-orange max-w-none space-y-16">
                
                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">1. Acceptance of Terms</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    By accessing our website and using our services, you agree to be bound by these terms and conditions, all applicable laws and regulations. You are responsible for compliance with any applicable local laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">2. Use of Services</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">You may use our services for lawful purposes only. You agree not to:</p>
                  <ul className="grid gap-4 list-none p-0">
                    {[
                      'Use our services in any way that violates applicable laws or regulations',
                      'Attempt to interfere with the proper functioning of our services',
                      'Use our services to transmit harmful or malicious code',
                      'Collect or harvest any information from our services without permission'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">3. Intellectual Property</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">
                    All content, materials, and intellectual property on our website are owned by Revencomm or our licensors. You may not:
                  </p>
                  <ul className="grid gap-4 list-none p-0">
                    {[
                      'Copy, modify, or distribute our content without written permission',
                      'Use our trademarks, logos, or branding without authorization',
                      'Reverse engineer any software or technology we provide',
                      'Create derivative works based on our content'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">4. Service Agreements</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    When you engage our services, specific terms will be outlined in a service agreement. These terms include project scope, deliverables, timelines, and payment terms. We reserve the right to modify or discontinue services with reasonable notice to clients.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">5. Payment Terms</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">Payment terms are specified in individual service agreements. Generally:</p>
                  <ul className="grid gap-4 list-none p-0">
                    {[
                      'Payment is required according to agreed-upon milestones or schedules',
                      'Late payments may incur additional fees',
                      'Refunds are handled according to our refund policy'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] mt-2.5 shrink-0" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">6. Disclaimer of Warranties</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or meet your specific requirements.</p>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    While we strive for accuracy, we do not warrant that materials on our website are complete, reliable, or current.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">7. Limitation of Liability</h2>
                  <p className="text-white/50 leading-relaxed mb-6 font-medium">To the fullest extent permitted by law, Revencomm shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">8. Privacy and Data Protection</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    Your use of our services is also governed by our Privacy Policy. We are committed to protecting your personal information and handling data responsibly.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">9. Third-Party Links</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Use of third-party sites is at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">10. Modifications to Terms</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">11. Governing Law</h2>
                  <p className="text-white/50 leading-relaxed text-lg font-medium">
                    These terms and conditions are governed by and construed in accordance with the laws of Bangladesh. Any disputes shall be resolved in the courts of Bangladesh.
                  </p>
                </section>

                <section>
                  <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-8">12. Contact Information</h2>
                  <p className="text-white/50 leading-relaxed mb-8 font-medium">If you have questions about these terms, please contact us:</p>
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
                  href="/privacy/policy"
                  className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FF8A00]/30 transition-all"
                >
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-[#FF8A00]">Privacy Policy</span>
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
