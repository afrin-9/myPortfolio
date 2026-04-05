"use client";

import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let W: number, H: number;
    let stars: any[] = [];

    const N = 220;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

 const makeStar = () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  r: Math.random() * 1.4 + 0.3,
  alpha: Math.random() * 0.7 + 0.2,
  speed: Math.random() * 1.5 + 0.3,      // faster vertical speed (50–120)
  pulse: Math.random() * Math.PI * 2,
  pulseSpeed: Math.random() * 0.2 + 0.1, // slightly faster twinkling
  drift: (Math.random() - 0.5) * 2.0,  // faster horizontal drift
});

    const init = () => {
      stars = Array.from({ length: N }, makeStar);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        s.pulse += s.pulseSpeed;
        s.x += s.drift;
        s.y -= s.speed;

        if (s.y < -4) {
          s.y = H + 4;
          s.x = Math.random() * W;
        }

        const a = s.alpha * (0.6 + 0.4 * Math.sin(s.pulse));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,240,220,${a})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener("resize", () => {
      resize();
      init();
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}