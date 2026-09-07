"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";
import { cn } from "./ui";

/**
 * Floating "back to top" control. Sits directly above the WhatsApp button in
 * the bottom-right stack and only appears once the visitor has scrolled a
 * screenful, so it never covers content near the top of the page.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    // Honour the visitor's motion preference: a long smooth scroll can be
    // disorienting for people who have asked the OS to reduce motion.
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      title="Back to top"
      // right-6 + w-12 centres it on the same axis as the w-14 button at right-5
      className={cn(
        "group fixed right-6 bottom-24 z-40 grid h-12 w-12 place-items-center rounded-full",
        "border border-[var(--line)] bg-[var(--card)] text-brand-600 shadow-lg shadow-black/10",
        "transition-all duration-300 hover:border-brand-600 hover:bg-brand-600 hover:text-white hover:shadow-brand-600/30",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
