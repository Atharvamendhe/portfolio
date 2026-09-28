import { MARQUEE_ITEMS } from '../data/portfolio';

export default function Marquee() {
  // duplicated for a seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={`${item}-${i}`}>{item}</div>
        ))}
      </div>
    </div>
  );
}