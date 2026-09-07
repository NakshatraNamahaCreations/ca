"use client";

import Link from "next/link";
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

  const overlay = OVERLAY_ROUTES.includes(pathname) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
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
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo onDark={overlay} />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              overlay
                ? "text-white/80 hover:text-white"
                : "muted hover:text-brand-600"
            )}
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <ButtonLink href="/contact" variant={overlay ? "white" : "primary"}>
            Book consultation
          </ButtonLink>
        </div>

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

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 lg:hidden",
          // Background and border only while open: a closed drawer would
          // otherwise paint a 1px line under the header on overlay heroes.
          open ? "max-h-[32rem] border-t bg-[var(--bg)]" : "max-h-0"
        )}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-[var(--bg-2)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <ButtonLink href="/contact" size="lg">
              Book consultation
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              {site.phone}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
