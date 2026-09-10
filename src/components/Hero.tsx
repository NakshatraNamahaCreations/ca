import Image from "next/image";
import banner from "@/../public/media/banner.jpg";
import { areas, site, stats } from "@/data/site";
import { ButtonLink } from "./ui";
import { ArrowRight, Check, MapPin, Phone, Shield } from "./Icons";

export default function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-[34rem] items-center overflow-hidden sm:-mt-24 lg:min-h-[40rem]">
      {/* Banner photograph */}
      <Image
        src={banner}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="-z-30 object-cover object-[78%_50%]"
      />

      {/* Navy scrim: heavy at the left so the copy always has contrast */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,22,59,.96) 0%, rgba(0,22,59,.94) 30%, rgba(0,22,59,.78) 48%, rgba(0,22,59,.34) 64%, rgba(0,22,59,0) 78%)",
        }}
      />




      <div className="container-x relative w-full pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="animate-fade-up max-w-3xl text-white">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Shield className="h-4 w-4 text-white/80" />
            <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">
              {site.tagline}
            </span>
          </div>

          <h1 className="mt-7 text-[2.6rem] leading-[1.06] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.9rem]">
            Income Tax and GST
            <span className="mt-1 block text-white">filings made simple</span>
          </h1>

          {/* Short company information */}
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-white/75">
            {site.name} is a chartered accountancy and consulting firm based in
            Thane, serving businesses across the Mumbai region. We handle income
            tax and GST filings, statutory compliance, legal drafting and Virtual
            CFO support &mdash; with fixed scope, clear process and on-time
            delivery.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-white/80" />
              {areas.join(" · ")}
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>{site.hours}</span>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-xl">
            {[
              "Income tax & GST filing",
              "Virtual CFO support",
              "Statutory compliance",
              "Legal drafting",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm font-medium text-white/90"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-brand-700">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={site.phoneHref} variant="white" size="lg">
              <Phone className="h-4 w-4" />
              Book a consultation
            </ButtonLink>
            <ButtonLink
              href="/#services"
              size="lg"
              className="border border-white/25 bg-white/10 text-white shadow-none backdrop-blur-md hover:bg-white/20"
            >
              View services
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 text-white/80" />
            Call: {site.phone}
          </a>
        </div>

        {/* Stats strip */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 px-5 py-6 text-center">
              <dt className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-[11px] tracking-wide text-white/60 uppercase">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
