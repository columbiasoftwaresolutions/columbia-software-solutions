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
    "Columbia Software Solutions: a student consulting club building free software for NYC nonprofits and small businesses. Founded 2026. Advisors from Bain Capital Ventures, OpenAI, and Y Combinator.",
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
    bio: "Previously SWE at OpenAI. Founder of Explo.",
    imageAlt: "Kevin Zhang headshot",
    image: "/headshots/1725656181053.jpeg",
  },
  {
    name: "Gary Lin",
    role: "OpenAI",
    bio: "Building at the frontier of applied AI.",
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
  clientName: string;
  tagline: string;
  description: string;
  stats: { value: string; label: string }[];
  stack?: string[];
  press?: { label: string; href: string };
  imageAlt: string;
  /** Optional image path under /public, e.g. "/projects/refettorio.jpg". */
  image?: string | null;
};

export const caseStudies: CaseStudy[] = [
  {
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
