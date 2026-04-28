import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import Image from 'next/image';
import { media } from '@/lib/cloudinary';

export default function About() {
  return (
    <main className="min-h-screen">
      <TopNav />

      {/* Hero Section - Matches home page design */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-[80px] md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
        {/* Background with animated gradient orb */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-surface via-bg-surface/90 to-bg-surface"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-blue/5 rounded-full blur-orb animate-pulse-slow"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-6 md:gap-8 text-center stagger-children px-2">
          {/* Label Badge */}
          <div className="bg-bg-card-alt px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
            <span className="text-text-secondary text-[10px] font-bold uppercase tracking-[2px]">
              Our Mission
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-black italic leading-[100%] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.8px] text-text-primary drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            UNLEASHING<br />
            <span className="text-accent-blue">POTENTIAL</span><br />
            THROUGH DATA
          </h1>

          {/* Subtitle */}
          <p className="max-w-[672px] text-[14px] sm:text-[16px] md:text-[18px] font-medium text-text-secondary leading-[20px] sm:leading-[24px] md:leading-[28px] px-2">
            Bridging the gap between athletic intuition and machine intelligence to unlock
            unprecedented performance insights for professional sports organizations worldwide.
          </p>
        </div>
      </section>

      {/* The Origin Section - Clean 2-col layout */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[32px] font-black text-white mb-10 tracking-tight">THE ORIGIN</h2>
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-5">
              <p className="text-[#A1A1AA] text-[15px] leading-[28px]">
                Founded at the intersection of elite sports science and aerospace engineering,
                Perf-Analysis Consulting began as a project to optimize athletic performance through data.
              </p>
              <p className="text-[#A1A1AA] text-[15px] leading-[28px]">
                Today, we apply those same rigorous data telemetry principles to world-class
                athletes and teams, turning milliseconds into legacies.
              </p>
            </div>

            {/* Image with Overlay */}
            <div className="relative h-[350px] rounded-[12px] overflow-hidden">
              <Image
                src={media.kineticPrecision}
                alt="Kinetic Precision - Athlete in starting position"
                fill
                className="object-cover"
                quality={100}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[18px] font-black text-white mb-1 uppercase tracking-wide">
                  Kinetic Precision
                </div>
                <div className="text-[#71717A] text-[9px] uppercase tracking-[2px]">
                  Our methodology is rooted in the physics of motion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-[100px] px-6 bg-[#0E0E0E]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {/* Innovation */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-8 hover:border-[#0059FF]/30 transition-colors group">
              <div className="w-14 h-14 rounded-[10px] bg-[#0059FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0059FF]/20 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-white mb-3">INNOVATION</h3>
              <p className="text-[#71717A] text-[14px] leading-[22px]">
                Pushing the boundaries of what's possible with AI-driven sports analytics
              </p>
            </div>

            {/* Performance */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-8 hover:border-[#3DE0A1]/30 transition-colors group">
              <div className="w-14 h-14 rounded-[10px] bg-[#3DE0A1]/10 flex items-center justify-center mb-6 group-hover:bg-[#3DE0A1]/20 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-white mb-3">PERFORMANCE</h3>
              <p className="text-[#71717A] text-[14px] leading-[22px]">
                Delivering enterprise-grade performance at sub-50ms latency
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-8 hover:border-[#B6C4FF]/30 transition-colors group">
              <div className="w-14 h-14 rounded-[10px] bg-[#B6C4FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#B6C4FF]/20 transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-white mb-3">COLLABORATION</h3>
              <p className="text-[#71717A] text-[14px] leading-[22px]">
                Enabling seamless teamwork across coaches, analysts, and athletes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean 2-col layout */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[42px] font-black italic text-white mb-12 text-center tracking-tight">
            DEPLOY PERF-ANALYSIS IN YOUR ORG
          </h2>

          <div className="grid grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#0059FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-[16px] font-bold mb-2">HEADQUARTERS</h4>
                  <p className="text-[#A1A1AA] text-[14px]">Ahmed Khebthani Street</p>
                  <p className="text-[#A1A1AA] text-[14px]">Ben Frej Building, Floor 2</p>
                  <p className="text-[#A1A1AA] text-[14px]">Ariana, Tunisia</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#3DE0A1]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-[16px] font-bold mb-2">EMAIL</h4>
                  <a href="mailto:support@perfanalysis.consulting" className="text-[#A1A1AA] text-[14px] hover:text-[#3DE0A1] transition-colors">
                    support@perfanalysis.consulting
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#B6C4FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-[16px] font-bold mb-4">FOLLOW US</h4>
                  <div className="flex gap-3">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/people/Perf-analysis-Consulting/61575174007551/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[8px] bg-[#1f1f1f] flex items-center justify-center hover:bg-[#0059FF]/20 hover:scale-110 transition-all duration-300 group"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#71717A" className="group-hover:fill-[#0059FF] transition-colors">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/perfanalysis_consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[8px] bg-[#1f1f1f] flex items-center justify-center hover:bg-[#B6C4FF]/20 hover:scale-110 transition-all duration-300 group"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" className="group-hover:stroke-[#B6C4FF] transition-colors">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/perf-analysis-consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[8px] bg-[#1f1f1f] flex items-center justify-center hover:bg-[#0059FF]/20 hover:scale-110 transition-all duration-300 group"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#71717A" className="group-hover:fill-[#0059FF] transition-colors">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href="https://x.com/analysis_perf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-[8px] bg-[#1f1f1f] flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#71717A" className="group-hover:fill-white transition-colors">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
