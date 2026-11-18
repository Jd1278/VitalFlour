"use client";

import { useEffect, useRef } from "react";

/** Progressive enhancement: content stays visible without JavaScript. */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (!preference.matches) element.animate([
          { transform: "translateY(24px)", opacity: 0.5 }, { transform: "translateY(0)", opacity: 1 },
        ], { duration: 700, easing: "cubic-bezier(.2,.7,.2,1)" });
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    const stop = () => { if (preference.matches) element.getAnimations().forEach(animation => animation.cancel()); };
    preference.addEventListener("change", stop);
    observer.observe(element);
    return () => { observer.disconnect(); element.getAnimations().forEach(animation => animation.cancel()); preference.removeEventListener("change", stop); };
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

export function Parallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const allowed = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!allowed.matches) { element.style.transform = ""; return; }
      const rect = element.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = Math.max(-16, Math.min(16, (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.035));
      element.style.transform = `translate3d(0, ${offset}px, 0) scale(1.035)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    allowed.addEventListener("change", schedule);
    schedule();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); allowed.removeEventListener("change", schedule); element.style.transform = ""; };
  }, []);
  return <div className="parallax-media" ref={ref}>{children}</div>;
}
