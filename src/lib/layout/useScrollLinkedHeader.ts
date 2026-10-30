"use client";

import { useEffect, useRef, type RefObject } from "react";
import { usePathname } from "next/navigation";

/**
 * Hides the header with the scroll, then keeps it offscreen until the page
 * moves back up. The transform is written in the scroll listener so the bar
 * does not sit still for a frame and then jump.
 */
export function useScrollLinkedHeader(): RefObject<HTMLElement | null> {
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let height = 0;
    let offset = 0;
    let lastY = window.scrollY;
    let hidden = false;

    const paint = () => {
      if (motion.matches) {
        header.style.transform = "";
        header.style.pointerEvents = "";
        header.removeAttribute("inert");
        hidden = false;
        return;
      }

      header.style.transform = `translate3d(0, ${offset}px, 0)`;
      const fullyHidden = height > 0 && offset <= -height + 0.5;
      if (fullyHidden === hidden) {
        return;
      }
      hidden = fullyHidden;
      header.style.pointerEvents = fullyHidden ? "none" : "";
      if (fullyHidden) {
        header.setAttribute("inert", "");
      } else {
        header.removeAttribute("inert");
      }
    };

    const measure = () => {
      height = header.getBoundingClientRect().height;
      if (height > 0) {
        offset = Math.min(0, Math.max(-height, offset));
      }
      paint();
    };

    const placeForScroll = (scrollY: number) => {
      lastY = scrollY;
      offset = scrollY <= 0 || height <= 0 ? 0 : -Math.min(height, scrollY);
      paint();
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastY;
      lastY = scrollY;

      if (motion.matches || header.hasAttribute("data-nav-open")) {
        offset = 0;
        paint();
        return;
      }

      if (scrollY <= 0) {
        offset = 0;
      } else if (height > 0) {
        offset = Math.min(0, Math.max(-height, offset - delta));
      } else {
        offset = Math.min(0, offset - delta);
      }
      paint();
    };

    const onMotionChange = () => {
      if (motion.matches) {
        offset = 0;
      }
      paint();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(header);
    const menuObserver = new MutationObserver(() => {
      if (!header.hasAttribute("data-nav-open")) {
        return;
      }
      offset = 0;
      lastY = window.scrollY;
      paint();
    });
    menuObserver.observe(header, { attributes: true, attributeFilter: ["data-nav-open"] });
    measure();
    placeForScroll(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });
    motion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      menuObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      motion.removeEventListener("change", onMotionChange);
    };
  }, [pathname]);

  return headerRef;
}
