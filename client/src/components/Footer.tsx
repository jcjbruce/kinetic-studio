import { ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Mission", href: "#mission" },
  { label: "Why Us", href: "#why" },
  { label: "Community Builds", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black py-16 md:py-24">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Text-based logo + tagline */}
          <div>
            <div className="mb-6 flex items-center">
              <span className="text-2xl font-[family-name:var(--font-heading)] uppercase text-white leading-none tracking-tight">
                Unity
              </span>
              <span className="mx-[3px] w-[2px] h-7 bg-[#E8FF00] inline-block" />
              <span className="text-2xl font-[family-name:var(--font-heading)] uppercase text-white leading-none tracking-tight">
                Snap
              </span>
            </div>
            <p className="text-white/30 text-sm font-[family-name:var(--font-mono)] uppercase tracking-wider leading-relaxed">
              Capturing Unity
              <br />
              Through Diversity
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30 mb-6">
              Navigate
            </h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-300 font-[family-name:var(--font-body)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.3em] text-white/30 mb-6">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-300 font-[family-name:var(--font-body)]"
                  onClick={(e) => {
                    e.preventDefault();
                    // Placeholder — real links to be added
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-[family-name:var(--font-mono)]">
            &copy; {new Date().getFullYear()} UnitySnap. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white/20 hover:text-white/50 transition-colors text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider group"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-white/20 text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Built with soul. Designed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
