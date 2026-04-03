/*
 * UnitySnap — "Street Gallery" Design
 * Design: Contemporary art gallery meets street culture
 * Palette: Concrete dark (#0A0A0A), gallery white (#FAFAFA), accent magenta/yellow/cyan
 * Typography: Archivo Black (headlines), DM Sans (body), Space Mono (labels)
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Manifesto from "@/components/Manifesto";
import WhyUnitySnap from "@/components/WhyUnitySnap";
import CommunityBuilds from "@/components/CommunityBuilds";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Manifesto />
      <WhyUnitySnap />
      {/* Portfolio section hidden until real artist data is provided */}
      <CommunityBuilds />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
