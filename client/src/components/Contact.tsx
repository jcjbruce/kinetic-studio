import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [inquiryType, setInquiryType] = useState<"community" | "premium" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="relative bg-[#111] py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30">
            07 — Contact
          </span>
          <div className="w-12 h-px bg-white/20 mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] uppercase leading-[0.95] text-white mb-6">
              Let's build
              <br />
              something
              <br />
              <span className="text-[#00D4FF]">together.</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-10 font-[family-name:var(--font-body)]">
              Whether you're a creative ready to get your work online or an
              organization looking for premium digital design — we'd love to
              hear from you.
            </p>

            {/* Path selection */}
            <div className="space-y-3 mb-10">
              <button
                onClick={() => setInquiryType("community")}
                className={`w-full text-left p-5 border transition-all duration-300 flex items-center justify-between group ${
                  inquiryType === "community"
                    ? "border-[#FF3D8B] bg-[#FF3D8B]/5"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <span className="text-sm font-[family-name:var(--font-heading)] uppercase text-white">
                    Community Build
                  </span>
                  <p className="text-xs text-white/40 mt-1 font-[family-name:var(--font-body)]">
                    I'm a creative looking to start a project
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className={`transition-all duration-300 ${
                    inquiryType === "community"
                      ? "text-[#FF3D8B] translate-x-0"
                      : "text-white/20 -translate-x-2 group-hover:translate-x-0"
                  }`}
                />
              </button>

              <button
                onClick={() => setInquiryType("premium")}
                className={`w-full text-left p-5 border transition-all duration-300 flex items-center justify-between group ${
                  inquiryType === "premium"
                    ? "border-[#00D4FF] bg-[#00D4FF]/5"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <span className="text-sm font-[family-name:var(--font-heading)] uppercase text-white">
                    Premium Project
                  </span>
                  <p className="text-xs text-white/40 mt-1 font-[family-name:var(--font-body)]">
                    I'm interested in premium design services
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className={`transition-all duration-300 ${
                    inquiryType === "premium"
                      ? "text-[#00D4FF] translate-x-0"
                      : "text-white/20 -translate-x-2 group-hover:translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-white/30">
              <Mail size={16} />
              <span className="text-sm font-[family-name:var(--font-mono)]">
                hello@unitysnap.com
              </span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-white/40 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-white/40 focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              {inquiryType && (
                <div>
                  <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                    Inquiry Type
                  </label>
                  <div
                    className={`px-4 py-3 border text-sm font-[family-name:var(--font-mono)] uppercase tracking-wider ${
                      inquiryType === "community"
                        ? "border-[#FF3D8B]/30 text-[#FF3D8B]"
                        : "border-[#00D4FF]/30 text-[#00D4FF]"
                    }`}
                  >
                    {inquiryType === "community"
                      ? "Community Build"
                      : "Premium Project"}
                  </div>
                </div>
              )}

              <div>
                <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/40 mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-[family-name:var(--font-body)] focus:border-white/40 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, your vision, your story..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-[family-name:var(--font-heading)] uppercase tracking-wider text-sm hover:bg-[#E8FF00] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
