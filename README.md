# Radiant Company Services

Marketing and consultation website for **Elite Radiant Consultants LLP**, a CA and
financial consultancy in Thane / Mumbai. Built with Next.js 15 (App Router),
TypeScript and Tailwind CSS v4.

Content is based on the reference site at `radiant-services.netlify.app`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint via next lint
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real
domain — it drives canonical URLs, Open Graph metadata, `sitemap.xml` and
`robots.txt`.

## Editing the content

Nearly everything a non-developer would change lives in **`src/data/site.ts`**.

| What to change                        | Where in `site.ts`      |
| ------------------------------------- | ----------------------- |
| Company name, phone, address, hours    | `site`                  |
| Header / footer menu                   | `nav`                   |
| Working hours table                    | `workingHours`          |
| Services, scope, per-service FAQs      | `services`              |
| Consultation form dropdown options     | `consultationServices`  |
| Counters (10+, 500+, 24x7)             | `stats`                 |
| About paragraph and highlight ticks    | `aboutIntro`, `highlights` |
| Four-step work process                 | `steps`                 |
| Case studies                           | `caseStudies`           |
| Testimonials                           | `testimonials`          |
| Cities served                          | `areas`                 |
| Site-wide FAQs                         | `faqs`                  |
| Blog teasers                           | `posts`                 |
| Gallery tiles                          | `gallery`               |

Adding a service to `services` automatically creates its page at
`/services/<slug>` and adds it to the services grid, the footer, the gallery
chips and the sitemap. Pick an `icon` from the registry at the bottom of
`src/components/Icons.tsx` (`audit`, `consult`, `cfo`, `planning`, `compliance`,
`tax`, `gst`, `legal`, `formation`) or add a new one there.

## Routes

| Route              | Rendering | Notes                                     |
| ------------------ | --------- | ----------------------------------------- |
| `/`                | Static    | Video banner, services, about, process, case studies, testimonials, FAQ, blog |
| `/services`        | Static    | All nine service lines                     |
| `/services/[slug]` | SSG       | One pre-rendered page per service          |
| `/about`           | Static    | Story, foundation values, process          |
| `/gallery`         | Static    | Designed tiles (see below)                 |
| `/faq`             | Static    | General + per-service questions            |
| `/contact`         | Static    | Phone, WhatsApp, hours, consultation form  |
| `/privacy`, `/terms` | Static  | Linked from the footer                     |
| `/sitemap.xml`, `/robots.txt` | Static | Generated from `site.ts`          |
| `/api/consultation`| Route     | `POST` endpoint behind the form            |

## The hero video banner

`public/media/hero.mp4` plays full-bleed behind the homepage hero, rendered by
`src/components/VideoBackground.tsx`.

- It is attached **after mount**, so first paint never waits on it.
- It is **skipped entirely** when the visitor has reduced-motion enabled or the
  browser reports save-data / 2G. A brand gradient stands in.
- It **pauses when scrolled out of view**, and a pause/play control sits in the
  bottom-left corner.
- A gradient behind the video covers the pre-load state, so there is no flash.
  Do not gate the video's visibility behind an `opacity-0` "ready" flag —
  browsers deprioritise loading fully transparent media, which deadlocks.

**The file is 17 MB**, which is heavy for a hero. Before launch, compress it —
1080p at ~2–3 Mbps, no audio track, roughly:

```bash
ffmpeg -i hero.mp4 -an -vcodec libx264 -crf 28 -preset slow -movflags +faststart hero.mp4
```

A WebM sibling and a poster frame would help further. `next.config.ts` already
serves `/media/*` with a one-year immutable cache header.

## The "Your goals, our plan" band (above the footer)

`CtaBanner` in `src/components/Sections.tsx` renders a full-bleed photo with a
floating light card, and appears above the footer on every page except Contact.

**Background image: `public/media/cta.jpg`.** To use your own photo, just
replace that one file — nothing else changes. A real photo of your Thane office,
team or a client meeting would be stronger than any stock image, and matches
what the reference site does (it uses its own classroom photography).

Two images are shipped, both safe to use commercially:

| File | Source | Notes |
| ---- | ------ | ----- |
| `media/cta.jpg` (in use) | Unsplash, `photo-1454165804606-c3d57bc86b40` | Advisory session with documents and laptops. The [Unsplash licence](https://unsplash.com/license) permits commercial use with no attribution required. Lightly desaturated to sit with the navy palette. |
| `media/cta-desk.jpg` (spare) | A frame extracted from your own `hero.mp4` | Desk with laptop, spreadsheet and calculator. Swap it in by renaming it over `cta.jpg`. |

`media/hero-poster.jpg` is also a frame from your video, used as the `poster`
for the hero banner so a real frame shows while the video loads.

Note: images are **not** taken from any other company's website. Copying a
competitor's photography would infringe their copyright, and photos of
identifiable people need a model release.

## Branding

The logo is `public/brand/logo.jpg` (also used as the favicon via
`src/app/icon.jpg`) and is rendered by `src/components/Logo.tsx`.

Because the supplied artwork is a JPEG with a white background, the logo is
always placed on a white rounded tile. That keeps it legible on the dark video
banner without needing a cut-out version. If you get a transparent PNG/SVG,
drop it in and remove the white tile from `Logo.tsx`.

The palette is defined in the `@theme` block of `src/app/globals.css`:

| Token          | Colour    | Used for                                 |
| -------------- | --------- | ---------------------------------------- |
| `brand-600`    | `#1D3C6B` | Navy — buttons, links, headings           |
| `brand-900`    | `#00163B` | Deepest navy, sampled from the wordmark   |
| `accent-500`   | `#C39A45` | Gold — eyebrows, CTAs, ticks, highlights  |
| `--bg-2`       | `#FAF4EA` | Cream — alternating section backgrounds   |

Sampled from the Apex Radiant Consultant LLP brand card (gold eagle mark, navy
wordmark, cream ground). There is no green in the palette: the ticks and
accents that were previously green now use gold.

Change those hex values to rebrand the entire site.

**The site is locked to the light (white) theme** and deliberately does *not*
follow the operating system's dark preference — a commented block in
`globals.css` shows how to restore OS dark mode if you ever want it. The
`:root[data-theme="dark"]` override still works if you add a theme toggle.

## Wiring up the consultation form

`src/app/api/consultation/route.ts` validates the submission server-side (name,
Indian mobile number, email, known service), generates a reference like
`RCS-9E8J4O7Z`, and currently just `console.log`s it.

Replace that log with your real destination — a database insert, CRM webhook,
email, or the WhatsApp Business API. Validation, error handling and the form's
success/error states are already in place.

The form handles three responses: `201` (success, shows the reference), `422`
(validation) and `400` (bad body).

## Before launch

- [ ] Compress `public/media/hero.mp4` (currently 17 MB)
- [ ] Replace the gallery tiles with real photography (`src/app/gallery/page.tsx`)
- [ ] Set the real email address in `site.email` — the reference site publishes none
- [ ] Social links are not displayed anywhere; add real URLs to `site.social` and render them if you want footer icons back
- [ ] Point `/api/consultation` at your CRM or inbox
- [ ] Add an OG image at `public/og.png` and reference it from `layout.tsx`
- [ ] Have a professional review `/privacy` and `/terms` before publishing

## Deploying

Deploys to Vercel with no configuration; set `NEXT_PUBLIC_SITE_URL` in the
project's environment variables. Any Node host works via
`npm run build && npm run start`.
