'use client';

import TopNav from '@/components/layout/TopNav';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import Image from 'next/image';
import { useState } from 'react';
import { media } from '@/lib/cloudinary';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <span className="text-[#3DE0A1] text-[11px] font-black uppercase tracking-[4px] block mb-3 text-center">
        LIVE DEMO
      </span>
      <h2 className="text-[36px] font-black text-white mb-10 text-center uppercase tracking-wide">
        SEE IT IN ACTION
      </h2>
      
      <div className="relative max-w-[1000px] mx-auto">
        <div className="relative bg-[#1a1a1a] rounded-[8px] overflow-hidden border-2 border-[#0059FF]/40 box-glow-blue group">
          {!isPlaying ? (
            // Thumbnail - shown before play
            <div
              className="relative w-full cursor-pointer"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={media.matchViewThumb}
                alt="Match View Demo Thumbnail"
                fill
                className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                priority
                quality={100}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-16 h-16 rounded-full bg-[#0059FF] flex items-center justify-center box-glow-blue-strong hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <video
              src={media.matchViewVideo}
              controls
              autoPlay
              className="relative w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function MatchView() {
  return (
    <main className="min-h-screen bg-black">
      <TopNav />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center pt-[164px] pb-[100px] px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-blue/15 rounded-full blur-orb"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h1 className="text-[120px] font-black uppercase leading-[100%] tracking-[-6px] text-white mb-4">
            MATCH VIEW
          </h1>
          <p className="text-[20px] font-medium text-accent-blue mb-3 uppercase tracking-[4px] text-glow-blue">
            MULTI-CAM AI TRACKING SYSTEM
          </p>
          <p className="max-w-[600px] mx-auto text-[16px] font-medium text-[#71717A] leading-[24px]">
            Real-time broadcast analysis with frame-accurate clipping and AI-powered event detection
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-[80px] px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Top Row - 2 Large Cards */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Annotation Tools */}
            <div className="relative h-[400px] bg-[#1a1a1a] rounded-[8px] overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/annot.png"
                alt="Annotation Tools - Video editing timeline interface"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-black text-white mb-2 uppercase tracking-wide">
                  ANNOTATION TOOLS
                </h3>
                <p className="text-[#71717A] text-[12px] leading-[18px]">
                  Dynamic vector overlays with frame-locking precision. Draw tactical paths that move with the play.
                </p>
              </div>
            </div>

            {/* AI Detection */}
            <div className="relative h-[400px] bg-[#1a1a1a] rounded-[8px] overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/ia.png"
                alt="AI Detection - Player tracking with HUD overlay"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3DE0A1" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-black text-white mb-2 uppercase tracking-wide">
                  AI DETECTION
                </h3>
                <p className="text-[#71717A] text-[12px] leading-[18px]">
                  Automated player identification and tracking. Instantly differentiate teams and individual biometrics.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row - 4 Small Cards */}
          <div className="grid grid-cols-4 gap-4">
            {/* Frame-Accurate Clipping */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 h-[280px] flex flex-col justify-between">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="1.5" className="mb-4">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <h4 className="text-[14px] font-black text-white mb-1 uppercase tracking-wide">
                  FRAME-ACCURATE CLIPPING
                </h4>
                <p className="text-[#52525B] text-[10px] uppercase tracking-wider">
                  TIMELINE PRECISION: 0.01S
                </p>
              </div>
            </div>

            {/* Action Recognition */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 h-[280px] flex flex-col justify-between">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="1.5" className="mb-4">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[14px] font-black text-white mb-3 uppercase tracking-wide">
                  ACTION RECOGNITION
                </h4>
                <div className="flex gap-2">
                  <span className="bg-[#3DE0A1]/10 text-[#3DE0A1] text-[9px] font-bold uppercase px-2 py-1 rounded-[2px] tracking-wider">
                    PASS
                  </span>
                  <span className="bg-[#3DE0A1]/10 text-[#3DE0A1] text-[9px] font-bold uppercase px-2 py-1 rounded-[2px] tracking-wider">
                    SHOT
                  </span>
                </div>
              </div>
            </div>

            {/* Tactical Visualization */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 h-[280px] flex flex-col items-center justify-center text-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0059FF" strokeWidth="1.5" className="mb-3">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              <h4 className="text-[11px] font-black text-white uppercase tracking-wider">
                TACTICAL<br />VISUALIZATION
              </h4>
            </div>

            {/* Custom Workflows */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[8px] p-5 h-[280px] flex flex-col items-center justify-center text-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="1.5" className="mb-3">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <circle cx="8" cy="6" r="2" fill="#52525B" />
                <circle cx="16" cy="12" r="2" fill="#52525B" />
                <circle cx="10" cy="18" r="2" fill="#52525B" />
              </svg>
              <h4 className="text-[11px] font-black text-white uppercase tracking-wider">
                CUSTOM<br />WORKFLOWS
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <VideoPlayer />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0E0E0E] rounded-[8px] p-12 text-center border border-[#2a2a2a]">
            <h2 className="text-[36px] font-black text-white mb-6 uppercase tracking-wide">
              ANALYZE YOUR FOOTAGE WITH ELITE PRECISION
            </h2>
            <GradientButton variant="primary">REQUEST DEMO</GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
