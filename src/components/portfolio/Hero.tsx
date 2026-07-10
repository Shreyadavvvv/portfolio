import { useRef } from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from '@/components/portfolio/ParticleCanvas';

export default function Hero() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
  };

  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive particle network */}
      <ParticleCanvas mouseRef={mouseRef} />

      {/* Content — above canvas */}
      <div className="container mx-auto pt-20 relative" style={{ zIndex: 10 }}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-accent font-mono text-sm mb-5 tracking-wider"
          >
            Hi, my name is
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-medium text-foreground leading-tight mb-4 tracking-tight"
          >
            Shreya Yadav.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl font-medium text-muted-foreground leading-tight mb-8 tracking-tight"
          >
            I build precise, resilient systems.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            I'm an AI & Full Stack Developer passionate about building products that combine thoughtful design with practical intelligence. From AI-powered applications to modern web platforms, I enjoy solving real-world problems through clean engineering and intuitive user experiences.
            I care about the space between elements, the efficiency of
            queries, and the quiet confidence of code that simply works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              data-testid="link-examine-work"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-accent px-8 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Projects
            </a>
            <a
              href="#contact"
              data-testid="link-get-in-touch"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-border hover:border-accent px-8 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(var(--background)))',
          zIndex: 5,
        }}
      />
    </section>
  );
}
