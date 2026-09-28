import { SKILL_GROUPS } from '../data/portfolio';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Tools of the <em>trade</em></h2>
          <span className="sec-line" />
        </Reveal>

        <Reveal className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-card" key={group.label}>
              <div className="skill-head">{group.label}</div>
              <div className="skill-items">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}