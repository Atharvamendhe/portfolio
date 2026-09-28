import { PROFILE } from '../data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal as="h2" className="contact-title">
          Let's build
          <em>something good.</em>
        </Reveal>

        <Reveal as="p" className="contact-sub" delay={0.08}>
          I'm currently open to internships, freelance work and interesting collaborations.
          The fastest way to reach me is a call or a message.
        </Reveal>

        <Reveal className="contact-actions" delay={0.14}>
          <a href={PROFILE.phoneHref} className="btn btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>
            {PROFILE.phone}
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn btn-ghost">
            Send an email
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </Reveal>

        <Reveal className="contact-bar" delay={0.2}>
          <span>© {new Date().getFullYear()} {PROFILE.name} · Greater Noida, Uttar Pradesh</span>
          <div className="socials">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}