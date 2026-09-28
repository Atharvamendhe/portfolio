import { useEffect, useState } from 'react';

export default function useRotatingText(length, interval = 2600) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(t);
  }, [length, interval]);

  return index;
}