'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoSrc: string;
  poster?: string;
  title?: string;
  thumbnail?: string;
  className?: string;
}

export default function VideoPlayer({
  videoSrc,
  poster,
  title = "Watch Demo",
  className = ''
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={className}>
      <div className="relative">
        <div className="relative bg-[#1a1a1a] rounded-[8px] overflow-hidden border-2 border-[#0059FF]/40 box-glow-blue group">
          {!isPlaying ? (
            <div
              className="relative w-full cursor-pointer"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setIsPlaying(true)}
            >
              {poster ? (
                <Image
                  src={poster}
                  alt="Video Thumbnail"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  priority
                  quality={100}
                />
              ) : (
                <div className="w-full h-full bg-bg-card-alt flex items-center justify-center">
                  <span className="text-text-muted text-lg">{title}</span>
                </div>
              )}
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
              src={videoSrc}
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
