import { HERO_META, PROFILE, ROLES } from '../data/portfolio';
import Reveal from './Reveal';
import useRotatingText from '../hooks/useRotatingText';

export default function Hero() {
  const roleIndex = useRotatingText(ROLES.length);

  return (
    <section className="hero">
      <div className="wrap">
        <Reveal className="eyebrow" as="div">
          <span className="dot" />
          Open to internships &amp; collaborations
        </Reveal>

        <Reveal delay={0.08} as="h1" className="hero-name">
          {PROFILE.firstName}
          <span className="serif">{PROFILE.lastName}</span>
        </Reveal>

        <Reveal delay={0.12} className="hero-role">
          <span className="arrow">→</span>
          <span className="role-rotator">
            {ROLES.map((role, i) => (
              <span key={role} className={i === roleIndex ? 'on' : ''}>
                {role}
              </span>
            ))}
          </span>
        </Reveal>

        <div className="hero-grid">
          <Reveal delay={0.18}>
            <p className="hero-lede">
              <strong>Computer Science undergraduate</strong> building clean, functional products —
              from an AI interview coach that evaluates answers in real time to nutrition trackers
              and neural networks. I care about the details that make software feel effortless.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View my work
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="hero-meta">
            {HERO_META.map(({ label, value, status }) => (
              <div className="meta-row" key={label}>
                <span>{label}</span>
                <span className={status ? 'status' : ''}>{value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}