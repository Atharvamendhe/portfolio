import { PROJECTS } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Selected <em>projects</em></h2>
          <span className="sec-line" />
        </Reveal>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}