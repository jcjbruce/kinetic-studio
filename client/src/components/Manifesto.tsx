import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const decorY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative bg-[#FAFAFA] py-28 md:py-44 overflow-hidden"
    >


      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-black/30">
            02 — Our Manifesto
          </span>
          <div className="w-12 h-px bg-black/20 mt-3" />
        </motion.div>

        {/* Main manifesto text */}
        <div className="max-w-4xl">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-black mb-12"
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Unity isn't
            <br />
            sameness.
          </motion.h2>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-black/70 font-[family-name:var(--font-body)]">
              Unity is the <em className="text-black font-semibold not-italic">snap</em> that
              happens when different people, disciplines, and backgrounds are seen
              and celebrated together. It's the moment a hip-hop producer and a
              glass blower realize they share the same fire. The moment a muralist
              and a poet discover they're painting the same truth.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-black/70 font-[family-name:var(--font-body)]">
              We started UnitySnap because the most interesting people in the
              world — the creatives, the makers, the teachers, the storytellers —
              are often the ones <em className="text-black font-semibold not-italic">least served</em> by
              the digital world. They pour everything into their craft, and the
              internet gives them nothing back.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-black/70 font-[family-name:var(--font-body)]">
              We're changing that. One site at a time.{" "}
              <span className="text-black font-semibold">Because talent shouldn't stay invisible.</span>
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            className="mt-16 md:mt-24 pl-6 md:pl-8 border-l-4 border-black"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] uppercase leading-tight text-black">
              "This is not a corporate agency.
              <br />
              This is a movement with
              <br />
              a design department."
            </blockquote>
          </motion.div>
        </div>

        {/* Decorative element — large faded text with parallax */}
        <motion.div
          className="absolute right-0 top-1/2 pointer-events-none select-none hidden xl:block"
          style={{ y: decorY }}
        >
          <span className="text-[20rem] font-[family-name:var(--font-heading)] uppercase text-black/[0.03] leading-none">
            US
          </span>
        </motion.div>
      </div>
    </section>
  );
}
