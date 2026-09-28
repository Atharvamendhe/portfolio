import { useEffect, useState } from 'react';
import useScrollState from './hooks/useScrollState';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  const { scrolled, progress, showTop } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="grain" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="progress" style={{ width: `${progress}%` }} />

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <BackToTop show={showTop} />
    </>
  );
}