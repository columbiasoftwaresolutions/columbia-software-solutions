/**
 * Single source of truth for editable site copy.
 * Touch this file to update names, links, and microcopy without
 * digging into components.
 */

export const WAITLIST_URL = "#waitlist";
export const CLIENT_EMAIL = "team@columbiasoftwaresolutions.com";

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Advisors", href: "#advisors" },
    { label: "Join", href: "#join" },
    { label: "For Clients", href: "#for-clients" },
  ],
};

export const hero = {
  eyebrow: "Columbia Software Solutions",
  headline: "Columbia CS students. Real software. Free for NYC.",
  subhead:
    "We're a student consulting club building free software for NYC nonprofits and small businesses. Founded 2025. Two clients shipped. Backed by operators from Bain Capital Ventures, OpenAI, and Harvard Business School.",
  primaryCta: { label: "Join the waitlist", href: WAITLIST_URL },
  ghostCta: { label: "Work with us", href: `mailto:${CLIENT_EMAIL}` },
};

export type Advisor = {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
};

export const advisors: Advisor[] = [
  {
    name: "Kevin Zhang",
    role: "Partner, Bain Capital Ventures",
    bio: "Early investor in DoorDash, Rec Room, and Tally. Columbia alum.",
    imageAlt: "Kevin Zhang headshot",
  },
  {
    name: "Gary Lin",
    role: "OpenAI",
    bio: "Building at the frontier of applied AI.",
    imageAlt: "Gary Lin headshot",
  },
  {
    name: "Hadley Callaway",
    role: "Incoming HBS",
    bio: "Previously SWE at Brex and Doppel.",
    imageAlt: "Hadley Callaway headshot",
  },
];

export type CaseStudy = {
  clientName: string;
  quote: string;
  attribution: string;
  stats: { value: string; label: string }[];
  imageAlt: string;
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    clientName: "Client Name #1",
    quote: "[Pull quote from client]",
    attribution: "[Client role]",
    stats: [
      { value: "Stat 1", label: "label" },
      { value: "Stat 2", label: "label" },
      { value: "Stat 3", label: "label" },
    ],
    imageAlt: "Project screenshot — client #1",
    href: "#",
  },
  {
    clientName: "Client Name #2",
    quote: "[Pull quote from client]",
    attribution: "[Client role]",
    stats: [
      { value: "Stat 1", label: "label" },
      { value: "Stat 2", label: "label" },
      { value: "Stat 3", label: "label" },
    ],
    imageAlt: "Project screenshot — client #2",
    href: "#",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    name: "Ethan Zhang",
    role: "Founder",
    bio: "Columbia CS '28.",
    imageAlt: "Ethan Zhang headshot",
  },
  {
    name: "Kushaan Vardhan",
    role: "Co-founder",
    bio: "[placeholder bio]",
    imageAlt: "Kushaan Vardhan headshot",
  },
  {
    name: "Siddharth Rout",
    role: "Co-founder",
    bio: "[placeholder bio]",
    imageAlt: "Siddharth Rout headshot",
  },
];

export const ctas = {
  final: {
    headline: "Build with us.",
    subhead: "Fall 2026 cohort opens this summer.",
    cta: { label: "Join the waitlist", href: WAITLIST_URL },
  },
};
