"use client";

import { useEffect, useRef, useState } from "react";

export function CountUpCard({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
          setCount(value);
          return;
        }

        const start = performance.now();
        const duration = 900;
        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          setCount(Math.round(progress * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-lg border border-white/12 bg-white/[.06] p-6 shadow-2xl shadow-black/20">
      <strong className="block text-5xl font-black tracking-normal text-white">{count}</strong>
      <span className="mt-3 block text-sm leading-6 text-gray-300">{label}</span>
    </div>
  );
}
