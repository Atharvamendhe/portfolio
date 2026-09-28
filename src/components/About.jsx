import { ABOUT_PARAGRAPHS, EDUCATION, STATS } from '../data/portfolio';
import Reveal from './Reveal';

/* Turns "foo **bar** baz" into ["foo ", <strong>bar</strong>, " baz"] */
function renderRich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-num">01</span>
          <h2 className="sec-title">About <em>me</em></h2>
          <span className="sec-line" />
        </Reveal>

        <div className="about-grid">
          <div className="about-text">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.06}>
                {renderRich(p)}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="edu-card">
              <div className="edu-label">Education</div>
              <div className="edu-degree">{EDUCATION.degree}</div>
              <div className="edu-school">{EDUCATION.school}</div>
              <div className="edu-loc">{EDUCATION.location}</div>
              <div className="course-chips">
                {EDUCATION.coursework.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}