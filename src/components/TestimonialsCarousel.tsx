"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/site";
import { cn } from "./ui";

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // 2px of slack: browsers report fractional scroll positions.
    const max = el.scrollWidth - el.clientWidth;
    setScrollable(max > 2);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    update();
    el.addEventListener("scroll", update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector("li");
    // Card width plus the flex gap, so one click moves exactly one card.
    const step = first ? first.getBoundingClientRect().width + 20 : 340;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(38rem 22rem at 0% 0%, rgba(82,185,70,.06), transparent 60%), radial-gradient(34rem 20rem at 100% 100%, rgba(24,88,136,.06), transparent 62%)",
        }}
      />

      <div className="relative">
        <div className="container-x">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
                Clients feedback
              </span>
              <h2 className="mt-4 text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink sm:text-[2.75rem]">
                Why businesses vouch for us&hellip;
              </h2>
            </div>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!scrollable || atStart}
                aria-label="Previous testimonials"
                className={arrowClass(!scrollable || atStart)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!scrollable || atEnd}
                aria-label="Next testimonials"
                className={arrowClass(!scrollable || atEnd)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-bleed track: cards run to the right edge like the reference */}
        <ul
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] sm:px-[max(1.25rem,calc((100vw-76rem)/2+1.25rem))]"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="w-[19.5rem] shrink-0 snap-start sm:w-[22rem]"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-[#e6edf3] bg-white p-7 shadow-[0_1px_2px_rgba(12,22,32,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_18px_40px_-12px_rgba(24,88,136,.22)]">
                <span
                  aria-hidden
                  className="font-serif text-6xl leading-[0.6] text-leaf-500/45"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-6 flex-1">
                  <p className="line-clamp-6 text-[15px] leading-relaxed text-ink-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-7">
                  <div className="text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
                    {t.role}
                  </div>
                  <div className="mt-1.5 text-lg font-bold text-ink">
                    {t.name}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function arrowClass(disabled: boolean) {
  return cn(
    "grid h-12 w-12 place-items-center rounded-full border transition-all duration-200",
    disabled
      ? "cursor-not-allowed border-[#e6edf3] text-[#c3d0da]"
      : "border-brand-200 text-brand-600 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-600 hover:text-white hover:shadow-lg hover:shadow-brand-600/25"
  );
}
