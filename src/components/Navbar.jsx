import { NAV_LINKS, PROFILE } from '../data/portfolio';
import useScrollSpy from '../hooks/useScrollSpy';

const ids = NAV_LINKS.map((l) => l.id);

export default function Navbar({ scrolled, onToggleMenu, menuOpen }) {
  const active = useScrollSpy(ids);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-dot" />
          {PROFILE.name}
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a href="#contact" className="nav-cta">
            <span className="live" />
            Let's talk
          </a>
          <button
            className={`menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={onToggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}