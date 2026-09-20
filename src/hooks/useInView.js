import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px',
    resetOnExit = true
  } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (resetOnExit) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, resetOnExit]);

  return [ref, isInView];
}
export default useInView;
