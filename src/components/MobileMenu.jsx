import { NAV_LINKS, PROFILE } from '../data/portfolio';

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      {NAV_LINKS.map(({ id, label }, i) => (
        <a key={id} href={`#${id}`} onClick={onClose}>
          <span>{label}</span>
          <span className="num">{String(i + 1).padStart(2, '0')}</span>
        </a>
      ))}
      <a href="#contact" onClick={onClose}>
        <span>Contact</span>
        <span className="num">06</span>
      </a>

      <div className="mm-footer">
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}