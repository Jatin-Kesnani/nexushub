// ============================================================
// NEXUS HUB — content model
// Tax & Compliance is intentionally ordered FIRST everywhere.
// Copy is intentionally minimal / scannable.
// ============================================================

// Premium imagery 
import heroImg from "./assets/img/hero.jpg"; // Dubai skyline
import taxImg from "./assets/img/tax.jpg"; // finance / filing
import talentImg from "./assets/img/talent.jpg"; // team
import missionImg from "./assets/img/mission.jpg"; // corporate tower
import visionImg from "./assets/img/vision.jpg"; // Dubai marina
import whyChooseImg from "./assets/img/why-choose.jpg"; // boardroom
import valueIntegrityImg from "./assets/img/value-integrity.jpg"; // handshake
import valueRigorImg from "./assets/img/value-rigor.jpg"; // analytics
import valueInnovationImg from "./assets/img/value-innovation.jpg"; // modern Dubai

export const IMG = {
  hero: heroImg,
  tax: taxImg,
  talent: talentImg,
  mission: missionImg,
  vision: visionImg,
  whyChoose: whyChooseImg,
  valueIntegrity: valueIntegrityImg,
  valueRigor: valueRigorImg,
  valueInnovation: valueInnovationImg,
};

// Form routing — client fills these in.
export const RECIPIENTS = {
  tax: "tax@nexushub.ae", // person 1
  talent: "talent@nexushub.ae", // person 2
};

// Two divisions — Tax FIRST, balanced 50 / 50.
export const DIVISIONS = [
  {
    id: "tax",
    eyebrow: "Division 01",
    title: "Tax, VAT & Compliance Solutions",
    tagline:
      "Register, file and stay penalty-free under the UAE's VAT and corporate tax regimes.",
    image: IMG.tax,
    points: [
      "VAT registration & quarterly filing",
      "Corporate tax — 9% regime ready",
      "FTA support & penalty resolution",
      "Ongoing compliance monitoring",
    ],
  },
  {
    id: "talent",
    eyebrow: "Division 02",
    title: "Talent, HR & Business Consulting",
    tagline:
      "Find the leaders, build the structure and scale your workforce with confidence.",
    image: IMG.talent,
    points: [
      "Executive search & RPO",
      "HR setup, policy & Emiratization",
      "UAE labour-law compliance",
      "Business strategy & market research",
    ],
  },
];

export const STATS = [
  { num: 500, suffix: "+", label: "Positions filled across the Emirates" },
  { num: 100, suffix: "+", label: "Businesses supported & scaled" },
  { num: 95, suffix: "%", label: "Client satisfaction rating" },
  { num: 10, suffix: "+", label: "Industries served end-to-end" },
];

export const TRUST = [
  "Licensed UAE business",
  "Dubai-based advisory",
  "FTA-compliance experts",
  "100% confidential",
];

export const VALUES = [
  {
    title: "Absolute Integrity",
    text: "Unwavering ethical standards on every engagement — trust is our most valuable asset.",
    image: IMG.valueIntegrity,
  },
  {
    title: "Methodical Rigor",
    text: "Strategies built on data and battle-tested frameworks, leaving nothing to chance.",
    image: IMG.valueRigor,
  },
  {
    title: "UAE-Centric Innovation",
    text: "Global best practice adapted to the cultural and regulatory reality of the Emirates.",
    image: IMG.valueInnovation,
  },
];

export const WHY = [
  {
    title: "Local Presence, Global Intel",
    text: "Dubai-based and immediately accessible, backed by a network of global experts.",
  },
  {
    title: "Deep Regulatory Knowledge",
    text: "Expert navigation of UAE commercial law, free-zone rules and FTA mandates.",
  },
  {
    title: "Bespoke Delivery",
    text: "No cookie-cutter decks — each roadmap is built from the ground up for you.",
  },
];

export const NAV_LINKS = [
  { href: "#pillars", label: "Divisions" },
  { href: "#mission", label: "About" },
  { href: "#values", label: "Values" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];
