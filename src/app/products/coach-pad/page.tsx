'use client';

import Link from 'next/link';
import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Timeline from '@/components/ui/Timeline';
import Badge from '@/components/ui/Badge';
import VideoPlayer from '@/components/ui/VideoDemo';
import { media } from '@/lib/cloudinary';

export default function CoachPad() {
  return (
    <main className="min-h-screen">
      <TopNav />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-[100px] md:pt-[164px] pb-[64px] md:pb-[128px] px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-accent-blue/10 rounded-full blur-orb animate-pulse-slow"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center stagger-children px-4">
          <Badge variant="status-blue">STRATEGIC OVERLAY</Badge>
          <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[128px] font-black italic leading-[100%] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-6.4px] text-text-primary my-4 md:my-6 drop-shadow-[0_0_20px_rgba(226,226,226,0.3)]">
            COACH PAD
          </h1>
          <p className="max-w-[800px] mx-auto text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-secondary leading-[24px] md:leading-[32px] lg:leading-[36px] mb-6 md:mb-8 px-2">
            Strategic overlay for tactical adjustments and game planning with AI-powered insights
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link href="/about">
              <GradientButton variant="primary">REQUEST DEMO</GradientButton>
            </Link>
            <GradientButton variant="secondary">DOCUMENTATION</GradientButton>
          </div>
        </div>
      </section>

      {/* Features Grid - Clean Bento Layout */}
      <AnimatedSection>
        <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6">
          <div className="max-w-[1280px] mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Tactical Drawing Tools */}
              <div className="md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-6 md:p-8 hover:border-[#333] transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-[10px] bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 group-hover:scale-110 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  </svg>
                </div>
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-black text-white mb-3 group-hover:text-accent-blue-light transition-colors">Tactical Drawing Tools</h3>
                <p className="text-[#A1A1AA] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                  Create custom plays and formations with intuitive drag-and-drop interface
                </p>
              </div>

              {/* Exercise Creation */}
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-6 hover:border-[#333] transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-[10px] bg-accent-green/10 flex items-center justify-center mb-4 group-hover:bg-accent-green/20 group-hover:scale-110 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-black text-white mb-4 group-hover:text-accent-green transition-colors">Exercise Creation</h3>
                <div className="space-y-3">
                  <div className="h-2 bg-[#27272A] rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent-green rounded-full group-hover:animate-pulse"></div>
                  </div>
                  <div className="h-2 bg-[#27272A] rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent-blue rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <div className="h-2 bg-[#27272A] rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-accent-purple rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Session Planning */}
              <div className="md:col-span-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-6 md:p-8 hover:border-[#333] transition-colors duration-300 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 rounded-[10px] bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/20 group-hover:scale-110 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[20px] md:text-[24px] font-black text-white mb-2 group-hover:text-accent-blue-light transition-colors">Session Planning</h3>
                    <p className="text-[#A1A1AA] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                      Schedule and organize training sessions with automated resource allocation
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Stacked Cards */}
              <div className="space-y-4">
                {/* Play Library */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-6 hover:border-[#333] hover:-translate-y-1 transition-all duration-300 group">
                  <h4 className="text-[16px] font-black text-white mb-2 group-hover:text-accent-blue-light transition-colors">Play Library</h4>
                  <p className="text-[#52525B] text-[14px]">500+ pre-built formations</p>
                </div>

                {/* Team Sync */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] p-6 hover:border-[#333] hover:-translate-y-1 transition-all duration-300 group">
                  <h4 className="text-[16px] font-black text-white mb-2 group-hover:text-accent-green transition-colors">Team Sync</h4>
                  <p className="text-[#52525B] text-[14px]">Real-time collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Feature Highlight */}
      <AnimatedSection>
        <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6 bg-[#0E0E0E]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start md:items-center">
              <div>
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black italic text-text-primary mb-4 md:mb-6">
                  The Universal Tactical Command
                </h2>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'AI-powered play suggestions',
                    'Real-time formation adjustments',
                    'Video integration with timestamp sync',
                    'Export to PDF and share with team'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="w-5 h-5 rounded-[4px] bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:bg-accent-blue/20 transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-text-secondary text-[14px] md:text-[16px] group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-[#1a1a1a] rounded-[16px] border border-[#2a2a2a] p-6 md:p-8 overflow-hidden group hover:border-[#333] transition-colors duration-500">
                {/* Tactical Board Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-64 border-2 border-[#2a2a2a] rounded-[8px] relative">
                    {/* Center line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#2a2a2a]"></div>
                    {/* Center circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#2a2a2a] rounded-full"></div>
                    {/* Player dots */}
                    {[
                      { top: '15%', left: '50%' },
                      { top: '35%', left: '25%' },
                      { top: '35%', left: '75%' },
                      { top: '60%', left: '50%' },
                      { top: '75%', left: '30%' },
                      { top: '75%', left: '70%' },
                    ].map((pos, i) => (
                      <div
                        key={i}
                        className={`absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 ${i < 3 ? 'bg-accent-blue' : 'bg-accent-green'} animate-pulse`}
                        style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                    {/* Arrow */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 256">
                      <path d="M96 100 L96 60 L130 40" stroke="#0059FF" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                      <path d="M130 40 L120 50 M130 40 L125 30" stroke="#0059FF" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection>
        <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-black italic text-text-primary mb-8 md:mb-12 text-center uppercase tracking-wide px-2">
              Full-Spectrum Performance
            </h2>
            <div className="stagger-children">
              <Timeline
                variant="horizontal"
                className="hidden md:block"
                steps={[
                  { title: 'BEFORE MATCH', description: 'Game planning and strategy', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                  { title: 'BEFORE TRAINING', description: 'Session design', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/></svg> },
                  { title: 'AFTER MATCH', description: 'Performance review', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
                  { title: 'AFTER TRAINING', description: 'Analysis and iteration', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> }
                ]}
              />
              <Timeline
                variant="vertical"
                className="md:hidden"
                steps={[
                  { title: 'BEFORE MATCH', description: 'Game planning and strategy', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                  { title: 'BEFORE TRAINING', description: 'Session design', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/></svg> },
                  { title: 'AFTER MATCH', description: 'Performance review', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
                  { title: 'AFTER TRAINING', description: 'Analysis and iteration', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> }
                ]}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Demo Section */}
      <AnimatedSection>
        <section className="py-[64px] md:py-[80px] lg:py-[100px] px-4 md:px-6 bg-[#0E0E0E]">
          <div className="max-w-[1280px] mx-auto">
            <span className="text-accent-green text-[9px] md:text-[11px] font-black uppercase tracking-[3px] md:tracking-[4px] block mb-2 md:mb-3 text-center">
              DEMO
            </span>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-black italic text-text-primary mb-6 md:mb-10 text-center uppercase tracking-wide px-2">
              SEE IT IN ACTION
            </h2>
            <VideoPlayer videoSrc={media.coachPadVideo} poster={media.coachThumb} className="max-w-[1000px] mx-auto" />
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={200}>
        <section className="py-[64px] md:py-[96px] lg:py-[128px] px-4 md:px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative bg-gradient-to-r from-accent-blue to-accent-blue-dark rounded-[24px] md:rounded-[32px] p-8 sm:p-12 md:p-16 text-center overflow-hidden group hover:scale-[1.01] transition-transform duration-700">
              {/* Animated orbs */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/10 rounded-full blur-orb animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-accent-green/10 rounded-full blur-orb animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

              <div className="relative z-10 stagger-children">
                <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black text-white mb-6 md:mb-8 px-2">START PLANNING SMARTER</h2>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                  <Link href="/about">
                    <GradientButton variant="white">REQUEST DEMO</GradientButton>
                  </Link>
                  <Link href="/about">
                    <button className="bg-transparent border-2 border-white text-white font-black text-[14px] uppercase px-6 py-3 rounded-[4px] hover:bg-white/10 transition-colors">
                      VIEW FEATURES
                    </button>
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
