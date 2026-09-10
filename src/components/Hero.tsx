import Image from "next/image";
import banner from "@/../public/media/banner.jpg";
import { site } from "@/data/site";
import { ButtonLink } from "./ui";
import { ArrowRight, Phone, Shield } from "./Icons";

export default function Hero() {
  return (
    <section className="relative isolate -mt-20 overflow-hidden bg-brand-900 sm:-mt-24">
      {/* The artwork is shown whole: width 100%, height from its own aspect
          ratio, so nothing is ever cropped off the sides. */}
      <div className="relative pt-20 sm:pt-24">
        <Image
          src={banner}
          alt=""
          aria-hidden
          priority
          sizes="100vw"
          placeholder="blur"
          className="h-auto w-full"
        />

        {/* Scrim and overlaid copy only where the banner is tall enough to
            hold them; below lg the copy sits underneath the artwork instead. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-20 bottom-0 hidden lg:block sm:top-24"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,22,59,.94) 0%, rgba(0,22,59,.90) 26%, rgba(0,22,59,.72) 44%, rgba(0,22,59,.28) 60%, rgba(0,22,59,0) 74%)",
          }}
        />

        {/* A short scrim along the very top only, so the header stays legible
            wherever the artwork happens to be bright, without dimming it. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-20 h-24 sm:top-24 sm:h-28"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,22,59,.62) 0%, rgba(0,22,59,.28) 55%, transparent 100%)",
          }}
        />

        <div className="lg:absolute lg:inset-x-0 lg:top-24 lg:bottom-0 lg:flex lg:items-center">
          <div className="container-x w-full py-12 lg:py-6">
            <div className="animate-fade-up max-w-xl text-white xl:max-w-2xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <Shield className="h-4 w-4 text-white/80" />
                <span className="text-[11px] font-semibold tracking-wide text-white/90 uppercase sm:text-xs">
                  {site.tagline}
                </span>
              </div>

              <h1 className="mt-5 text-[2rem] leading-[1.08] font-bold tracking-tight text-balance sm:text-4xl lg:mt-6 lg:text-[2.5rem] xl:text-[3.2rem]">
                Income Tax and GST
                <span className="block text-white">filings made simple</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-pretty text-white/75 lg:mt-5 xl:text-base">
                {site.name} handles income tax and GST filings, statutory
                compliance, legal drafting and Virtual CFO support for
                businesses across Thane and Mumbai.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 lg:mt-7">
                <ButtonLink href={site.phoneHref} variant="white">
                  <Phone className="h-4 w-4" />
                  Book a consultation
                </ButtonLink>
                <ButtonLink
                  href="/#services"
                  className="border border-white/25 bg-white/10 text-white shadow-none backdrop-blur-md hover:bg-white/20"
                >
                  View services
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
