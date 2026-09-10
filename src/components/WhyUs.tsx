import { whyUs } from "@/data/site";
import { Check } from "./Icons";

/**
 * "Why clients engage us", taken from the firm profile. Set on navy so it
 * carries weight between the lighter sections either side of it.
 */
export default function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #00163b 0%, #0c1e3c 50%, #1d3c6b 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(46rem 26rem at 85% 8%, rgba(195,154,69,.18), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 11px)",
        }}
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent-400 uppercase">
            Why clients engage us
          </span>
          <h2 className="mt-4 text-3xl leading-[1.14] font-bold tracking-tight text-balance text-white sm:text-[2.6rem]">
            Depth where it counts
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-300 via-accent-400 to-accent-200"
          />
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <li key={item.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/12">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500 text-ink">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base leading-snug font-bold text-balance text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
