import { useEffect, useState } from 'react';

export default function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset;
      let current = '';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}