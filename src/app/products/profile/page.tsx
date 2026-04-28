'use client';

import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import VideoPlayer from '@/components/ui/VideoDemo';
import { media } from '@/lib/cloudinary';

export default function Profile() {
  return (
    <main className="min-h-screen">
      <TopNav />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-[100px] md:pt-[164px] pb-[64px] md:pb-[128px] px-4 md:px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#353535]/30 rounded-full blur-orb"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center px-2">
          <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[128px] font-black leading-[100%] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-6.4px] text-text-primary mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            PROFILE
          </h1>
          <p className="text-[16px] sm:text-[20px] md:text-[24px] font-medium text-accent-blue mb-3 md:mb-4 uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px] text-glow-blue">
            AI ATHLETE PERFORMANCE TRACKING
          </p>
          <p className="max-w-[800px] mx-auto text-[14px] sm:text-[16px] md:text-[18px] font-medium text-text-secondary leading-[20px] sm:leading-[24px] md:leading-[28px] px-2">
            Comprehensive biometric data and medical tracking for optimal athlete development
          </p>
        </div>
      </section>

      {/* Features Grid - Exact match to design */}
      <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Player Data Dashboard - Large (spans 2 cols) */}
            <div className="md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-4 md:p-6 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[80px]"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-accent-blue text-[10px] font-black uppercase tracking-[2px] block mb-1">CENTRAL HUB</span>
                    <h3 className="text-[24px] font-black text-white">Player Data Dashboard</h3>
                  </div>
                  <span className="bg-accent-green/10 text-accent-green text-[9px] font-bold uppercase px-2 py-1 rounded-[2px]">LIVE SYNC</span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#252525] rounded-[6px] p-4">
                    <div className="text-[#52525B] text-[9px] uppercase tracking-wider mb-2">VO2 MAX</div>
                    <div className="text-[28px] font-black text-white mb-2">64.2</div>
                    <div className="h-1 bg-[#27272A] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-accent-green rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-[#252525] rounded-[6px] p-4">
                    <div className="text-[#52525B] text-[9px] uppercase tracking-wider mb-2">LOAD INDEX</div>
                    <div className="text-[28px] font-black text-white mb-2">0.92</div>
                    <div className="h-1 bg-[#27272A] rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-accent-blue rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-[#252525] rounded-[6px] p-4">
                    <div className="text-[#52525B] text-[9px] uppercase tracking-wider mb-2">RECOVERY</div>
                    <div className="text-[28px] font-black text-white mb-2">94%</div>
                    <div className="h-1 bg-[#27272A] rounded-full overflow-hidden">
                      <div className="h-full w-[94%] bg-accent-purple rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Tracking */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-6">
              <div className="w-8 h-8 rounded-[6px] bg-[#FFB4AB]/10 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB4AB" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-black text-white mb-2">Medical Tracking</h3>
              <p className="text-[#52525B] text-[11px] leading-[17px] mb-4">
                Centralized injury management and health protocols.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-[#252525] rounded-[4px] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
                    <span className="text-[#71717A] text-[9px] uppercase tracking-wider font-bold">Hamstring Recovery</span>
                  </div>
                  <span className="text-[#52525B] text-[8px] uppercase">Stage 4</span>
                </div>
                <div className="flex items-center justify-between bg-[#252525] rounded-[4px] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52525B]"></span>
                    <span className="text-[#71717A] text-[9px] uppercase tracking-wider font-bold">Cardiac Screening</span>
                  </div>
                  <span className="text-[#52525B] text-[8px] uppercase">Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {/* Digital Questionnaires - Large (spans 3 cols) */}
            <div className="md:col-span-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-4 md:p-6">
              <h3 className="text-[18px] font-black text-white mb-1 italic">Digital Questionnaires</h3>

              {/* Readiness Slider */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-[#52525B] mb-2">
                  <span>Current Readiness State</span>
                </div>
                <div className="flex items-center justify-between text-[8px] uppercase tracking-wider mb-1">
                  <span className="text-[#52525B]">Fatigued</span>
                  <span className="text-[#52525B]">Optimal</span>
                </div>
                <div className="h-1.5 bg-[#252525] rounded-full overflow-hidden mb-4">
                  <div className="h-full w-[60%] bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full"></div>
                </div>
              </div>

              {/* Sleep Quality */}
              <div>
                <label className="text-[#52525B] text-[8px] uppercase tracking-wider block mb-2">Sleep Quality Index</label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="py-2 rounded-[4px] bg-[#252525] text-[#71717A] text-[9px] font-bold uppercase hover:bg-[#333] transition-colors">
                    Poor
                  </button>
                  <button className="py-2 rounded-[4px] bg-accent-blue text-white text-[9px] font-bold uppercase">
                    Fair
                  </button>
                  <button className="py-2 rounded-[4px] bg-[#252525] text-[#71717A] text-[9px] font-bold uppercase hover:bg-[#333] transition-colors">
                    Great
                  </button>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="col-span-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex flex-col justify-between">
              <div className="w-6 h-6 rounded-[4px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-black text-white mb-1 uppercase">Alerts</h4>
                <p className="text-[#52525B] text-[8px] leading-[14px]">Real-time push notifications.</p>
              </div>
            </div>

            {/* Messaging */}
            <div className="col-span-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex flex-col justify-between">
              <div className="w-6 h-6 rounded-[4px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-black text-white mb-1 uppercase">Messaging</h4>
                <p className="text-[#52525B] text-[8px] leading-[14px]">Secure squad communication.</p>
              </div>
            </div>

            {/* Video */}
            <div className="col-span-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex flex-col justify-between">
              <div className="w-6 h-6 rounded-[4px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-black text-white mb-1 uppercase">Video</h4>
                <p className="text-[#52525B] text-[8px] leading-[14px]">Performance clip sharing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Witness the Flow - Video Section */}
      <section className="py-[64px] md:py-[80px] lg:py-[100px] px-4 md:px-6 bg-[#09090B]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[36px] font-black text-white mb-2 uppercase tracking-wide">
              Witness The Flow
            </h2>
            <div className="w-16 h-[2px] bg-accent-blue mx-auto"></div>
          </div>
          <VideoPlayer videoSrc={media.profileVideo} poster={media.profileThumb} className="max-w-[800px] mx-auto" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[64px] md:py-[80px] lg:py-[100px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#353535]/60 glass rounded-[16px] p-12 text-center border border-[#2a2a2a] shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
            <h2 className="text-[36px] font-black italic text-text-primary mb-6">
              CONNECT YOUR TEAM
            </h2>
            <GradientButton variant="primary">GET STARTED</GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
