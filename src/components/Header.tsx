"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { ButtonLink, cn } from "./ui";
import Logo from "./Logo";
import { Close, Menu, Phone } from "./Icons";

// Routes whose hero is a dark full-bleed banner: the header floats on top of it
// in white until the visitor scrolls past.
const OVERLAY_ROUTES = ["/"];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overlay = OVERLAY_ROUTES.includes(pathname) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  // "/" only matches itself; every other item also matches its sub-pages, so a
  // service detail page keeps "Our Services" highlighted.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  overlay
                    ? active
                      ? "bg-white/15 text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "bg-[var(--bg-2)] text-brand-600"
                      : "muted hover:text-brand-600"
                )}
              >
                {item.label}
              </Link>
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

          {/* Dials rather than opening a page */}
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-[var(--bg-2)]",
                isActive(item.href) && "bg-[var(--bg-2)] text-brand-600"
              )}
            >
              {item.label}
            </Link>
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
