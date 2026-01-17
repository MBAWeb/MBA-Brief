export const navItems = [
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Proof" },
  { id: "pricing", label: "Pricing" },
];

export const features = [
  { title: "Smart summaries", desc: "Get a clean overview in one click—no rereading required." },
  { title: "Action items", desc: "Automatically pulls next steps so nothing gets missed." },
  { title: "Key moments", desc: "Captures decisions, risks, and open questions." },
  { title: "Tone controls", desc: "Choose quick, standard, or detailed output." },
  { title: "Export anywhere", desc: "Copy, Markdown, or share a link with your team." },
  { title: "Privacy-first workflow", desc: "Designed with safe defaults and minimal data exposure." },
];

export const stats = [
  { value: "12,000+", label: "summaries generated" },
  { value: "4.8/5", label: "average rating" },
  { value: "30s", label: "average time saved per doc" },
  { value: "99.9%", label: "uptime (concept)" },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    per: "",
    tagline: "Great for trying it out",
    features: ["10 summaries / month", "Copy export", "Basic tone controls"],
    cta: "Start free",
    featured: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$12",
    per: "/mo",
    tagline: "For students and professionals",
    features: ["Unlimited summaries", "Action item detection", "Share links + Markdown export"],
    cta: "Go Pro",
    featured: true,
    badge: "Best value",
  },
  {
    name: "Team",
    price: "$24",
    per: "/mo",
    tagline: "For teams that collaborate",
    features: ["Shared workspaces", "Admin controls", "Priority support"],
    cta: "Contact sales",
    featured: false,
    badge: null,
  },
];