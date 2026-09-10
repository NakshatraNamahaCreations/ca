"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { ButtonLink, cn } from "./ui";
import Logo from "./Logo";
import { Close, Menu, Phone } from "./Icons";

// Routes whose hero is a dark full-bleed media banner: the header floats on top
// of it in white until the visitor scrolls past.
const OVERLAY_ROUTES = ["/"];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  const overlay = OVERLAY_ROUTES.includes(pathname) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently in view.
  useEffect(() => {
    const targets = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      // A band just under the sticky header, so the highlight changes as a
      // section reaches the top rather than when it first peeks into view.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        overlay
          ? "border-b-0 bg-transparent"
          : scrolled
            ? "border-b bg-[var(--bg)]/85 backdrop-blur-md"
            : "border-b border-transparent bg-[var(--bg)]"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4 sm:h-24">
        <Logo onDark={overlay} />

        {/* In-page anchors only: the menu never leaves the home page */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  overlay
                    ? isActive
                      ? "bg-white/15 text-white"
                      : "text-white/75 hover:text-white"
                    : isActive
                      ? "bg-[var(--bg-2)] text-brand-600"
                      : "muted hover:text-brand-600"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={cn(
              "hidden items-center gap-2 text-sm font-medium transition-colors xl:flex",
              overlay
                ? "text-white/80 hover:text-white"
                : "muted hover:text-brand-600"
            )}
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>

          {/* Dials rather than opening the contact page */}
          <ButtonLink
            href={site.phoneHref}
            variant={overlay ? "white" : "primary"}
            className="hidden sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Book consultation
          </ButtonLink>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl transition-colors lg:hidden",
              overlay
                ? "border border-white/25 bg-white/10 text-white backdrop-blur-md"
                : "surface"
            )}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[32rem] border-t bg-[var(--bg)]" : "max-h-0"
        )}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-[var(--bg-2)]",
                active === item.id && "text-brand-600"
              )}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={site.phoneHref} size="lg" className="mt-3">
            <Phone className="h-4 w-4" />
            {site.phone}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
