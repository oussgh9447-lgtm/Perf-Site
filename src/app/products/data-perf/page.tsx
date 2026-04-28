'use client';

import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import Badge from '@/components/ui/Badge';
import Timeline from '@/components/ui/Timeline';
import VideoPlayer from '@/components/ui/VideoDemo';
import Image from 'next/image';
import { media } from '@/lib/cloudinary';

export default function DataPerf() {
  return (
    <main className="min-h-screen">
      <TopNav />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-[100px] md:pt-[164px] pb-[64px] md:pb-[128px] px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-accent-blue/15 rounded-full blur-orb"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center px-2">
          <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[128px] font-black italic uppercase leading-[100%] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-6.4px] text-text-primary mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            DATA PERF
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[24px] font-medium text-accent-blue text-glow-blue mb-3 md:mb-4 uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[4.8px]">
            INGESTION ENGINE
          </p>
          <p className="max-w-[800px] mx-auto text-[14px] sm:text-[16px] md:text-[18px] font-medium text-text-secondary leading-[20px] sm:leading-[24px] md:leading-[28px] px-2">
            Processing 100k+ packets per second with sub-50ms latency for real-time athletic performance monitoring
          </p>
        </div>
      </section>

      {/* Features Grid - Exact match to design */}
      <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Top Row - Match Data + GPS Heatmap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Match & Competition Data */}
            <div className="md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-black text-white uppercase tracking-wide">MATCH & COMPETITION DATA</h3>
                  <p className="text-[#52525B] text-[10px] sm:text-[11px] leading-[14px] sm:leading-[17px] mt-1">
                    Real-time aggregation of game-day metrics with millisecond precision.
                  </p>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-around gap-2 h-[80px] sm:h-[100px] md:h-[120px] px-2 md:px-4">
                {[40, 55, 95, 50, 45, 35, 60].map((height, i) => (
                  <div key={i} className={`w-full rounded-t-[4px] transition-all duration-500 ${i === 2 ? 'bg-accent-blue' : 'bg-[#2a2a2a]'}`} style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>

            {/* GPS & Tracking with Heatmap */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] overflow-hidden relative">
              <div className="absolute inset-0">
                <Image
                  src={media.heatmap}
                  alt="GPS Heatmap"
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-[14px] font-black text-white uppercase mb-1">GPS & TRACKING</h3>
                <p className="text-[#71717A] text-[9px] leading-[14px]">
                  Dynamic positional heatmaps and spatial intelligence.
                </p>
                <button className="mt-2 bg-accent-blue text-white text-[8px] font-bold uppercase px-2 py-1 rounded-[2px] hover:bg-accent-blue-light transition-colors">
                  LIVE MAP
                </button>
              </div>
            </div>
          </div>

          {/* Middle Row - Player Card + Head-to-Head + Team Hub */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            {/* Player Card - Sara Jenkins */}
            <div className="col-span-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-[8px] overflow-hidden flex-shrink-0 border-2 border-accent-blue">
                <Image
                  src={media.jenkis}
                  alt="Mark Jenkins"
                  width={64}
                  height={64}
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="flex-1">
                <div className="text-accent-blue text-[8px] font-bold uppercase tracking-wider mb-1">PLAYER #9</div>
                <h3 className="text-[18px] font-black text-white mb-3">Mark JENKINS</h3>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-[#52525B] text-[8px] uppercase mb-0.5">TOP SPEED</div>
                    <div className="text-[14px] font-black text-accent-blue">34.2 km/h</div>
                  </div>
                  <div className="w-[1px] h-8 bg-[#2a2a2a]"></div>
                  <div>
                    <div className="text-[#52525B] text-[8px] uppercase mb-0.5">HR MAX</div>
                    <div className="text-[14px] font-black text-accent-green">188 bpm</div>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[24px] font-black text-accent-green">94.2</div>
                <div className="text-[#52525B] text-[9px] uppercase">OVR</div>
              </div>
            </div>

            {/* Head-to-Head */}
            <div className="col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5">
              <h3 className="text-[12px] font-black text-white uppercase tracking-wider mb-4">HEAD-TO-HEAD</h3>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <div className="h-full w-[72%] bg-accent-blue rounded-full"></div>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-[#52525B]">VS</div>
                <div className="flex-1">
                  <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-accent-green rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Hub */}
            <div className="col-span-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex flex-col justify-center">
              <div className="w-8 h-8 rounded-[6px] bg-accent-blue/10 flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="text-[10px] font-black text-white uppercase mb-1">Team Hub</h4>
              <p className="text-[#52525B] text-[8px]">Collective output monitoring</p>
            </div>
          </div>

          {/* Bottom Row - AI Insights + Export */}
          <div className="grid grid-cols-2 gap-4">
            {/* AI Insights */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-[8px] bg-accent-green/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] font-black text-white uppercase mb-1">AI Insights</h4>
                <p className="text-[#52525B] text-[9px]">Predictive injury modeling</p>
              </div>
            </div>

            {/* Export */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-[8px] bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div>
                <h4 className="text-[12px] font-black text-white uppercase mb-1">Export</h4>
                <p className="text-[#52525B] text-[9px]">PDF, CSV, JSON integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-[128px] px-6 bg-[#0E0E0E]">
        <div className="max-w-[1280px] mx-auto">
          <VideoPlayer videoSrc={media.dataPerfVideo} poster={media.dataPerfThumb} className="max-w-[1088px] mx-auto" />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[128px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[48px] font-black italic text-text-primary mb-12 text-center uppercase tracking-wide">
            THE PERF-ANALYSIS EXPERIENCE
          </h2>
          <Timeline
            variant="horizontal"
            steps={[
              { title: 'BEFORE MATCH', description: 'Data collection setup', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              { title: 'AFTER MATCH', description: 'Performance analysis', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
              { title: 'BEFORE TRAINING', description: 'Session planning', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B6C4FF" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/></svg> },
              { title: 'AFTER TRAINING', description: 'Progress tracking', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> }
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[128px] px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[48px] font-black italic text-text-primary mb-8">
            READY TO TRANSFORM YOUR DATA?
          </h2>
          <GradientButton variant="primary">REQUEST DEMO</GradientButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
