import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function Products() {
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
            <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></span>
            <span className="text-text-secondary text-[10px] font-bold uppercase tracking-[2px]">
              Ecosystem Overview
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] font-black italic leading-[100%] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4.8px] text-text-primary drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            ONE PLATFORM,<br />
            <span className="text-accent-blue">COMPLETE PERFORMANCE</span><br />
            COVERAGE
          </h1>

          {/* Subtitle */}
          <p className="max-w-[672px] text-[14px] sm:text-[16px] md:text-[18px] font-medium text-text-secondary leading-[20px] sm:leading-[24px] md:leading-[28px] px-2">
            Five specialized engines interconnected to synthesize raw telemetry into elite performance outcomes.
          </p>
        </div>
      </section>

      {/* Neural Architecture Diagram */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] font-black text-white mb-2 tracking-tight">
              Neural Architecture
            </h2>
            <p className="text-[#52525B] text-[10px] uppercase tracking-[4px]">
              The Synaptic Interconnect System
            </p>
          </div>

          <div className="relative h-[450px] max-w-[850px] mx-auto">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[120px] h-[120px] rounded-full border border-[#B6C4FF]/15 flex flex-col items-center justify-center bg-[#1a1a1a]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(0,89,255,0.15)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="1.5" className="mb-1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
              <div className="text-white text-[9px] font-black uppercase tracking-wider">Core Engine</div>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 850 450">
              <line x1="425" y1="225" x2="180" y2="90" stroke="#0059FF" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="425" y1="225" x2="670" y2="90" stroke="#0059FF" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="425" y1="225" x2="100" y2="350" stroke="#0059FF" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="425" y1="225" x2="750" y2="350" stroke="#0059FF" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="425" y1="225" x2="425" y2="410" stroke="#0059FF" strokeWidth="1.5" strokeDasharray="6,4" />
            </svg>

            {/* Product Nodes with hover animations */}
            <Link href="/products/data-perf" className="absolute top-[45px] left-[120px] group">
              <div className="p-4 rounded-[8px] bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#0059FF]/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,89,255,0.2)] text-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2" className="mx-auto mb-1.5 group-hover:animate-pulse">
                  <rect x="3" y="12" width="4" height="9" rx="1" />
                  <rect x="10" y="8" width="4" height="13" rx="1" />
                  <rect x="17" y="3" width="4" height="18" rx="1" />
                </svg>
                <div className="text-white text-[10px] font-bold uppercase tracking-wider">Data Perf</div>
              </div>
            </Link>

            <Link href="/products/coach-pad" className="absolute top-[45px] right-[120px] group">
              <div className="p-4 rounded-[8px] bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#0059FF]/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,89,255,0.2)] text-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2" className="mx-auto mb-1.5 group-hover:animate-pulse">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                <div className="text-white text-[10px] font-bold uppercase tracking-wider">Coach Pad</div>
              </div>
            </Link>

            <Link href="/products/profile" className="absolute bottom-[60px] left-[40px] group">
              <div className="p-4 rounded-[8px] bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#3DE0A1]/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(61,224,161,0.2)] text-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2" className="mx-auto mb-1.5 group-hover:animate-pulse">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="text-white text-[10px] font-bold uppercase tracking-wider">Profile</div>
              </div>
            </Link>

            <Link href="/products/match-view" className="absolute bottom-[60px] right-[40px] group">
              <div className="p-4 rounded-[8px] bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#0059FF]/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,89,255,0.2)] text-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2" className="mx-auto mb-1.5 group-hover:animate-pulse">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <div className="text-white text-[10px] font-bold uppercase tracking-wider">Match View</div>
              </div>
            </Link>

            <Link href="/products/workspace" className="absolute bottom-[10px] left-1/2 -translate-x-1/2 group">
              <div className="p-4 rounded-[8px] bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#B6C4FF]/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(182,196,255,0.2)] text-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2" className="mx-auto mb-1.5 group-hover:animate-pulse">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <div className="text-white text-[10px] font-bold uppercase tracking-wider">Work Space</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Cards - Bento Grid */}
      <section className="py-[80px] px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {/* DATA PERF - Large (3 cols) - Dark card with data wave visualization */}
            <Link href="/products/data-perf" className="col-span-3 group relative bg-[#171717] rounded-[20px] p-8 overflow-hidden cursor-pointer border border-[#222222] hover:border-[#333333] transition-all duration-500">
              {/* Wavy data lines - appear on hover */}
              <div className="absolute top-0 right-0 w-[300px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <svg className="w-full h-full" viewBox="0 0 300 280" preserveAspectRatio="none">
                  <path d="M300 35 Q225 70 150 50 T0 70" stroke="#3DE0A1" strokeWidth="2" fill="none" className="opacity-30" />
                  <path d="M300 75 Q225 110 150 90 T0 110" stroke="#0059FF" strokeWidth="2" fill="none" className="opacity-30" />
                  <path d="M300 115 Q225 150 150 130 T0 150" stroke="#3DE0A1" strokeWidth="2" fill="none" className="opacity-30" />
                  <path d="M300 155 Q225 190 150 170 T0 190" stroke="#0059FF" strokeWidth="2" fill="none" className="opacity-30" />
                  <path d="M300 195 Q225 230 150 210 T0 230" stroke="#3DE0A1" strokeWidth="2" fill="none" className="opacity-30" />
                  <path d="M300 235 Q225 270 150 250 T0 270" stroke="#0059FF" strokeWidth="2" fill="none" className="opacity-30" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-[#3DE0A1] text-[10px] font-bold uppercase tracking-[5px] block mb-6">
                  Ingestion Engine
                </span>
                <h3 className="text-[42px] font-black text-white mb-5 uppercase tracking-tight">DATA PERF</h3>
                <p className="text-[#52525B] text-[14px] leading-[22px] max-w-[400px] mb-8">
                  Process 100k+ packets per second. Real-time telemetry processing for multi-vector athletic performance data.
                </p>
                <span className="text-[#3DE0A1] text-[11px] font-bold uppercase tracking-[4px] flex items-center gap-4 group-hover:gap-5 transition-all duration-300">
                  Explore Telemetry
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* COACH PAD (2 cols) - Dark card with tactical board */}
            <Link href="/products/coach-pad" className="col-span-2 bg-[#171717] rounded-[20px] p-6 flex flex-col group cursor-pointer border border-[#222222] hover:border-[#333333] transition-all duration-500 overflow-hidden">
              {/* Tactical board */}
              <div className="relative w-full h-[110px] bg-[#0f0f0f] rounded-[14px] mb-5 flex items-center justify-center border border-[#222222] group-hover:border-[#2a2a2a] transition-colors duration-500">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" stroke="#B6C4FF" strokeWidth="1.2" className="opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                  <rect x="4" y="4" width="36" height="22" rx="3" />
                  <line x1="4" y1="15" x2="40" y2="15" strokeDasharray="2 2" />
                  <line x1="22" y1="4" x2="22" y2="26" strokeDasharray="2 2" />
                  <circle cx="14" cy="10" r="2.5" />
                  <circle cx="30" cy="20" r="2.5" />
                </svg>
              </div>
              <span className="text-[#B6C4FF] text-[9px] font-bold uppercase tracking-[5px] mb-3">
                Strategic Command
              </span>
              <h3 className="text-[24px] font-black text-white mb-2 uppercase tracking-tight">COACH PAD</h3>
              <p className="text-[#52525B] text-[12px] leading-[18px] mb-6">
                Dynamic playbooks and live sideline analysis tools powered by predictive modeling.
              </p>
              <button className="mt-auto w-full py-3.5 bg-[#0f0f0f] text-white text-[10px] font-bold uppercase tracking-[4px] rounded-[10px] hover:bg-[#1a1a1a] transition-colors border border-[#222222] group-hover:border-[#2a2a2a]">
                View Toolset
              </button>
            </Link>
          </div>

          {/* Bottom Row - 3 equal cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* PROFILE - Dark card with person icon */}
            <Link href="/products/profile" className="relative bg-[#171717] rounded-[20px] p-6 flex flex-col group cursor-pointer border border-[#222222] hover:border-[#333333] transition-all duration-500 overflow-hidden">
              {/* Subtle corner arc decoration */}
              <svg className="absolute -bottom-12 -right-12 w-[140px] h-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 140 140">
                <circle cx="140" cy="140" r="50" stroke="#3DE0A1" strokeWidth="1" fill="none" className="opacity-20" />
                <circle cx="140" cy="140" r="70" stroke="#3DE0A1" strokeWidth="1" fill="none" className="opacity-15" />
                <circle cx="140" cy="140" r="90" stroke="#3DE0A1" strokeWidth="1" fill="none" className="opacity-10" />
              </svg>

              {/* Icon */}
              <div className="relative w-10 h-10 rounded-[12px] bg-[#0f0f0f] flex items-center justify-center mb-5 border border-[#222222]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="1.5" className="opacity-60">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
              </div>
              <h3 className="relative text-[20px] font-black text-white mb-2 uppercase tracking-tight">PROFILE</h3>
              <p className="relative text-[#52525B] text-[12px] leading-[18px] mb-6">
                Unified athlete identity. Historical performance biometrics and longitudinal health tracking.
              </p>
              <div className="relative space-y-2.5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0A1]/50"></span>
                  <span className="text-[#52525B] text-[9px] uppercase tracking-[2px]">Biometric Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0A1]/50"></span>
                  <span className="text-[#52525B] text-[9px] uppercase tracking-[2px]">Injury Modeling</span>
                </div>
              </div>
              <span className="relative text-[#52525B] text-[10px] font-bold uppercase tracking-[4px] mt-auto flex items-center gap-2 group-hover:text-[#3DE0A1] group-hover:gap-4 transition-all duration-300">
                Access Vault
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* MATCH VIEW - Dark card with live feed badge */}
            <Link href="/products/match-view" className="relative bg-[#171717] rounded-[20px] p-6 flex flex-col group cursor-pointer border border-[#222222] hover:border-[#333333] transition-all duration-500 overflow-hidden">
              {/* Radar arcs in corner - appear on hover */}
              <svg className="absolute bottom-0 right-0 w-[160px] h-[160px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 160 160">
                <circle cx="160" cy="160" r="50" stroke="#B6C4FF" strokeWidth="1" fill="none" className="opacity-20" />
                <circle cx="160" cy="160" r="80" stroke="#B6C4FF" strokeWidth="1" fill="none" className="opacity-15" />
                <circle cx="160" cy="160" r="110" stroke="#B6C4FF" strokeWidth="1" fill="none" className="opacity-10" />
                <line x1="160" y1="160" x2="60" y2="60" stroke="#B6C4FF" strokeWidth="0.5" className="opacity-30" />
              </svg>

              <div className="relative z-10">
                <span className="inline-block bg-[#0f0f0f] text-[#B6C4FF] text-[8px] font-bold uppercase px-3 py-1 rounded-[6px] mb-4 tracking-[3px] border border-[#222222]">
                  Live Feed
                </span>
                <h3 className="text-[24px] font-black text-white mb-3 uppercase tracking-tight">MATCH VIEW</h3>
                <p className="text-[#52525B] text-[12px] leading-[18px] mb-6">
                  The ultimate broadcast and officiating visualizer. Millimeter-accurate position tracking.
                </p>
              </div>
              <div className="relative flex gap-2 mt-auto">
                <span className="bg-[#0f0f0f] text-[#52525B] text-[8px] uppercase px-3 py-1.5 rounded-[6px] font-bold tracking-[2px] border border-[#222222]">4K Render</span>
                <span className="bg-[#0f0f0f] text-[#52525B] text-[8px] uppercase px-3 py-1.5 rounded-[6px] font-bold tracking-[2px] border border-[#222222]">0.1s Latency</span>
              </div>
            </Link>

            {/* WORK SPACE - Dark card with code brackets */}
            <Link href="/products/workspace" className="relative bg-[#171717] rounded-[20px] p-6 flex flex-col justify-between group cursor-pointer border border-[#222222] hover:border-[#333333] transition-all duration-500 overflow-hidden">
              {/* Terminal lines - appear on hover */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <svg width="50" height="35" viewBox="0 0 50 35">
                  <line x1="0" y1="7" x2="45" y2="7" stroke="white" strokeWidth="1" className="opacity-15" />
                  <line x1="0" y1="14" x2="35" y2="14" stroke="white" strokeWidth="1" className="opacity-15" />
                  <line x1="0" y1="21" x2="48" y2="21" stroke="white" strokeWidth="1" className="opacity-15" />
                  <line x1="0" y1="28" x2="25" y2="28" stroke="white" strokeWidth="1" className="opacity-15" />
                </svg>
              </div>

              <div>
                {/* Code bracket icon */}
                <div className="w-10 h-10 rounded-[12px] bg-[#0f0f0f] flex items-center justify-center mb-5 border border-[#222222]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="1.5" className="opacity-60">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-black text-white mb-3 uppercase tracking-tight">WORK SPACE</h3>
                <p className="text-[#52525B] text-[12px] leading-[18px]">
                  Centralized file management and collaboration platform for sports analytics teams.
                </p>
              </div>
              <button className="bg-[#0f0f0f] text-white font-bold text-[9px] uppercase py-3.5 rounded-[10px] hover:bg-[#1a1a1a] transition-colors tracking-[4px] mt-6 border border-[#222222] group-hover:border-[#2a2a2a]">
                Access Vault
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px] px-6 text-center border-t border-[#2a2a2a]/50">
        <h2 className="text-[42px] font-black tracking-tight mb-8 uppercase text-white">
          Ready to optimize?
        </h2>
        <div className="flex gap-4 justify-center">
          <Link href="/about" className="bg-[#0059FF] text-white font-black text-[12px] uppercase px-8 py-4 rounded-[6px] hover:bg-[#0048cc] hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,89,255,0.3)] transition-all duration-300 tracking-wider">
            Request Demo
          </Link>
          <Link href="/about" className="bg-transparent border border-[#333] text-white font-black text-[12px] uppercase px-8 py-4 rounded-[6px] hover:border-white hover:scale-105 transition-all duration-300 tracking-wider">
            Technical Specs
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
