import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const branches = [
  {
    name: "mentee.ca",
    tagline: "Digital Sovereignty",
    description:
      "Digital design for Indigenous organizations and communities. Building digital sovereignty, one website at a time.",
    link: "https://mentee.ca",
    accent: "#00D4FF",
    number: "01",
  },
  {
    name: "civicfirm.com",
    tagline: "Civic Design",
    description:
      "Websites for K-12 schools, government institutions, non-profits, and small businesses. Civic design with purpose.",
    link: "https://civicfirm.com",
    accent: "#E8FF00",
    number: "02",
  },
  {
    name: "UnitySnap",
    tagline: "Creative Giving Back",
    description:
      "Free and premium websites for creatives of every discipline and background. The art of giving back.",
    link: "#",
    accent: "#FF3D8B",
    number: "03",
    current: true,
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative bg-[#0A0A0A] py-24 md:py-36">
      {/* Center spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30">
            03 — The Ecosystem
          </span>
          <div className="w-12 h-px bg-white/20 mt-3" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Three branches.
          <br />
          <span className="text-white/40">One vision.</span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-lg md:text-xl max-w-2xl mb-16 md:mb-24 font-[family-name:var(--font-body)]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          UnitySnap is part of a larger digital design ecosystem — three
          specialized studios united by a shared belief that great design should
          serve everyone.
        </motion.p>

        {/* Branch cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className={`relative bg-[#0A0A0A] p-8 md:p-10 group ${
                branch.current ? "bg-[#111]" : ""
              }`}
            >
              {/* Branch number */}
              <span
                className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em]"
                style={{ color: branch.accent }}
              >
                Branch {branch.number}
              </span>

              {/* Top accent line */}
              <div
                className="w-full h-px mt-4 mb-8 opacity-30"
                style={{ backgroundColor: branch.accent }}
              />

              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] uppercase text-white mb-2">
                {branch.name}
              </h3>

              <span
                className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest"
                style={{ color: branch.accent }}
              >
                {branch.tagline}
              </span>

              <p className="mt-6 text-white/50 text-base leading-relaxed font-[family-name:var(--font-body)]">
                {branch.description}
              </p>

              {branch.current ? (
                <div className="mt-8 flex items-center gap-2 text-white/30 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: branch.accent }}
                  />
                  You are here
                </div>
              ) : (
                <a
                  href={branch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-white/50 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest hover:text-white transition-colors duration-300 group/link"
                >
                  Visit Site
                  <ExternalLink size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}

              {/* Hover accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${branch.accent}08 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:flex items-center justify-center mt-12">
          <div className="flex items-center gap-0">
            <div className="w-3 h-3 rounded-full border-2 border-[#00D4FF]" />
            <div className="w-32 h-px bg-white/10" />
            <div className="w-3 h-3 rounded-full border-2 border-[#E8FF00]" />
            <div className="w-32 h-px bg-white/10" />
            <div className="w-3 h-3 rounded-full border-2 border-[#FF3D8B]" />
          </div>
        </div>
      </div>
    </section>
  );
}
