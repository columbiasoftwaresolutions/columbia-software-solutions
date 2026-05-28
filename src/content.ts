/**
 * Single source of truth for editable site copy.
 * Touch this file to update names, links, and microcopy without
 * digging into components.
 */

export const WAITLIST_URL = "https://forms.gle/29V5X5qWiGPV71WHA";
export const CLIENT_EMAIL = "cusoftwaresolutions@gmail.com";

/** Gmail compose URL — works in any browser without a system mail handler. */
export const CONTACT_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CLIENT_EMAIL,
)}`;

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Advisors", href: "#advisors" },
    { label: "Join", href: "#join" },
    { label: "For Clients", href: "#for-clients" },
  ],
};

export const hero = {
  eyebrow: null,
  headline: "Free software for NYC.",
  subhead:
    "Columbia Software Solutions: free software for nonprofits and small businesses. We scope, build, and ship in 1–2 months. Built and run by Columbia students. Started in NYC, Spring 2026.",
  primaryCta: { label: "Join the waitlist", href: WAITLIST_URL },
  ghostCta: { label: "Work with us", href: CONTACT_URL },
};

export type Advisor = {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
  /** Path under /public, e.g. "/advisors/kevin.jpg". Null = use initials placeholder. */
  image?: string | null;
};

export const advisors: Advisor[] = [
  {
    name: "Kevin Zhang",
    role: "Partner at Bain Capital Ventures",
    bio: "Co-founder of Columbia in Tech.",
    imageAlt: "Kevin Zhang headshot",
    image: "/headshots/1725656181053.jpeg",
  },
  {
    name: "Gary Lin",
    role: "SWE at OpenAI",
    bio: "Previously founder of Explo.",
    imageAlt: "Gary Lin headshot",
    image: "/headshots/1670107191155.jpeg",
  },
  {
    name: "Hadley Callaway",
    role: "Chief of Staff at Sazabi (YC P26)",
    bio: "Previously Software Engineer at Doppel, Brex, and Microsoft.",
    imageAlt: "Hadley Callaway headshot",
    image: "/headshots/1753048604662.jpeg",
  },
];

export type CaseStudy = {
  /** Stable id used for in-page anchors (e.g. "refettorio"). */
  id: string;
  clientName: string;
  tagline: string;
  description: string;
  /** "shipped" = past project with results; "in-progress" = currently building. */
  status: "shipped" | "in-progress";
  /** [lat, lng] for the hero map marker. */
  coords: [number, number];
  stats?: { value: string; label: string }[];
  stack?: string[];
  press?: { label: string; href: string };
  /** Free-form credit line (e.g. "Originally built by ..."). */
  attribution?: string;
  /** Client website. Shown on in-progress cards in place of stats/stack. */
  url?: string;
  imageAlt: string;
  /** Optional image path under /public, e.g. "/projects/refettorio.jpg". */
  image?: string | null;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "refettorio",
    status: "shipped",
    coords: [40.8089, -73.9482],
    clientName: "Refettorio Harlem",
    tagline: "Community kitchen — Harlem, NYC",
    description:
      "WhatsApp logging bot and offline-capable tablet check-in app for a Harlem community kitchen. Replaces manual paper tracking with structured data pipelines writing to a shared Google Sheets backend.",
    stats: [
      { value: "700+", label: "guests per week" },
      { value: "−5s", label: "per customer" },
      { value: "3", label: "data streams unified" },
    ],
    stack: [
      "Node.js",
      "Express",
      "Twilio API",
      "React",
      "Google Sheets API",
      "IndexedDB",
      "Railway",
    ],
    press: {
      label: "Refettorio Harlem in The New York Times",
      href: "https://www.nytimes.com/2026/01/22/nyregion/refettorio-harlem-nyc-free-food.html",
    },
    imageAlt: "Refettorio Harlem check-in tablet UI",
    image: "/projects/refettorio.png",
  },
  {
    id: "swipe-market",
    status: "shipped",
    coords: [40.8075, -73.9626],
    clientName: "Columbia Swipe Market",
    tagline: "Campus — Morningside Heights",
    description:
      "The only marketplace for Columbia students to buy, sell, and donate meal swipes. Originally built by Owen Terry & Caroline Smyth in April 2025; transferred to Columbia Software Solutions for ongoing development and maintenance.",
    stats: [
      { value: "$7,000+", label: "in meal swipes traded" },
      { value: "100+", label: "transactions in 2 weeks of launch" },
      { value: "Only", label: "platform of its kind at Columbia" },
    ],
    stack: ["Flask", "PostgreSQL", "Google OAuth", "Gmail API", "Render"],
    attribution: "Originally built by Owen Terry & Caroline Smyth",
    imageAlt: "Columbia Swipe Market product UI",
    image: "/projects/swipe-market.png",
  },
  {
    id: "icatalyst",
    status: "in-progress",
    coords: [38.9286, -77.2169], // 7925 Jones Branch Dr, McLean, VA
    clientName: "iCatalyst, Inc.",
    tagline: "AI / ML / NLP — McLean, VA",
    description:
      "AI/ML/NLP/RPA technology firm serving federal and commercial clients since 2007. Engagement in progress — scope details after launch.",
    url: "https://www.icatalystinc.com",
    imageAlt: "iCatalyst engagement — coming soon",
    image: null,
  },
  {
    id: "santas-knights",
    status: "in-progress",
    coords: [40.8175, -73.9528], // Manhattanville Community Center, 530 W 133rd St
    clientName: "Santa's Knights",
    tagline: "Community nonprofit — Harlem, NYC",
    description:
      "Harlem nonprofit providing free martial arts, fitness, and community activities, plus a Letters to Santa gifting program. Engagement in progress — scope details after launch.",
    url: "https://www.santasknights.org/",
    imageAlt: "Santa's Knights engagement — coming soon",
    image: null,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
  image?: string | null;
};

export const team: TeamMember[] = [
  {
    name: "Ethan Zhang",
    role: "Founder",
    bio: "Columbia CS '28.",
    imageAlt: "Ethan Zhang headshot",
    image: "/headshots/1729533250251.jpeg",
  },
  {
    name: "Kushaan Vardhan",
    role: "Co-founder",
    bio: "Columbia CS '28.",
    imageAlt: "Kushaan Vardhan headshot",
    image: "/headshots/1682802197159.jpeg",
  },
  {
    name: "Siddharth Rout",
    role: "Founding Team",
    bio: "Columbia CS '29.",
    imageAlt: "Siddharth Rout headshot",
    image: "/headshots/1767549913519.jpeg",
  },
  {
    name: "Toffy Prakittiphoom",
    role: "Founding Team",
    bio: "Columbia SD '28.",
    imageAlt: "Toffy Prakittiphoom headshot",
    image: "/headshots/1695960659223.jpeg",
  },
];

export const ctas = {
  final: {
    headline: "Build with us.",
    subhead: "Fall 2026 cohort opens this summer.",
    cta: { label: "Join the waitlist", href: WAITLIST_URL },
  },
};
