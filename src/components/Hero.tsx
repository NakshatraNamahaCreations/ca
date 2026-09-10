import { site, stats } from "@/data/site";
import { ButtonLink } from "./ui";
import VideoBackground from "./VideoBackground";
import { ArrowRight, Check, Phone, Shield } from "./Icons";

export default function Hero() {
  return (
    <section className="relative isolate -mt-20 flex min-h-[40rem] items-center overflow-hidden sm:-mt-24 lg:min-h-[46rem]">
      <VideoBackground src="/media/hero.mp4" className="-z-10" />

      <div className="container-x relative w-full pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="animate-fade-up max-w-3xl text-white">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Shield className="h-4 w-4 text-white/80" />
            <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">
              {site.tagline}
            </span>
          </div>

          <h1 className="mt-7 text-[2.75rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
            Income Tax and GST
            <span className="mt-1 block text-white">filings made simple</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-white/75">
            From accurate filings to smart planning, we handle your tax and GST
            needs with clarity and on-time compliance to reduce risk and save
            effort.
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3.5">
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

          <div className="mt-11 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="white" size="lg">
              Get a consultation
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/services"
              size="lg"
              className="border border-white/25 bg-white/10 text-white shadow-none backdrop-blur-md hover:bg-white/20"
            >
              View services
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <a
            href={site.phoneHref}
            className="mt-9 inline-flex flex-wrap items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0 text-white/80" />
            Call: {site.phone}
            <span className="text-white/40">&middot;</span>
            <span className="text-white/50">{site.hours}</span>
          </a>
        </div>

        {/* Stats strip */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-black/25 px-5 py-6 text-center">
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
