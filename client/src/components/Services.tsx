import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Palette,
  Share2,
  BookOpen,
  Search,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom-built, responsive websites that tell your story and showcase your work with the craft it deserves.",
    accent: "#E8FF00",
  },
  {
    icon: Palette,
    title: "Brand Identity & Logo Design",
    description:
      "Visual identities that capture who you are — from logo to color palette to the feeling people get when they see your name.",
    accent: "#FF3D8B",
  },
  {
    icon: Share2,
    title: "Social Media Presence",
    description:
      "Cohesive social media setup and strategy that extends your brand across every platform where your audience lives.",
    accent: "#00D4FF",
  },
  {
    icon: BookOpen,
    title: "Digital Storytelling & Content",
    description:
      "Content strategy that turns your creative journey into compelling narratives — blog posts, case studies, and project features.",
    accent: "#FF6B35",
  },
  {
    icon: Search,
    title: "SEO & Discoverability",
    description:
      "Technical and creative SEO that helps the right people find you. Because talent shouldn't stay hidden.",
    accent: "#A855F7",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance & Support",
    description:
      "We don't disappear after launch. Ongoing updates, performance monitoring, and support to keep your site running strong.",
    accent: "#34D399",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative bg-[#0A0A0A] py-24 md:py-36">


      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30">
            06 — Services
          </span>
          <div className="w-12 h-px bg-white/20 mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            World-class
            <br />
            craft. <span className="text-white/30">Fair</span>
            <br />
            <span className="text-white/30">pricing.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-end"
          >
            <p className="text-white/50 text-lg md:text-xl leading-relaxed font-[family-name:var(--font-body)]">
              Premium digital design for creatives and organizations who want
              to invest in their presence. Same obsessive craft, same genuine
              care — scaled to your ambition.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-[#0A0A0A] p-8 md:p-10 group hover:bg-[#111] transition-colors duration-500"
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-6"
                style={{ color: service.accent }}
              >
                <service.icon size={24} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-[family-name:var(--font-heading)] uppercase text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed font-[family-name:var(--font-body)]">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="w-0 group-hover:w-full h-px mt-8 transition-all duration-700"
                style={{ backgroundColor: service.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/30 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest mb-6">
            Every project starts with a conversation
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-black font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm hover:bg-[#E8FF00] transition-colors duration-300"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
