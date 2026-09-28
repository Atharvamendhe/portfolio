import { useRef } from 'react';
import Reveal from './Reveal';
import InterviewMock from './InterviewMock';

export default function ProjectCard({ project, delay = 0 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const topBar = (
    <div className="proj-top">
      <span className="proj-num">
        {project.num} / {project.category}
        {project.latest && <span className="badge-new">Latest</span>}
      </span>
      <a href={project.link} className="proj-link" aria-label={`View ${project.title}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
      </a>
    </div>
  );

  const body = (
    <>
      {topBar}
      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.description}</p>
      <div className="proj-stack">
        {project.stack.map((s) => <span key={s}>{s}</span>)}
      </div>
    </>
  );

  if (project.featured) {
    return (
      <Reveal
        as="article"
        className="proj featured"
        delay={delay}
      >
        <div className="proj-body" ref={ref} onMouseMove={handleMove}>
          {body}
        </div>
        <InterviewMock />
      </Reveal>
    );
  }

  return (
    <Reveal as="article" className="proj" delay={delay}>
      <div ref={ref} onMouseMove={handleMove} style={{ display: 'contents' }}>
        {body}
      </div>
    </Reveal>
  );
}