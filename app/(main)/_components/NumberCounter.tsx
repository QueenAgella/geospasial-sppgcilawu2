"use client";
import { useEffect, useRef, useState } from "react";

interface TargetCountProps {
  target: number;
  duration?: number;
}

export default function NumberCounter({
  target,
  duration = 1000,
}: TargetCountProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(element);
  }, [started]);

  useEffect(() => {
    if (!started || !ref.current) return;

    let start = 0;
    const step = target / (duration / 16);

    function update() {
      start += step;
      if (start < target) {
        ref.current!.textContent = Math.floor(start).toString();
        requestAnimationFrame(update);
      } else {
        ref.current!.textContent = target.toString();
      }
    }

    update();
  }, [started, target, duration]);

  return <span ref={ref}>0</span>;
}
