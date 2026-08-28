import { useEffect, useRef } from "react";

export function TechAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // High-visibility config parameters
    const PARTICLE_COUNT = 300; // Large density pool for a dense galaxy cluster
    const GOLD_RGB = "224, 184, 64"; // #E0B840 (Your exact company gold)
    
    interface Star {
      angle: number;
      distance: number;
      speed: number;
      size: number;
      alpha: number;
    }

    const stars: Star[] = [];
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    // Build spiral galaxy trajectory clusters
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      stars.push({
        angle: Math.random() * Math.PI * 2,
        // Distribute nodes outward exponentially to create a bright cosmic center
        distance: Math.pow(Math.random(), 2) * (Math.min(width, height) * 0.45) + 10,
        speed: 0.005 + Math.random() * 0.015,
        size: Math.random() * 2 + 0.8,
        alpha: 0.3 + Math.random() * 0.7,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Galaxy Render Engine Loop
    const draw = () => {
      // Clear with absolute black to fix the opacity bug
      ctx.fillStyle = "#111111";
      ctx.fillRect(0, 0, width, height);

      // Smoothly drift the galaxy core coordinate matrix toward the user's cursor
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw Core Nebula Energy Glow Field
      const coreGlow = ctx.createRadialGradient(mouse.x, mouse.y, 2, mouse.x, mouse.y, 120);
      coreGlow.addColorStop(0, `rgba(${GOLD_RGB}, 0.18)`);
      coreGlow.addColorStop(1, "rgba(17, 17, 17, 0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
      ctx.fill();

      // 2. Compute and position spiral coordinates
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Increment rotation mechanics
        star.angle += star.speed;

        // Calculate positions relative to the moving galaxy core
        const posX = mouse.x + Math.cos(star.angle) * star.distance;
        const posY = mouse.y + Math.sin(star.angle) * star.distance;

        // Draw crisp nodes
        ctx.beginPath();
        ctx.arc(posX, posY, star.size, 0, Math.PI * 2);
        
        // Stagger colors between stark technical white and brilliant corporate gold
        if (i % 4 === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        } else {
          ctx.fillStyle = `rgba(${GOLD_RGB}, ${star.alpha})`;
        }
        ctx.fill();

        // 3. Connect close coordinates with subtle geometric web strings
        if (i < stars.length - 1 && star.distance < 100) {
          const nextStar = stars[i + 1];
          const nX = mouse.x + Math.cos(nextStar.angle) * nextStar.distance;
          const nY = mouse.y + Math.sin(nextStar.angle) * nextStar.distance;
          
          const dx = posX - nX;
          const dy = posY - nY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 40) {
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(nX, nY);
            ctx.strokeStyle = `rgba(${GOLD_RGB}, ${(1 - dist / 40) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[480px] bg-[#111111] border border-[#111111] rounded-none overflow-hidden group shadow-2xl cursor-pointer">
      
      {/* Structural Data Watermarks */}
      <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] text-[#FBF9F4]/40 tracking-widest pointer-events-none select-none z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#E0B840] rounded-full animate-ping"></span>
          AI_NEBULA_CLUSTER // CORE_UP
        </div>
        <div>SYS_SPEED // CONSTANT</div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-[#FBF9F4]/40 tracking-widest pointer-events-none select-none z-20">
        <div>PROPRIETARY_ENGINE // REG_UK</div>
        <div>MATRIX_FIELD // 300_NODES</div>
      </div>

      {/* Main Canvas Component Layer */}
      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
    </div>
  );
}
