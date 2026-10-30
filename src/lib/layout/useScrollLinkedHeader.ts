"use client";

import { useEffect, useRef, type RefObject } from "react";
import { usePathname } from "next/navigation";

const SCROLL_TOLERANCE = 8;

/**
 * Hides the whole header once the page is scrolling down, and brings it
 * back when the page scrolls up. The motion itself is a CSS transition.
 * Tying translateY to the scroll position sliced the logo in half.
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
    let lastY = window.scrollY;
    let hidden = false;

    const setHidden = (next: boolean) => {
      if (motion.matches) {
        next = false;
      }
      if (next === hidden) {
        return;
      }
      hidden = next;
      header.classList.toggle("is-header-hidden", next);
      if (next) {
        header.setAttribute("inert", "");
      } else {
        header.removeAttribute("inert");
      }
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastY;

      if (motion.matches || header.hasAttribute("data-nav-open") || scrollY <= 4) {
        lastY = scrollY;
        setHidden(false);
        return;
      }

      if (Math.abs(delta) < SCROLL_TOLERANCE) {
        return;
      }

      lastY = scrollY;
      setHidden(delta > 0);
    };

    const showForMenu = () => {
      if (!header.hasAttribute("data-nav-open")) {
        return;
      }
      lastY = window.scrollY;
      setHidden(false);
    };

    const menuObserver = new MutationObserver(showForMenu);
    menuObserver.observe(header, {
      attributes: true,
      attributeFilter: ["data-nav-open"],
    });
    motion.addEventListener("change", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      menuObserver.disconnect();
      motion.removeEventListener("change", onScroll);
      window.removeEventListener("scroll", onScroll);
      header.classList.remove("is-header-hidden");
      header.removeAttribute("inert");
      hidden = false;
    };
  }, [pathname]);

  return headerRef;
}
