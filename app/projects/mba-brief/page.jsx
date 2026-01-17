"use client";

import { navItems, features, stats, pricingPlans } from "./data";

import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StatsRow } from "./components/StatsRow";
import { PricingCards } from "./components/PricingCards";
import { FinalCTA } from "./components/FinalCTA";

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