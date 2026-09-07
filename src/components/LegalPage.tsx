import PageHero from "./PageHero";
import { Section } from "./ui";

export default function LegalPage({
  title,
  updated,
  sections,
  path,
}: {
  title: string;
  updated: string;
  path: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        body={`Last updated ${updated}.`}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: path, label: title },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold tracking-tight">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="muted mt-3 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
