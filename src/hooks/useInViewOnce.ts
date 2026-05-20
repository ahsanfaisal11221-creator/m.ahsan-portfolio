import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  return { ref, inView };
}
