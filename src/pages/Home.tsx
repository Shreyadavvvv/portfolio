import Nav from '@/components/portfolio/Nav';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import FloatingOrbs from '@/components/portfolio/FloatingOrbs';
import MouseSpotlight from '@/components/portfolio/MouseSpotlight';

export default function Home() {
  return (
    <div
      className="bg-background text-foreground min-h-screen font-sans selection:bg-accent/30 selection:text-accent-foreground"
      style={{ position: 'relative' }}
    >
      {/* Global animated background layers */}
      <FloatingOrbs />
      <MouseSpotlight />

      {/* Page chrome */}
      <Nav />

      {/* All content sits above the background layers */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
