/**
 * Why UnitySnap — Replaces the Ecosystem section.
 * Sells the agency's value: world-class craft, genuine care, diversity as superpower.
 * Dark room with asymmetric layout and accent highlights.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Heart, Eye, Users } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "We See You",
    description:
      "Most agencies build for brands. We build for people — the ones pouring everything into their craft and deserving a digital presence that matches their talent.",
    accent: "#E8FF00",
  },
  {
    icon: Zap,
    title: "World-Class Craft",
    description:
      "We don't do templates. Every project gets the same obsessive attention to detail — whether it's a photographer's portfolio or a full brand identity.",
    accent: "#00D4FF",
  },
  {
    icon: Users,
    title: "Diversity Is the Point",
    description:
      "Hip-hop artists and glass blowers. Muralists and guitar teachers. The range isn't a marketing angle — it's what makes the work interesting.",
    accent: "#FF3D8B",
  },
  {
    icon: Heart,
    title: "Built With Soul",
    description:
      "We've turned down bigger checks to take on projects that mattered more. That's not a business strategy — it's who we are.",
    accent: "#FF6B35",
  },
];

export default function WhyUnitySnap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="relative bg-[#0A0A0A] py-24 md:py-36">


      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30">
            03 — Why UnitySnap
          </span>
          <div className="w-12 h-px bg-white/20 mt-3" />
        </motion.div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Not just
            <br />
            another
            <br />
            <span className="text-[#E8FF00]">agency.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-end"
          >
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-[family-name:var(--font-body)]">
              We could build websites for anyone. We choose to build for the
              creatives, the makers, the people who make the world more
              interesting. That choice shapes everything — how we design, how we
              price, and how we show up.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="bg-[#0A0A0A] p-8 md:p-12 group hover:bg-[#111] transition-colors duration-500 relative"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center mb-6"
                style={{ color: pillar.accent }}
              >
                <pillar.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-[family-name:var(--font-heading)] uppercase text-white mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-base leading-relaxed font-[family-name:var(--font-body)]">
                {pillar.description}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px transition-all duration-700"
                style={{ backgroundColor: pillar.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
