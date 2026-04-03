import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/5AoQhQRatXFL2ryJM2mc4w";

const projects = [
  {
    name: "Marcus Webb",
    discipline: "Hip-Hop Artist",
    location: "Atlanta, GA",
    service: "Full Website + Branding",
    image: `${CDN}/portfolio-hiphop_c3c3f232.png`,
    description: "A bold, dark-themed portfolio site with integrated music player, tour dates, and merch store. Built to match the energy of Southern hip-hop.",
    tags: ["Music", "Branding", "E-Commerce"],
    accent: "#FFD700",
  },
  {
    name: "Elena Kovac",
    discipline: "Glass Blower",
    location: "Vancouver, BC",
    service: "Portfolio + Gallery",
    image: `${CDN}/portfolio-glassblower_45e4d2bc.png`,
    description: "An elegant gallery site showcasing handcrafted glass art with warm amber tones. Features a commission request system and exhibition calendar.",
    tags: ["Visual Art", "Gallery", "E-Commerce"],
    accent: "#D97706",
  },
  {
    name: "Liam O'Brien",
    discipline: "Guitar Teacher",
    location: "Dublin, Ireland",
    service: "Website + Booking System",
    image: `${CDN}/portfolio-guitar_211a75bb.png`,
    description: "A warm, inviting site for guitar lessons with an integrated booking system, student testimonials, and resource library for students.",
    tags: ["Music", "Education", "Booking"],
    accent: "#16A34A",
  },
  {
    name: "Amara Osei",
    discipline: "Photojournalist",
    location: "Nairobi, Kenya",
    service: "Portfolio + Blog",
    image: `${CDN}/portfolio-journalist_7351e8af.png`,
    description: "A striking editorial portfolio with high-contrast photography, long-form story features, and a documentary project archive.",
    tags: ["Photography", "Editorial", "Blog"],
    accent: "#DC2626",
  },
  {
    name: "Diego Ramirez",
    discipline: "Muralist",
    location: "Los Angeles, CA",
    service: "Portfolio + Commission Page",
    image: `${CDN}/portfolio-muralist_c7ac2e87.png`,
    description: "A vibrant, explosive portfolio showcasing large-scale street murals with location mapping, time-lapse videos, and a commission inquiry system.",
    tags: ["Visual Art", "Street Art", "Portfolio"],
    accent: "#2563EB",
  },
  {
    name: "Zara Mensah",
    discipline: "Spoken Word Poet",
    location: "Toronto, ON",
    service: "Full Website + Events",
    image: `${CDN}/portfolio-poet_3d409a31.png`,
    description: "A dramatic, literary site featuring poetry excerpts, performance videos, an events calendar, and a booking system for live appearances.",
    tags: ["Performance", "Literary", "Events"],
    accent: "#7C3AED",
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="work" className="relative bg-[#111] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30">
            04 — Our Work
          </span>
          <div className="w-12 h-px bg-white/20 mt-3" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The dopest
          <br />
          portfolio ever
          <br />
          <span className="text-[#E8FF00]">built.</span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-lg max-w-xl mb-12 font-[family-name:var(--font-body)]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Every project tells a story. Every creative deserves a stage. Here's
          what we've built — and who we've built it for.
        </motion.p>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === tag
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[#111] group overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} — ${project.discipline}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                    <p className="text-white/80 text-sm leading-relaxed font-[family-name:var(--font-body)] text-center">
                      {project.description}
                    </p>
                  </div>
                  {/* Accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>

                {/* Info — exhibition label style */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] uppercase text-white">
                        {project.name}
                      </h3>
                      <p
                        className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest mt-1"
                        style={{ color: project.accent }}
                      >
                        {project.discipline}
                      </p>
                    </div>
                    <span className="text-[10px] font-[family-name:var(--font-mono)] text-white/30 uppercase tracking-wider shrink-0">
                      {project.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-white/30 border border-white/10 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[10px] font-[family-name:var(--font-mono)] text-white/20 uppercase tracking-wider mt-4">
                    {project.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mt-px"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "50+", label: "Creatives Served" },
            { number: "30+", label: "Disciplines Represented" },
            { number: "12", label: "Countries Reached" },
            { number: "100%", label: "Heart" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] p-6 md:p-8 text-center">
              <span className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] text-[#E8FF00]">
                {stat.number}
              </span>
              <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/30 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
