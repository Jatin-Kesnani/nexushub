// ============================================================
// NEXUS HUB — content model
// Tax & Compliance is intentionally ordered FIRST everywhere.
// Copy is intentionally minimal / scannable.
// ============================================================

// Premium imagery (Unsplash). Swap freely — kept in one place.
export const IMG = {
  hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80", // Dubai skyline
  tax: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80", // finance / filing
  talent: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80", // team
  mission: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", // corporate tower
  vision: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80", // Dubai marina
  whyChoose: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80", // boardroom
  valueIntegrity: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80", // handshake
  valueRigor: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", // analytics
  valueInnovation: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=900&q=80", // modern Dubai
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
