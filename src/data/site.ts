/**
 * Absolute site URL used for canonical links, Open Graph, sitemap and robots.
 *
 * `??` alone is not enough: an env var that is *defined but empty* (which is
 * what a blank value in the Vercel dashboard produces) passes through `??` and
 * then crashes `new URL("")` at build time. So validate before trusting it, and
 * fall back to the deployment URL Vercel injects automatically.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    process.env.NEXT_PUBLIC_VERCEL_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;

    const withScheme = /^https?:\/\//.test(value) ? value : `https://${value}`;
    try {
      return new URL(withScheme).origin;
    } catch {
      // Ignore a malformed value and try the next candidate.
    }
  }

  return "https://www.radiantcompanyservices.com";
}

export const site = {
  name: "Apex Radiant Consultants LLP",
  shortName: "Radiant",
  legalName: "Apex Radiant Consultants LLP",
  tagline: "Chartered Accountants · Tax Consultants · Virtual CFO",
  headline: "Income Tax and GST filings made simple",
  description:
    "Thane-headquartered firm of Chartered Accountants with a specialist Goods and Services Tax practice, complete tax and compliance outsourcing, and a Virtual CFO capability. Serving listed and mid-market businesses across Mumbai.",
  phone: "+91 84548 16913",
  phoneHref: "tel:+918454816913",
  whatsapp: "918454816913",
  email: "radiantservicescompany@gmail.com",
  address:
    "Lodha Signet, 321, Kolshet Road, Thane (West), Mumbai 400 607",
  hours: "Monday - Saturday, 10 AM - 7 PM",
  url: resolveSiteUrl(),
  // Social links are not shown anywhere on the site at the moment. Add real
  // profile URLs here and render them if you want icons back in the footer.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
} as const;

/**
 * Header menu. These are in-page anchors, not page links: everything the menu
 * points at is a section of the home page, so visitors never navigate away.
 * The standalone pages still exist and are reachable by URL.
 */
/**
 * Header and footer menu. Each item opens its own page.
 */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const workingHours = [
  { day: "Monday", time: "10 am - 7 pm" },
  { day: "Tuesday", time: "10 am - 7 pm" },
  { day: "Wednesday", time: "10 am - 7 pm" },
  { day: "Thursday", time: "10 am - 7 pm" },
  { day: "Friday", time: "10 am - 7 pm" },
  { day: "Saturday", time: "10 am - 7 pm" },
  { day: "Sunday", time: "Closed" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  /** Card background in the services carousel (public/media/services/<slug>.jpg) */
  image: string;
  description: string;
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "ca-audit-services",
    title: "CA & Audit Services",
    short:
      "Audit support, certification, and CA guidance to keep your accounts accurate and compliant.",
    icon: "audit",
    image: "/media/services/ca-audit-services.jpg",
    description:
      "Statutory, internal and tax audit support delivered by qualified chartered accountants. We work through your books, surface the issues early, and give you a clean, defensible set of accounts rather than a list of problems at year end.",
    includes: [
      "Statutory and internal audit support",
      "Tax audit under the Income Tax Act",
      "CA certifications and net-worth certificates",
      "Books of accounts review and finalisation",
      "Management letters with actionable findings",
    ],
    faqs: [
      {
        q: "Do you handle audits for small companies and LLPs?",
        a: "Yes. We support entities of every size, from LLPs and private limited companies crossing audit thresholds for the first time to established businesses with ongoing statutory audit requirements.",
      },
      {
        q: "Can you work with our existing accountant?",
        a: "We regularly work alongside in-house accounting teams and external bookkeepers, taking over only the audit, certification and compliance layer.",
      },
    ],
  },
  {
    slug: "business-financial-consultancy",
    title: "Business & Financial Consultancy",
    short:
      "Practical business advice, financial structuring, and decision support to drive sustainable growth.",
    icon: "consult",
    image: "/media/services/business-financial-consultancy.jpg",
    description:
      "Advice grounded in your actual numbers. We help you structure the business correctly, understand what the financials are telling you, and make decisions on funding, pricing and expansion with evidence instead of instinct.",
    includes: [
      "Business structuring and entity selection",
      "Financial health and profitability review",
      "Funding readiness and lender documentation",
      "Pricing, costing and margin analysis",
      "Decision support for expansion and investment",
    ],
    faqs: [
      {
        q: "Is consultancy a one-time engagement or ongoing?",
        a: "Both models are available. Many clients start with a one-time structuring or review engagement and move to a retainer once the recommendations are in motion.",
      },
      {
        q: "Do you work with startups that are pre-revenue?",
        a: "Yes. Early structuring decisions on entity type, founder agreements and compliance are far cheaper to get right at the start than to correct later.",
      },
    ],
  },
  {
    slug: "virtual-cfo-services",
    title: "Virtual CFO Services",
    short:
      "Strategic financial control, cashflow planning, budgeting, and growth guidance - on demand.",
    icon: "cfo",
    image: "/media/services/virtual-cfo-services.jpg",
    description:
      "A Virtual CFO provides expert financial strategy, planning and oversight without the cost of a full-time executive. We manage cash flow, analyse performance, reduce risk, and help you make data-driven decisions as you scale.",
    includes: [
      "Monthly MIS and management reporting",
      "Cashflow forecasting and working capital control",
      "Budgeting, variance analysis and cost control",
      "Vendor payment and receivables discipline",
      "Board and investor reporting support",
    ],
    faqs: [
      {
        q: "How can a Virtual CFO benefit my business?",
        a: "A Virtual CFO provides expert financial strategy, planning, and oversight without the cost of a full-time executive. We help you manage cash flow, analyze performance, reduce risks, and make data-driven decisions to scale your business effectively.",
      },
      {
        q: "How much involvement does it require from our team?",
        a: "Typically a short monthly review once reporting is set up. The first two months need more input while we build the reporting structure around your business.",
      },
    ],
  },
  {
    slug: "strategic-business-planning",
    title: "Strategic Business Planning",
    short:
      "Clear, goal-driven planning with forecasting and execution roadmaps to scale with confidence.",
    icon: "planning",
    image: "/media/services/strategic-business-planning.jpg",
    description:
      "A plan you can actually execute against. We translate your goals into financial forecasts, milestones and a roadmap with owners and dates, then track performance against it so the plan stays live rather than filed away.",
    includes: [
      "Goal setting with financial modelling",
      "Three to five year forecasting scenarios",
      "Execution roadmap with milestones",
      "KPI definition and performance tracking",
      "Quarterly review and course correction",
    ],
    faqs: [
      {
        q: "What do we get at the end of a planning engagement?",
        a: "A financial model, a written roadmap with milestones and owners, and a KPI dashboard you can maintain month to month.",
      },
      {
        q: "How long does the planning process take?",
        a: "Typically three to five weeks depending on how ready your historical financial data is.",
      },
    ],
  },
  {
    slug: "statutory-compliance-management",
    title: "Statutory Compliance Management",
    short:
      "Annual filings, registers, director compliances, and regulatory checklists handled end-to-end.",
    icon: "compliance",
    image: "/media/services/statutory-compliance-management.jpg",
    description:
      "We build a compliance calendar around your entity and then run it, so filings happen on schedule instead of in a scramble. Documentation is maintained audit-ready throughout the year, not reconstructed at the deadline.",
    includes: [
      "ROC annual filings and event-based forms",
      "Statutory registers and minute books",
      "Director KYC and related compliances",
      "Compliance calendar with deadline tracking",
      "Audit-ready documentation maintenance",
    ],
    faqs: [
      {
        q: "What happens if we have missed past filings?",
        a: "We first assess the backlog and the exposure, then file the pending returns and put a calendar in place so it does not recur. Additional fees and penalties are quantified upfront.",
      },
      {
        q: "Do you handle both company and LLP compliances?",
        a: "Yes, for private limited companies, LLPs and partnership firms.",
      },
    ],
  },
  {
    slug: "income-tax-filing-planning",
    title: "Income Tax Filing & Tax Planning",
    short:
      "Accurate income tax filing with smart tax planning for individuals, startups, and businesses.",
    icon: "tax",
    image: "/media/services/income-tax-filing-planning.jpg",
    description:
      "Accurate, on-time income tax filing supported by planning that happens before the year ends rather than after. We identify eligible deductions and exemptions, and structure income so the saving is legitimate and documented.",
    includes: [
      "ITR filing for individuals, firms and companies",
      "Advance tax computation and scheduling",
      "Deduction and exemption optimisation",
      "TDS reconciliation and Form 26AS matching",
      "Notice handling and departmental responses",
    ],
    faqs: [
      {
        q: "Can Radiant help with both personal and business tax filings?",
        a: "Yes, we handle both. Whether you're an individual professional or a business entity, we ensure accurate, timely filing of your income tax and GST returns, while helping you take advantage of eligible deductions and exemptions.",
      },
      {
        q: "We received an income tax notice. Can you help?",
        a: "Yes. We review the notice, assess what triggered it, and draft and file the response along with the supporting documentation.",
      },
    ],
  },
  {
    slug: "gst-registration-filing",
    title: "GST Registration & Return Filing",
    short:
      "Registration, monthly and annual returns, reconciliation, and notice support under GST.",
    icon: "gst",
    image: "/media/services/gst-registration-filing.jpg",
    description:
      "Stay compliant with accurate and timely GST filings. We handle registration, monthly and annual returns, and input credit reconciliation so mismatches are caught before the department raises them.",
    includes: [
      "GST registration and amendments",
      "GSTR-1, GSTR-3B and annual return filing",
      "Input tax credit reconciliation with 2B",
      "E-way bill and e-invoicing guidance",
      "GST notice and departmental response support",
    ],
    faqs: [
      {
        q: "How do we avoid GST notices?",
        a: "Most notices come from mismatches between returns and input credit claims. We reconcile every month against GSTR-2B so differences are corrected in the same cycle rather than at year end.",
      },
      {
        q: "Do you handle GST registration for new businesses?",
        a: "Yes, including advising whether registration is required in the first place and in which states.",
      },
    ],
  },
  {
    slug: "legal-drafting-documentation",
    title: "Legal Drafting & Documentation",
    short:
      "Contracts, MOUs, partnership deeds, shareholder agreements, notices and documentation.",
    icon: "legal",
    image: "/media/services/legal-drafting-documentation.jpg",
    description:
      "Our legal drafting services cover contracts, MOUs, partnership deeds, shareholder agreements and more. We ensure your documents are legally sound, customised to your needs, and compliant with applicable laws.",
    includes: [
      "Contracts, service and vendor agreements",
      "MOUs and letters of intent",
      "Partnership deeds and LLP agreements",
      "Shareholder and founder agreements",
      "Legal notices and replies",
    ],
    faqs: [
      {
        q: "Do you offer support with legal documentation and drafting?",
        a: "Absolutely. Our legal drafting services cover contracts, MOUs, partnership deeds, shareholder agreements, and more. We ensure your documents are legally sound, customized to your needs, and compliant with applicable laws.",
      },
      {
        q: "Can you review a contract we have already received?",
        a: "Yes. We review third-party drafts, flag the clauses that carry risk, and suggest specific redrafted language.",
      },
    ],
  },
  {
    slug: "company-llp-formation",
    title: "Company & LLP Formation",
    short:
      "End-to-end incorporation for private limited companies, LLPs and partnership firms.",
    icon: "formation",
    image: "/media/services/company-llp-formation.jpg",
    description:
      "Incorporation handled end to end, from name approval to your first set of statutory registers. We also advise on which structure actually suits your plans, because changing it later is expensive.",
    includes: [
      "Entity structure advisory",
      "Name approval and DSC / DIN procurement",
      "Incorporation filing and certificate",
      "PAN, TAN and GST registration",
      "Post-incorporation compliance setup",
    ],
    faqs: [
      {
        q: "Private limited or LLP - which should we choose?",
        a: "It depends on whether you plan to raise external funding, how many owners there are, and your compliance appetite. We walk through the trade-offs before you commit.",
      },
      {
        q: "How long does incorporation take?",
        a: "Usually seven to fifteen working days once documentation is complete, subject to MCA processing times.",
      },
    ],
  },
];

/** Options shown in the "Service Needed" dropdown on the consultation form. */
export const consultationServices = [
  "Income Tax",
  "GST Filing",
  "Legal Drafting",
  "Statutory Compliance",
  "Virtual CFO",
  "Business Consulting",
];


/**
 * Leadership, from the 2026 firm profile. Sanjay Johary is taken from the
 * "Meet The Founders" slide supplied alongside it.
 */
export const leadership = [
  {
    name: "CA Sanjay Johary",
    role: "Founder",
    tenure: "30+ years",
    background:
      "Senior finance leadership across large manufacturing and corporate environments.",
    focus: [
      "FP&A, budgeting, forecasting and management reporting",
      "Cost optimization, working capital and treasury management",
      "End-to-end accounting, taxation and statutory compliance",
      "Process improvement, shared services and GST transition",
    ],
  },
  {
    name: "CA Rajkamal Singh",
    role: "Founding Partner · Signing Partner, Tax & Regulatory",
    tenure: "18+ years",
    background:
      "KPMG, Deloitte and PwC; senior finance and taxation roles with listed corporates including Birla Corporation, ACC and the Adani Group.",
    focus: [
      "GST classification and valuation disputes",
      "Litigation from show-cause notice through appellate stage",
      "Multi-State GSTR-9 and 9C engagements",
      "Transfer pricing, permanent establishment and cross-border structuring",
    ],
  },
  {
    name: "CA Amandeep Kaur",
    role: "Partner · Virtual CFO, Reporting & Assurance",
    tenure: "11+ years",
    background:
      "Senior FP&A roles with Remsons Industries and Godrej & Boyce; audit practice with Kalyaniwalla & Mistry LLP.",
    focus: [
      "Budgeting, forecasting and variance analysis",
      "Board and management reporting packs",
      "Profitability by product, SKU and channel",
      "Working capital, inventory and receivables control",
    ],
  },
];

/** "Why clients engage us", from the firm profile. */
export const whyUs = [
  {
    title: "GST depth, not GST coverage",
    body: "GST is the specialisation rather than one line on a list. The same team that files the return prepares the reconciliation and drafts the reply, so the position taken in the return is the position defended in the notice.",
  },
  {
    title: "One provider, whole function",
    body: "Indirect tax, direct tax, transfer pricing, payroll and corporate compliance run off a single set of books and a single calendar, which removes the reconciliation differences that arise when these are split across providers.",
  },
  {
    title: "Large-firm method",
    body: "Engagement letters, structured working papers, documented sampling and materiality, and Partner review on every deliverable.",
  },
  {
    title: "Mid-market economics",
    body: "Delivered without the cost structure, layered staffing or turnaround lag of a large network firm.",
  },
  {
    title: "Litigation orientation",
    body: "Advisory positions are taken with the notice in mind, so documentation is built at the advisory stage rather than reconstructed at assessment.",
  },
  {
    title: "Continuity",
    body: "Direct Partner access and a stable delivery team, so context is not lost between assignments.",
  },
];

export const stats = [
  { value: "18+", label: "Years of partner experience" },
  { value: "17", label: "Professionals across three verticals" },
  { value: "290+", label: "Assessees in a filing season" },
  { value: "₹2,500 cr+", label: "Client turnover served" },
];

export const aboutIntro =
  "At Elite Radiant Consultants LLP, we are more than just a virtual CFO firm - we are your partners in business growth. With a foundation built on Professionalism, Trust, and Quality, we deliver financial expertise and strategic insights that drive sustainable success, all at a competitive cost.";

export const highlights = [
  "Accurate income tax and GST filing with timely compliance",
  "Legal drafting support for contracts, notices, and documentation",
  "Virtual CFO and strategic planning for better decisions",
  "Statutory compliance guidance to reduce risk and penalties",
];

export const assurances = [
  "Fast response and clear guidance",
  "Compliance-first approach",
  "Trusted CA and consultants",
];

export const steps = [
  {
    icon: "consult",
    label: "Discovery",
    title: "Understand your business",
    body: "We begin by understanding your business structure, industry, financial position, and compliance requirements. Our experts conduct a detailed consultation to identify challenges and growth opportunities.",
  },
  {
    icon: "planning",
    label: "Strategy",
    title: "Strategic planning & advisory",
    body: "Based on our assessment, we design a customized financial and compliance strategy. Whether it is tax optimization, GST planning, legal drafting, or Virtual CFO services, we create a clear roadmap aligned with your goals.",
  },
  {
    icon: "audit",
    label: "Execution",
    title: "Execution with precision",
    body: "Our team handles filings, documentation, compliance management, and financial structuring with accuracy and transparency. We ensure timely submissions and adherence to all statutory regulations.",
  },
  {
    icon: "cfo",
    label: "Oversight",
    title: "Continuous support & growth monitoring",
    body: "We do not stop at compliance. We continuously monitor your financial health, regulatory updates, and business performance to provide proactive guidance that supports sustainable growth.",
  },
];

/** Representative experience, from the firm profile. Client identities are not
 *  disclosed; named references are available on request. */
export const caseStudies = [
  {
    slug: "listed-manufacturer-gst",
    image: "/media/cases/cashflow-stability.jpg",
    category: "Goods & Services Tax",
    client: "Listed manufacturer, PAN-India",
    title: "GST annual return across ~20 State registrations",
    body: "GSTR-9 and GSTR-9C preparation and review, books-to-returns turnover reconciliation, ITC bifurcation into inputs, input services and capital goods, fixed asset register review, and e-invoice and e-way bill reconciliation, delivered against statutory deadlines.",
    outcomes: ["GSTR-9 & 9C", "Multi-State", "Turnover above ₹2,500 cr"],
  },
  {
    slug: "cross-border-services-group",
    image: "/media/cases/roc-compliance.jpg",
    category: "International Tax",
    client: "Cross-border services group, India and Europe",
    title: "Permanent establishment and transfer pricing strategy",
    body: "Permanent establishment and DAPE exposure assessment, inter-company charging model, treaty analysis and transfer pricing documentation strategy.",
    outcomes: ["PE & DAPE review", "Treaty analysis", "TP documentation"],
  },
  {
    slug: "owner-managed-filing-season",
    image: "/media/cases/simplified-filings.jpg",
    category: "Direct Tax",
    client: "Owner-managed businesses and professionals",
    title: "Filing season for 290+ assessees",
    body: "Return filing season handled for a client base exceeding 290 assessees, together with faceless appellate representation before NFAC.",
    outcomes: ["290+ assessees", "Faceless appeals", "NFAC representation"],
  },
];

export const testimonials = [
  {
    name: "Shivam Singh",
    role: "Virtual CFO",
    quote:
      "Radiant Company Services has been a game-changer for our business. Their Virtual CFO support and strategic planning helped us streamline finances and make smarter decisions. Highly recommend for any growing company!",
  },
  {
    name: "Kanika",
    role: "Compliance & GST",
    quote:
      "Their team made the entire compliance process stress-free. From legal drafting to GST filings, they were fast, accurate, and always available for queries. Great service all around!",
  },
  {
    name: "Saheb Narang",
    role: "Financial Planning",
    quote:
      "Radiant Company Services offers more than just accounting - they truly understand business. Their insights into financial planning and compliance have saved us time and money. A trustworthy partner!",
  },
];

export const areas = ["Thane", "Mumbai", "Navi Mumbai"];

export const faqs = [
  {
    q: "What does Apex Radiant specialize in?",
    a: "We offer end-to-end financial and legal solutions for businesses of all sizes. Our core services include chartered accountancy, business consultancy, income tax and GST filings, legal drafting, Virtual CFO support, strategic planning, and statutory compliance management.",
  },
  {
    q: "How can a Virtual CFO benefit my business?",
    a: "A Virtual CFO provides expert financial strategy, planning, and oversight without the cost of a full-time executive. We help you manage cash flow, analyze performance, reduce risks, and make data-driven decisions to scale your business effectively.",
  },
  {
    q: "Can Radiant help with both personal and business tax filings?",
    a: "Yes, we handle both. Whether you're an individual professional or a business entity, we ensure accurate, timely filing of your income tax and GST returns, while helping you take advantage of eligible deductions and exemptions.",
  },
  {
    q: "Do you offer support with legal documentation and drafting?",
    a: "Absolutely. Our legal drafting services cover contracts, MOUs, partnership deeds, shareholder agreements, and more. We ensure your documents are legally sound, customized to your needs, and compliant with applicable laws.",
  },
  {
    q: "Is Apex Radiant right for startups or only established businesses?",
    a: "We work with both. Whether you're launching a startup or managing an established company, we provide scalable services from initial business setup and registration to complex financial strategy and compliance support.",
  },
];

export const posts = [
  {
    slug: "strategic-planning-business-compliance",
    date: "24 Feb, 2026",
    author: "Radiant Team",
    tag: "Strategic Planning",
    readTime: "5 min read",
    image: "/media/blog/strategic-planning.jpg",
    title: "Why strategic planning matters for business compliance",
    excerpt:
      "Compliance is cheapest when it is planned for. A look at how forecasting and a compliance calendar remove the year-end scramble.",
  },
  {
    slug: "gst-filing-tips-avoid-notices",
    date: "18 Feb, 2026",
    author: "Radiant Team",
    tag: "GST",
    readTime: "4 min read",
    image: "/media/blog/gst-filing.jpg",
    title: "GST filing tips to avoid notices and penalties",
    excerpt:
      "Most GST notices trace back to a handful of avoidable mismatches. Here is what to reconcile every month, and when.",
  },
  {
    slug: "virtual-cfo-financial-clarity",
    date: "10 Feb, 2026",
    author: "Radiant Team",
    tag: "Virtual CFO",
    readTime: "6 min read",
    image: "/media/blog/virtual-cfo.jpg",
    title: "When a Virtual CFO can transform your financial clarity",
    excerpt:
      "The signals that tell you it is time to bring in financial leadership, and what changes in the first ninety days.",
  },
];

export const gallery = [
  { title: "Client advisory session", category: "Consultation" },
  { title: "Audit and documentation review", category: "CA & Audit" },
  { title: "Monthly MIS walkthrough", category: "Virtual CFO" },
  { title: "GST reconciliation desk", category: "Tax & GST" },
  { title: "Compliance calendar planning", category: "Compliance" },
  { title: "Legal drafting review", category: "Legal" },
  { title: "Team strategy meeting", category: "Team" },
  { title: "Office at Lodha Signet, Thane", category: "Workplace" },
];
