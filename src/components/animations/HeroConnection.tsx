import { useEffect, useRef } from 'react';

export function HeroConnection() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#050814]">
      {/* Generated Tech Background */}
      <img
        src="/workspace_bg_no_mug.png"
        alt="Premium Coding Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-70"
      />

      {/* Dark Vignette Overlay for Depth and Text Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050814_100%)] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/40 via-transparent to-[#050814] pointer-events-none" />
    </div>
  );
}
