"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { ButtonLink, cn } from "./ui";
import Logo from "./Logo";
import { Phone } from "./Icons";

// Routes whose hero is a dark full-bleed media banner: the header floats on top
// of it in white until the visitor scrolls past.
const OVERLAY_ROUTES = ["/"];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const overlay = OVERLAY_ROUTES.includes(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={cn(
              "hidden items-center gap-2 text-sm font-medium transition-colors sm:flex",
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

      </div>

    </header>
  );
}
