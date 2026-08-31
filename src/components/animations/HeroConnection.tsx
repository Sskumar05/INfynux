import { useEffect, useRef } from 'react';

export function HeroConnection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#06060c]">
      
      {/* Base Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 dark:opacity-40 grayscale transition-opacity duration-700"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      
      {/* Blend Overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060c]/40 via-transparent to-[#06060c] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06060c]/60 via-transparent to-[#06060c]/60 pointer-events-none" />

    </div>
  );
}
