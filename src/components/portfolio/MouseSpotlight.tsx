import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function MouseSpotlight() {
  const { theme } = useTheme();
  const spotRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);
  const isDark = theme === 'dark';

  // Smooth follow via rAF lerp instead of CSS transition for snappier feel
  const currentPos = useRef({ x: -999, y: -999 });

  const tick = useCallback(() => {
    const target = posRef.current;
    const cur = currentPos.current;
    cur.x += (target.x - cur.x) * 0.1;
    cur.y += (target.y - cur.y) * 0.1;

    if (spotRef.current) {
      spotRef.current.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
    }
    // Cursor follows the raw target directly (snappier, no lag) rather than the lerped spotlight position
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${target.x}px, ${target.y}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    // Hide the native cursor while our custom one is active
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = prevCursor;
    };
  }, [tick]);

  return (
    <>
      {/* Spotlight glow */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <div
          ref={spotRef}
          style={{
            position: 'absolute',
            top: -300,
            left: -300,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, hsl(207 90% 70% / 0.10) 0%, hsl(207 80% 60% / 0.05) 40%, transparent 70%)'
              : 'radial-gradient(circle, hsl(207 41% 60% / 0.12) 0%, hsl(207 55% 78% / 0.06) 40%, transparent 70%)',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none"
        style={{ zIndex: 9999 }}
        aria-hidden="true"
      >
        <div
          ref={cursorRef}
          style={{
            position: 'absolute',
            top: -10,
            left: -10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: isDark
              ? '1.5px solid hsl(207 90% 78% / 0.9)'
              : '1.5px solid hsl(207 55% 40% / 0.8)',
            background: isDark
              ? 'hsl(207 90% 70% / 0.15)'
              : 'hsl(207 55% 60% / 0.15)',
            willChange: 'transform',
            transition: 'width 0.15s, height 0.15s, top 0.15s, left 0.15s',
          }}
        />
      </div>
    </>
  );
}