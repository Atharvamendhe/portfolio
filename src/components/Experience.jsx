import { EXPERIENCE } from '../data/portfolio';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Where I've <em>worked</em></h2>
          <span className="sec-line" />
        </Reveal>

        {EXPERIENCE.map((job) => (
          <Reveal className="exp-item" key={job.role}>
            <div className="exp-when">
              <span className="exp-tag">{job.tag}</span>
              <span>{job.when}</span>
            </div>
            <div>
              <h3 className="exp-role">{job.role}</h3>
              <p className="exp-org">{job.org}</p>
              <ul className="exp-list">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}