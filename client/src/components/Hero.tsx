/**
 * Hero Section — Street Gallery Design
 * Cinematic full-screen opening with compact text-based UNITY|SNAP logo.
 * Logo halves snap together. Parallax background, letterbox bars, grain overlay.
 */
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/5AoQhQRatXFL2ryJM2mc4w/hero-bg_908c4504.png";

export default function Hero() {
  const [phase, setPhase] = useState(0); // 0=waiting, 1=logo snap, 2=content
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background image with overlay + parallax */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-black z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-black z-10" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Logo + Content */}
      <div className="relative z-30 flex flex-col items-center">
        {/* Compact text-based UNITY|SNAP logo */}
        <div className="flex items-center overflow-hidden">
          {/* UNITY — slides in from left */}
          <motion.span
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-heading)] uppercase leading-none text-white tracking-tight"
            initial={{ x: -60, opacity: 0 }}
            animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Unity
          </motion.span>

          {/* Divider bar */}
          <motion.span
            className="mx-2 sm:mx-3 md:mx-4 w-[3px] sm:w-[4px] h-10 sm:h-12 md:h-14 lg:h-16 bg-[#E8FF00] inline-block"
            initial={{ scaleY: 0 }}
            animate={phase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center" }}
          />

          {/* SNAP — slides in from right */}
          <motion.span
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-heading)] uppercase leading-none text-white tracking-tight"
            initial={{ x: 60, opacity: 0 }}
            animate={phase >= 1 ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Snap
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-6 md:mt-8 text-white text-sm md:text-base font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Capturing Unity Through Diversity
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="mt-4 md:mt-6 max-w-xl text-white/80 text-base md:text-lg font-[family-name:var(--font-body)] text-center leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Digital experiences for the creatives, makers, and dreamers
          the world overlooks. World-class craft for every kind of artist.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#services"
            className="px-8 py-3 bg-white text-black font-[family-name:var(--font-heading)] uppercase text-sm tracking-wider hover:bg-[#E8FF00] transition-colors duration-300"
          >
            What We Do
          </a>
          <a
            href="#community"
            className="px-8 py-3 border border-white/40 text-white font-[family-name:var(--font-heading)] uppercase text-sm tracking-wider hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            Start Your Project
          </a>
          <a
            href="#mission"
            className="text-white/60 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Our Mission
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-white/40 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
