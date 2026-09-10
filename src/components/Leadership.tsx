import { leadership } from "@/data/site";
import { Check } from "./Icons";

/**
 * "Meet the founders" - the partners from the firm profile, each with tenure,
 * the practices they came from and what they focus on.
 */
export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-white py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40rem 24rem at 100% 0%, rgba(29,60,107,.06), transparent 62%), radial-gradient(30rem 18rem at 0% 100%, rgba(195,154,69,.06), transparent 65%)",
        }}
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.18em] text-accent-600 uppercase">
            Leadership
          </span>
          <h2 className="mt-4 text-3xl leading-[1.14] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
            Meet the founders
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-brand-700 via-accent-500 to-accent-300"
          />
          <p className="mt-6 text-base leading-relaxed text-pretty text-ink-muted">
            Trained in large international accounting networks and in the finance
            functions of listed Indian corporates. Clients deal directly with a
            Partner throughout.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {leadership.map((person) => (
            <article
              key={person.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#ece5d9] bg-white shadow-[0_1px_2px_rgba(16,25,43,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_22px_46px_-16px_rgba(29,60,107,.30)]"
            >
              {/* Monogram plate - a real portrait can replace this */}
              <div className="relative flex items-center gap-4 bg-brand-800 p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(18rem 10rem at 100% 0%, rgba(195,154,69,.28), transparent 62%)",
                  }}
                />
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/12 text-lg font-bold text-white ring-1 ring-white/25 backdrop-blur-sm">
                  {person.name
                    .replace(/^CA\s+/, "")
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className="relative min-w-0">
                  <h3 className="text-lg leading-tight font-bold text-white">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-accent-400 uppercase">
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-100">
                  {person.tenure}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {person.background}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-[#f2ece1] pt-5">
                  {person.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-md bg-accent-500/12 text-accent-600 ring-1 ring-accent-500/25">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-[13px] leading-relaxed text-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
