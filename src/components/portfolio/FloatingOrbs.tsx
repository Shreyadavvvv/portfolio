import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface OrbConfig {
  size: number;
  lightColor: string;
  darkColor: string;
  top: string;
  left: string;
  xKeys: number[];
  yKeys: number[];
  duration: number;
  delay: number;
  blur: number;
}

const orbs: OrbConfig[] = [
  {
    size: 700,
    lightColor: 'hsl(207 55% 78% / 0.28)',   // Baby Blue Eyes
    darkColor:  'hsl(207 41% 60% / 0.07)',
    top: '-10%', left: '55%',
    xKeys: [0, 80, -60, 40, 0],
    yKeys: [0, 120, 60, -40, 0],
    duration: 28, delay: 0, blur: 100,
  },
  {
    size: 550,
    lightColor: 'hsl(205 35% 84% / 0.40)',   // Light Blue Grey
    darkColor:  'hsl(220 44% 20% / 0.18)',
    top: '30%', left: '-12%',
    xKeys: [0, -50, 90, -30, 0],
    yKeys: [0, -80, 50, 100, 0],
    duration: 22, delay: 3, blur: 90,
  },
  {
    size: 480,
    lightColor: 'hsl(207 41% 70% / 0.22)',   // Cool Cerulean
    darkColor:  'hsl(207 55% 78% / 0.05)',
    top: '60%', left: '65%',
    xKeys: [0, -70, 30, 60, 0],
    yKeys: [0, 50, -90, 20, 0],
    duration: 32, delay: 6, blur: 80,
  },
  {
    size: 400,
    lightColor: 'hsl(220 44% 20% / 0.06)',   // Midnight Blue — darkens the bottom edge
    darkColor:  'hsl(207 41% 65% / 0.06)',
    top: '80%', left: '20%',
    xKeys: [0, 60, -40, 20, 0],
    yKeys: [0, -60, 30, -50, 0],
    duration: 25, delay: 9, blur: 70,
  },
  {
    size: 350,
    lightColor: 'hsl(207 55% 78% / 0.30)',
    darkColor:  'hsl(205 35% 84% / 0.04)',
    top: '15%', left: '30%',
    xKeys: [0, 40, -50, 20, 0],
    yKeys: [0, -30, 70, -40, 0],
    duration: 20, delay: 12, blur: 75,
  },
];

export default function FloatingOrbs() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ x: orb.xKeys, y: orb.yKeys }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: isDark ? orb.darkColor : orb.lightColor,
            filter: `blur(${orb.blur}px)`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}
