'use client';

import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import VideoPlayer from '@/components/ui/VideoDemo';
import { media } from '@/lib/cloudinary';

export default function WorkSpace() {
  return (
    <main className="min-h-screen">
      <TopNav />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-[100px] md:pt-[164px] pb-[64px] md:pb-[128px] px-4 md:px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-accent-blue/10 rounded-full blur-orb"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center px-2">
          <span className="text-accent-blue text-[10px] sm:text-[12px] font-black uppercase tracking-[3px] sm:tracking-[5.6px] block mb-3 md:mb-4">
            COLLABORATIVE HUB
          </span>
          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[100%] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.8px] text-text-primary mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            WORK SPACE
          </h1>
          <p className="max-w-[800px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] font-medium text-text-secondary leading-[24px] sm:leading-[28px] md:leading-[32px] mb-6 md:mb-8 px-2">
            Centralized file management and collaboration platform for sports analytics teams
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <GradientButton variant="primary">REQUEST DEMO</GradientButton>
            <GradientButton variant="secondary">TECH SPECS</GradientButton>
          </div>
        </div>
      </section>

      {/* Features Grid - Exact match to design */}
      <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Universal Import/Export - Full width */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-4 md:p-6 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-[6px] bg-accent-blue/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-black text-white">Universal Import/Export</h3>
              </div>
            </div>
            <div className="flex gap-2 ml-11">
              <span className="bg-accent-blue/10 text-accent-blue text-[8px] font-bold uppercase px-2 py-1 rounded-[2px]">CSV</span>
              <span className="bg-accent-blue/10 text-accent-blue text-[8px] font-bold uppercase px-2 py-1 rounded-[2px]">JSON</span>
              <span className="bg-accent-blue/10 text-accent-blue text-[8px] font-bold uppercase px-2 py-1 rounded-[2px]">XML</span>
              <span className="bg-accent-blue/10 text-accent-blue text-[8px] font-bold uppercase px-2 py-1 rounded-[2px]">PDF</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Centralized Storage */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-4 md:p-6">
              <div className="w-8 h-8 rounded-[6px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-[16px] font-black text-white mb-2">Centralized Storage</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#52525B] text-[9px]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  /match-data
                </div>
                <div className="flex items-center gap-1.5 text-[#52525B] text-[9px]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  /training-sessions
                </div>
                <div className="flex items-center gap-1.5 text-[#52525B] text-[9px]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  /reports
                </div>
              </div>
            </div>

            {/* Real-time Collaboration */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-6">
              <div className="w-8 h-8 rounded-[6px] bg-accent-green/10 flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-[16px] font-black text-white mb-2">Real-time Collaboration</h3>
              <div className="flex gap-2">
                <span className="bg-accent-blue/10 text-accent-blue text-[8px] font-bold uppercase px-2 py-0.5 rounded-[2px]">COACH</span>
                <span className="bg-accent-green/10 text-accent-green text-[8px] font-bold uppercase px-2 py-0.5 rounded-[2px]">ANALYST</span>
              </div>
            </div>

            {/* Empty space for grid balance */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Bottom Row - 4 Small Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Advanced Search */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-4 md:p-5">
              <div className="w-6 h-6 rounded-[4px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h4 className="text-[12px] font-black text-white mb-1">Advanced Search</h4>
              <p className="text-[#52525B] text-[9px] leading-[14px]">Filter by player, date, event.</p>
            </div>

            {/* Security & Access */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5">
              <div className="w-6 h-6 rounded-[4px] bg-accent-green/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h4 className="text-[12px] font-black text-white mb-1">Security & Access</h4>
              <p className="text-[#52525B] text-[9px] leading-[14px]">Granular permissions.</p>
            </div>

            {/* Version Control */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5">
              <div className="w-6 h-6 rounded-[4px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4 className="text-[12px] font-black text-white mb-1">Version Control</h4>
              <p className="text-[#52525B] text-[9px] leading-[14px]">Trace every change.</p>
            </div>

            {/* Comments */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5">
              <div className="w-6 h-6 rounded-[4px] bg-accent-green/10 flex items-center justify-center mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h4 className="text-[12px] font-black text-white mb-1">Comments</h4>
              <p className="text-[#52525B] text-[9px] leading-[14px]">Threaded feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-[64px] md:py-[80px] lg:py-[100px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-accent-purple text-[11px] font-black uppercase tracking-[4px] block mb-3 text-center">
            DEMO
          </span>
          <h2 className="text-[36px] font-black italic text-text-primary mb-10 text-center uppercase tracking-wide">
            SEE IT IN ACTION
          </h2>
          <VideoPlayer videoSrc={media.workspaceVideo} poster={media.workspaceThumb} className="max-w-[1000px] mx-auto" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[64px] md:py-[80px] lg:py-[100px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-br from-accent-blue to-accent-blue-dark rounded-[32px] p-12 text-center">
            <h2 className="text-[36px] font-black text-white mb-6">
              Centralize your files.
            </h2>
            <GradientButton variant="white">Get Started</GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
