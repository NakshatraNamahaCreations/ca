"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "./ui";

/**
 * Full-bleed looping background video.
 *
 * The file is heavy, so it is attached only after mount (first paint never
 * waits on it) and skipped entirely when the visitor has reduced-motion on or
 * the browser reports a metered / save-data connection. In those cases the
 * gradient underneath stands in for it.
 */
export default function VideoBackground({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const slow =
      conn?.saveData === true ||
      (conn?.effectiveType ? /^(slow-)?2g$/.test(conn.effectiveType) : false);

    if (!reduced && !slow) setEnabled(true);
  }, []);

  // Pause while the hero is off-screen so the video costs nothing further down.
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (playing) void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [enabled, playing]);

  function toggle() {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play().catch(() => {});
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Always-present base so there is never a blank frame */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0c1e3c 0%, #1d3c6b 48%, #365688 100%)",
        }}
      />

      {enabled ? (
        <video
          ref={ref}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
          preload="auto"
          aria-hidden
          tabIndex={-1}
          // Never gate visibility on a "ready" flag: browsers deprioritise
          // loading media that is fully transparent, which deadlocks (invisible
          // so it never loads, never loads so it stays invisible). An unloaded
          // video paints nothing, so the gradient behind it shows through until
          // the first frame arrives.
          style={{ filter: "brightness(1.18) contrast(1.02) saturate(1.05)" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {/* Legibility scrim: dark at the left where the copy sits, lighter right */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(6,13,28,.76) 0%, rgba(6,13,28,.58) 34%, rgba(6,13,28,.30) 62%, rgba(6,13,28,.22) 100%)",
        }}
      />
      {/* Brand tint + bottom fade into the page */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(48rem 30rem at 84% 12%, rgba(29,60,107,.18), transparent 62%), linear-gradient(to bottom, transparent 82%, rgba(6,13,28,.42) 100%)",
        }}
      />

      {enabled ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="absolute bottom-5 left-5 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <rect x="7" y="5" width="3.5" height="14" rx="1" />
              <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          )}
        </button>
      ) : null}
    </div>
  );
}
