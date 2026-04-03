import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

const included = [
  "Custom website design tailored to your craft",
  "Mobile-responsive, fast, and accessible",
  "Hosting guidance and setup support",
  "Basic SEO to help you get discovered",
  "Your own domain name assistance",
  "Ongoing support for 3 months after launch",
];

export default function FreeSite() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Application received! We'll be in touch soon.");
  };

  return (
    <section id="free-site" className="relative bg-[#FAFAFA] py-24 md:py-36">
      {/* Center spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-black/30">
            05 — Free Site Program
          </span>
          <div className="w-12 h-px bg-black/20 mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-black mb-6">
              Your stage
              <br />
              is <span className="text-[#FF3D8B]">free.</span>
            </h2>

            <p className="text-black/60 text-lg md:text-xl leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              If you're an artist, creative, educator, or community maker — we
              want to build your website. For free. No catch. No strings. Just
              our way of giving back to the people who make the world more
              interesting.
            </p>

            <h3 className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest text-black/40 mb-6">
              What's Included
            </h3>

            <div className="space-y-4">
              {included.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-black/70 font-[family-name:var(--font-body)]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-black/5 border border-black/10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-[#FF3D8B]" />
                <span className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest text-black/60">
                  Who Qualifies
                </span>
              </div>
              <p className="text-black/60 text-sm leading-relaxed font-[family-name:var(--font-body)]">
                Artists, musicians, photographers, filmmakers, educators, makers,
                performers, writers, and any creative who needs a digital home.
                If you create, you qualify.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <h3 className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest text-black/40 mb-6">
                What to Expect
              </h3>
              <div className="space-y-0">
                {[
                  { step: "01", title: "Apply", desc: "Tell us about yourself and your creative work" },
                  { step: "02", title: "Connect", desc: "We'll reach out within 5 business days to chat" },
                  { step: "03", title: "Design", desc: "We build your custom site with your input" },
                  { step: "04", title: "Launch", desc: "Your digital stage goes live" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-[family-name:var(--font-mono)] text-white">{item.step}</span>
                      </div>
                      {i < 3 && <div className="w-px h-8 bg-black/10" />}
                    </div>
                    <div className="pb-4">
                      <span className="text-sm font-[family-name:var(--font-heading)] uppercase text-black">{item.title}</span>
                      <p className="text-xs text-black/50 font-[family-name:var(--font-body)] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black p-8 md:p-10">
              <h3 className="text-2xl font-[family-name:var(--font-heading)] uppercase text-white mb-2">
                Apply Now
              </h3>
              <p className="text-white/40 text-sm font-[family-name:var(--font-mono)] uppercase tracking-wider mb-8">
                This is an invitation, not an application.
              </p>

              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8FF00] flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-black" />
                  </div>
                  <h4 className="text-xl font-[family-name:var(--font-heading)] uppercase text-white mb-3">
                    We got you.
                  </h4>
                  <p className="text-white/50 font-[family-name:var(--font-body)]">
                    We'll review your application and reach out within 5 business
                    days. Your stage is being built.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-[#E8FF00] focus:outline-none transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                      Creative Discipline
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-[#E8FF00] focus:outline-none transition-colors"
                      placeholder="e.g., Photographer, Musician, Painter"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-[#E8FF00] focus:outline-none transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                      Tell Us About Your Work
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-[#E8FF00] focus:outline-none transition-colors resize-none"
                      placeholder="What do you create? What drives you?"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                      Link to Existing Presence (Optional)
                    </label>
                    <input
                      type="url"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-[#E8FF00] focus:outline-none transition-colors"
                      placeholder="Instagram, portfolio, SoundCloud, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm hover:bg-[#E8FF00] transition-colors duration-300 mt-4"
                  >
                    Claim Your Free Site
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
