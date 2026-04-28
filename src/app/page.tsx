import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import Badge from '@/components/ui/Badge';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Timeline from '@/components/ui/Timeline';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-[80px] md:pt-24 pb-12 md:pb-16 px-4 md:px-6 overflow-hidden">
        {/* Background with animated gradient orb */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-surface via-bg-surface/90 to-bg-surface"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-blue/5 rounded-full blur-orb animate-pulse-slow"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-6 md:gap-8 text-center stagger-children px-2">
          {/* Version Badge */}
          <div className="bg-bg-card-alt px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            <span className="text-text-secondary text-[10px] font-bold uppercase tracking-[2px]">
              V2.0 NOW LIVE
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-black italic leading-[100%] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.8px] text-text-primary drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            AI-POWERED SPORTS<br />
            <span className="text-accent-green">PERFORMANCE</span> CONSULTING
          </h1>

          {/* Subtitle */}
          <p className="max-w-[672px] text-[14px] sm:text-[16px] md:text-[18px] font-medium text-text-secondary leading-[20px] sm:leading-[24px] md:leading-[28px] px-2">
            Transform raw athletic data into actionable insights. Our AI-powered platform delivers
            real-time performance analytics for professional sports organizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-8 w-full sm:w-auto px-2">
            <Link href="/about" className="w-full sm:w-auto">
              <GradientButton variant="primary" className="w-full sm:w-auto">REQUEST DEMO</GradientButton>
            </Link>
            <div className="w-full sm:w-auto">
              <GradientButton variant="secondary" className="w-full sm:w-auto">
                VIEW DOCUMENTATION
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Product Bento Grid */}
      <section className="relative bg-bg-card/30 py-[128px] px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-accent-purple text-[12px] font-black uppercase tracking-[5.6px] block mb-4">
                THE ECOSYSTEM
              </span>
              <h2 className="text-[48px] font-black italic text-text-primary mb-4">
                ENGINEERED FOR DATA DOMINANCE
              </h2>
            </div>
          </AnimatedSection>

          {/* Bento Grid - 5 Products Layout with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {/* DATA PERF - Featured Card (spans 2 columns) */}
            <div className="col-span-1 md:col-span-2 bg-bg-card border border-border-subtle rounded-[24px] p-8 hover:border-border-highlight hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
              <div className="w-14 h-14 rounded-[16px] bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 group-hover:scale-110 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2" className="group-hover:animate-pulse">
                  <rect x="3" y="12" width="4" height="9" rx="1" />
                  <rect x="10" y="8" width="4" height="13" rx="1" />
                  <rect x="17" y="3" width="4" height="18" rx="1" />
                </svg>
              </div>
              <h3 className="text-[28px] font-black text-text-primary mb-3 group-hover:text-accent-blue-light transition-colors duration-300">DATA PERF</h3>
              <p className="text-text-secondary text-[16px] leading-[24px] mb-4">
                Real-time telemetry ingestion processing 100k+ packets per second with sub-50ms latency
              </p>
              <div className="flex gap-2">
                <Badge variant="status-blue">LIVE FEED</Badge>
                <Badge variant="status-green">SYNCED</Badge>
              </div>
            </div>

            {/* COACH PAD */}
            <div className="bg-bg-card border border-border-subtle rounded-[24px] p-8 hover:border-border-highlight hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
              <div className="w-14 h-14 rounded-[16px] bg-accent-green/10 flex items-center justify-center mb-6 group-hover:bg-accent-green/20 group-hover:scale-110 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-text-primary mb-3 group-hover:text-accent-green transition-colors duration-300">COACH PAD</h3>
              <p className="text-text-secondary text-[14px] leading-[22px]">
                Strategic tactical board for game planning and formations
              </p>
            </div>

            {/* PROFILE */}
            <div className="bg-bg-card border border-border-subtle rounded-[24px] p-8 hover:border-border-highlight hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
              <div className="w-14 h-14 rounded-[16px] bg-accent-purple/10 flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 group-hover:scale-110 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300">PROFILE</h3>
              <p className="text-text-secondary text-[14px] leading-[22px]">
                Athlete biometric tracking and health monitoring
              </p>
            </div>

            {/* MATCH VIEW */}
            <div className="bg-bg-card border border-border-subtle rounded-[24px] p-8 hover:border-border-highlight hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
              <div className="w-14 h-14 rounded-[16px] bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 group-hover:scale-110 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-text-primary mb-3 group-hover:text-accent-blue-light transition-colors duration-300">MATCH VIEW</h3>
              <p className="text-text-secondary text-[14px] leading-[22px]">
                Multi-camera AI tracking with frame-accurate analysis
              </p>
            </div>

            {/* WORK SPACE */}
            <div className="bg-bg-card border border-border-subtle rounded-[24px] p-8 hover:border-border-highlight hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
              <div className="w-14 h-14 rounded-[16px] bg-accent-purple/10 flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 group-hover:scale-110 transition-all duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-[22px] font-black text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300">WORK SPACE</h3>
              <p className="text-text-secondary text-[14px] leading-[22px]">
                Centralized file management and team collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Pipeline */}
      <AnimatedSection>
        <section className="py-[128px] px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent-purple text-[12px] font-black uppercase tracking-[5.6px] block mb-4">
                THE PIPELINE
              </span>
              <h2 className="text-[48px] font-black italic text-text-primary">
                SENSOR TO STRATEGY
              </h2>
            </div>

            <div className="stagger-children">
              <Timeline
                variant="horizontal"
                steps={[
                  {
                    title: 'DATA',
                    description: 'Collect sensor telemetry',
                    icon: (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )
                  },
                  {
                    title: 'ANALYSIS',
                    description: 'AI processes data',
                    icon: (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: 'INSIGHTS',
                    description: 'Actionable recommendations',
                    icon: (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18h6M10 22h4M12 2v1M20 12h-2M6 12H4M5.636 5.636l1.414 1.414M16.95 7.05l1.414-1.414" />
                        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                      </svg>
                    )
                  },
                  {
                    title: 'DECISIONS',
                    description: 'Win with data',
                    isActive: true,
                    icon: (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={200}>
        <section className="py-[128px] px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative bg-bg-card-alt rounded-[8px] p-16 overflow-hidden group hover:scale-[1.01] transition-transform duration-700">
              {/* Animated Blur Orbs */}
              <div className="absolute top-0 right-0 w-[512px] h-[512px] bg-accent-blue/20 rounded-full blur-orb animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 w-[512px] h-[512px] bg-accent-green/20 rounded-full blur-orb animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

              <div className="relative z-10 text-center stagger-children">
                <h2 className="text-[72px] font-black italic text-text-primary mb-8">
                  OWN THE <span className="text-accent-green">ADVANTAGE</span>
                </h2>
                <div className="flex gap-4 justify-center">
                  <Link href="/about">
                    <GradientButton variant="primary">
                      REQUEST DEMO
                    </GradientButton>
                  </Link>
                  <Link href="/about">
                    <GradientButton variant="secondary">
                      CONTACT SALES
                    </GradientButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
