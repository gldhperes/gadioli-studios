import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
        ...options,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}

export function useRevealStagger<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: IntersectionObserverInit = {}
) {
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    const elements = refs.current.filter(
      (el): el is T => el !== null
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as T;
            const idx = elements.indexOf(target);

            setTimeout(() => {
              target.classList.add("in-view");
            }, idx * 60);

            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [count, options]);

  const setRef =
    (idx: number) =>
    (el: T | null) => {
      refs.current[idx] = el;
    };

  return setRef;
}