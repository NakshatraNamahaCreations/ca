"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/site";
import { cn } from "./ui";
import { Star } from "./Icons";

function Chevron({
  dir,
  ...props
}: React.SVGProps<SVGSVGElement> & { dir: "left" | "right" }) {
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
      <path d={dir === "left" ? "m14.5 6-6 6 6 6" : "m9.5 6 6 6-6 6"} />
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
            "radial-gradient(38rem 22rem at 0% 0%, rgba(195,154,69,.07), transparent 60%), radial-gradient(34rem 20rem at 100% 100%, rgba(29,60,107,.06), transparent 62%)",
        }}
      />

      <div className="relative">
        <div className="container-x">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
                Clients feedback
              </span>
              <h2 className="mt-4 text-3xl leading-[1.14] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
                Why businesses vouch for us
              </h2>
              <span
                aria-hidden
                className="mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-700 via-accent-500 to-accent-300"
              />
            </div>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!scrollable || atStart}
                aria-label="Previous testimonials"
                className={arrowClass(!scrollable || atStart)}
              >
                <Chevron dir="left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!scrollable || atEnd}
                aria-label="Next testimonials"
                className={arrowClass(!scrollable || atEnd)}
              >
                <Chevron dir="right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-bleed track so cards run to the right edge */}
        <ul
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:px-[max(1.25rem,calc((100vw-76rem)/2+1.25rem))]"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="w-[19.5rem] shrink-0 snap-start sm:w-[23rem]"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-[#ece5d9] bg-white p-7 shadow-[0_14px_34px_-16px_rgba(29,60,107,.22)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_22px_46px_-16px_rgba(29,60,107,.32)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-500/12 ring-1 ring-accent-500/25">
                    <span
                      aria-hidden
                      className="mt-2 font-serif text-3xl leading-none text-accent-600"
                    >
                      &ldquo;
                    </span>
                  </span>
                  <span className="flex gap-0.5 text-accent-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                </div>

                <blockquote className="mt-6 flex-1">
                  <p className="text-[15px] leading-relaxed text-ink-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-7 border-t border-[#f2ece1] pt-5">
                  <div className="text-[11px] font-bold tracking-[0.14em] text-accent-600 uppercase">
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
      ? "cursor-not-allowed border-[#ece5d9] text-[#cbbfa9]"
      : "border-brand-200 text-brand-600 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-600 hover:text-white hover:shadow-lg hover:shadow-brand-600/25"
  );
}
