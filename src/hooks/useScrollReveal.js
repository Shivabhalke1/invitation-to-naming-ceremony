import { useEffect } from "react";
export default function useScrollReveal(enabled) {
  useEffect(() => {
    if (!enabled) return;
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    
    // Immediately reveal any element in or near viewport
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.1) {
        el.classList.add("in");
      }
    });

    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px 50px 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [enabled]);
}
