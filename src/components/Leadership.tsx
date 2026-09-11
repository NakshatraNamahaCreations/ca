import Image, { type StaticImageData } from "next/image";
import sanjayJohary from "@/../public/media/team/sanjay-johary.jpg";
import rajkamalSingh from "@/../public/media/team/rajkamal-singh.jpg";
import amandeepKaur from "@/../public/media/team/amandeep-kaur.jpg";
import { leadership } from "@/data/site";
import { Check } from "./Icons";

/**
 * Portraits are imported rather than referenced by path so Next fingerprints
 * each file by content. Replacing a photo therefore changes its URL, which
 * busts both the browser cache and Next's image optimiser - a plain
 * "/media/..." string keeps the same URL and serves the previous crop.
 */
const portraits: Record<string, StaticImageData> = {
  "/media/team/sanjay-johary.jpg": sanjayJohary,
  "/media/team/rajkamal-singh.jpg": rajkamalSingh,
  "/media/team/amandeep-kaur.jpg": amandeepKaur,
};

/**
 * "Meet the founders" - each partner led by a large portrait, with tenure, the
 * practices they came from and what they focus on beneath it.
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

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person) => {
            const photoPath = "photo" in person ? person.photo : undefined;
            const photo = photoPath ? portraits[photoPath] : undefined;

            return (
              <article
                key={person.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#ece5d9] bg-white shadow-[0_1px_2px_rgba(16,25,43,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_26px_54px_-18px_rgba(29,60,107,.34)]"
              >
                {/* Portrait leads the card */}
                <div className="relative aspect-4/5 overflow-hidden bg-brand-800">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={person.name}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center text-5xl font-bold text-white/25">
                      {person.name
                        .replace(/^CA\s+/, "")
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}

                  {/* Name and role sit on the portrait */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,22,59,.94) 0%, rgba(0,22,59,.60) 26%, rgba(0,22,59,.10) 52%, transparent 72%)",
                    }}
                  />

                  <div className="absolute right-5 bottom-5 left-5">
                    <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase ring-1 ring-white/25 backdrop-blur-sm">
                      {person.tenure}
                    </span>
                    <h3 className="mt-2.5 text-xl leading-tight font-bold text-white">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-[11px] leading-snug font-semibold tracking-[0.12em] text-accent-400 uppercase">
                      {person.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-ink-muted">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
