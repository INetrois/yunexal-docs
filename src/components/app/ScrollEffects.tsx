"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".yun-scroll-section"));
    const allRevealItems = Array.from(document.querySelectorAll<HTMLElement>(".yun-scroll-reveal"));

    const revealItems = new Set<HTMLElement>();

    sections.forEach((section) => {
      const items = Array.from(section.querySelectorAll<HTMLElement>(".yun-scroll-reveal")).sort(
        (a, b) => {
          const aTop = a.offsetTop;
          const bTop = b.offsetTop;

          if (Math.abs(aTop - bTop) > 12) return aTop - bTop;
          return a.offsetLeft - b.offsetLeft;
        },
      );

      items.forEach((item, index) => {
        item.style.setProperty("--yun-delay", `${Math.min(index, 7) * 90}ms`);
        revealItems.add(item);
      });
    });

    allRevealItems.forEach((item) => {
      if (!revealItems.has(item)) {
        item.style.setProperty("--yun-delay", "0ms");
        revealItems.add(item);
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("yun-in-view");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.16,
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("yun-in-view");
          sectionObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "-10% 0px -26% 0px",
        threshold: 0.18,
      },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
