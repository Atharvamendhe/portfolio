import { ACHIEVEMENTS } from '../data/portfolio';
import Reveal from './Reveal';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-num">05</span>
          <h2 className="sec-title">Beyond the <em>classroom</em></h2>
          <span className="sec-line" />
        </Reveal>

        <div className="ach-list">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal className="ach" key={a.title}>
              <span className="ach-num">{String(i + 1).padStart(2, '0')}</span>
              <p className="ach-text">
                <strong>{a.title}</strong> — {a.text}
              </p>
              <span className="ach-badge">{a.badge}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}