import Image from "next/image";
import team from "@/../public/media/team.jpg";
import { ServiceIcon } from "./Icons";

/**
 * "We're the best option for your finances" - laid out to the reference: a
 * centred heading, the photograph set to the right, and three feature cards
 * clustered over its lower-left corner, reaching out past the image edge.
 */
const features = [
  {
    icon: "users",
    title: "Dedicated CA team",
    body: "Qualified chartered accountants handling your audit, certification and books.",
  },
  {
    icon: "compliance",
    title: "Filing and compliance",
    body: "Income tax and GST returns filed on time, with every deadline tracked on a calendar.",
  },
  {
    icon: "cfo",
    title: "Virtual CFO support",
    body: "Monthly reporting, cashflow forecasting and budgeting without a full-time hire.",
  },
];

export default function BestOption() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-2)] py-16 sm:py-24">
      <div className="container-x relative">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            aria-hidden
            className="mx-auto block h-0.5 w-10 rounded-full bg-brand-800"
          />
          <h2 className="mt-6 text-3xl leading-[1.16] font-bold tracking-tight text-balance text-ink sm:text-[2.6rem]">
            We&rsquo;re the best option
            <span className="block">for your finances</span>
          </h2>
        </div>

        {/* Photograph right, feature cards over its lower-left */}
        <div className="relative mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-brand-900/15 lg:ml-auto lg:w-[66%]">
            <Image
              src={team}
              alt="Our consultants working with a client"
              placeholder="blur"
              sizes="(min-width: 1024px) 44rem, 100vw"
              className="aspect-4/3 w-full object-cover sm:aspect-16/10"
            />
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:absolute lg:bottom-8 lg:left-0 lg:mt-0 lg:w-[62%]">
            {features.map((f) => (
              <li key={f.title}>
                <div className="flex h-full flex-col rounded-xl bg-white p-5 shadow-[0_14px_34px_-14px_rgba(29,60,107,.30)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-14px_rgba(29,60,107,.38)]">
                  <ServiceIcon
                    name={f.icon}
                    className="h-5 w-5 shrink-0 text-brand-700"
                  />
                  <h3 className="mt-4 text-[15px] leading-snug font-bold text-balance text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
