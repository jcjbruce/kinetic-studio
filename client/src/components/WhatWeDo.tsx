import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const disciplines = [
  "Hip-Hop Artists", "Guitar Teachers", "Photographers", "Journalists",
  "Glass Blowers", "Painters", "Muralists", "Spoken Word Poets",
  "Filmmakers", "Dancers", "Tattoo Artists", "Potters", "Chefs",
  "Illustrators", "Graffiti Artists", "Fashion Designers", "Comedians",
  "Podcasters", "Sculptors", "Calligraphers", "Street Photographers",
  "Beat Makers", "Graphic Novelists", "Theater Directors", "Digital Artists",
  "Weavers", "Woodworkers", "DJs", "Ceramicists", "Printmakers",
];

const accentColors = [
  "#E8FF00", "#FF3D8B", "#00D4FF", "#FF6B35", "#A855F7",
  "#34D399", "#F59E0B", "#EC4899", "#06B6D4", "#8B5CF6",
];

function DisciplineTicker() {
  const doubled = [...disciplines, ...disciplines];
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {doubled.map((d, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-3 md:mx-4 text-sm md:text-base font-[family-name:var(--font-mono)] uppercase tracking-wider shrink-0"
          >
            <span
              className="w-2 h-2 rounded-full mr-3 shrink-0"
              style={{ backgroundColor: accentColors[i % accentColors.length] }}
            />
            <span className="text-white/60">{d}</span>
          </span>
        ))}
      </div>
      {/* Second row, opposite direction */}
      <div className="flex animate-scroll-right whitespace-nowrap mt-4">
        {[...doubled].reverse().map((d, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-3 md:mx-4 text-sm md:text-base font-[family-name:var(--font-mono)] uppercase tracking-wider shrink-0"
          >
            <span
              className="w-2 h-2 shrink-0 mr-3"
              style={{
                backgroundColor: accentColors[(i + 5) % accentColors.length],
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }}
            />
            <span className="text-white/60">{d}</span>
          </span>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-36" id="what-we-do">
      {/* Section label */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30">
            01 — What We Do
          </span>
          <div className="w-12 h-px bg-white/20 mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-white">
              Your creativity
              <br />
              deserves a
              <br />
              <span className="text-[#E8FF00]">stage.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-[family-name:var(--font-body)]">
              We build <span className="text-white font-semibold">world-class websites</span> for
              creatives of every kind. From hip-hop artists to glass blowers, from
              photojournalists to tattoo artists — if you make something beautiful,
              we'll give it a home online.
            </p>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-[family-name:var(--font-body)]">
              We specialize in <span className="text-white font-semibold">digital storytelling</span> —
              helping artists, educators, and makers get found, get seen, and get
              the recognition they deserve. No matter your background, budget, or genre.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Discipline ticker */}
      <div className="mt-16 md:mt-24">
        <DisciplineTicker />
      </div>
    </section>
  );
}
