"use client";

import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StatsRow } from "./components/StatsRow";
import { PricingCards } from "./components/PricingCards";
import { FinalCTA } from "./components/FinalCTA";

const navItems = [
  { id: "features", label: "Features" },
  { id: "testimonials", label: "Proof" },
  { id: "pricing", label: "Pricing" },
];

const features = [
  { title: "Smart summaries", desc: "Get a clean overview in one click—no rereading required." },
  { title: "Action items", desc: "Automatically pulls next steps so nothing gets missed." },
  { title: "Key moments", desc: "Captures decisions, risks, and open questions." },
  { title: "Tone controls", desc: "Choose quick, standard, or detailed output." },
  { title: "Export anywhere", desc: "Copy, Markdown, or share a link with your team." },
  { title: "Privacy-first workflow", desc: "Designed with safe defaults and minimal data exposure." },
];

const stats = [
  { value: "12,000+", label: "summaries generated" },
  { value: "4.8/5", label: "average rating" },
  { value: "30s", label: "average time saved per doc" },
  { value: "99.9%", label: "uptime (concept)" },
];

const pricingPlans = [
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

function PlaceholderSection({ id, title, text }) {
  return (
    <section id={id} className="py-16">
      <Container>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-white/70">{text}</p>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar navItems={navItems} />
      <Hero />
      <FeaturesGrid features={features} />
      <StatsRow stats={stats} />
      <PricingCards pricingPlans={pricingPlans} />
      <FinalCTA />

    </main>
  );
}