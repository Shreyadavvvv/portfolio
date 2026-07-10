import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  opacity: number;
}

interface Props {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}

const COUNT = 75;
const CONNECT_DIST = 140;
const REPEL_RADIUS = 130;
const REPEL_STRENGTH = 1.2;
const MAX_SPEED = 1.6;

export default function ParticleCanvas({ mouseRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    // Colour tokens per theme — RGB triplets for rgba()
    const isDark = theme === 'dark';
    const dotRgb   = isDark ? '167,199,231'  : '28,43,72';    // Baby Blue Eyes / Midnight Blue
    const lineRgb  = isDark ? '142,177,209'  : '28,43,72';    // Cool Cerulean / Midnight Blue
    const dotAlpha = isDark ? 0.55 : 0.45;
    const lineMax  = isDark ? 0.25 : 0.30;

    // Initialise
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.8 + 0.8,
      baseOpacity: Math.random() * 0.4 + dotAlpha * 0.6,
      opacity: 0,
    }));

    let tick = 0;

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;
      const mx = mouseRef.current?.x ?? -9999;
      const my = mouseRef.current?.y ?? -9999;

      // Update
      for (const p of ps) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        const dist = Math.sqrt(d2);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) ** 2;
          p.vx += (dx / dist) * force * REPEL_STRENGTH;
          p.vy += (dy / dist) * force * REPEL_STRENGTH;
        }

        // Damping
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Pulse opacity
        p.opacity = p.baseOpacity + Math.sin(tick * 0.015 + p.x) * 0.12;
      }

      // Draw connections
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = ((1 - dist / CONNECT_DIST) ** 1.5) * lineMax;
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(${lineRgb},${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of ps) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRgb},${p.opacity.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [theme, mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
