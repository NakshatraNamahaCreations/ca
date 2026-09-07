import { ButtonLink } from "@/components/ui";
import { ArrowRight, Phone } from "@/components/Icons";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-black text-brand-600">404</p>
      <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
        This page could not be found
      </h1>
      <p className="muted mt-4 max-w-md text-base leading-relaxed">
        The page you were looking for does not exist or has moved. Our
        services, however, are all still here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" size="lg">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href={site.phoneHref} variant="outline" size="lg">
          <Phone className="h-4 w-4" />
          {site.phone}
        </ButtonLink>
      </div>
    </section>
  );
}
