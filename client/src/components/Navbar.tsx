import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Mission", href: "#mission" },
  { label: "Why Us", href: "#why" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Text-based logo */}
        <a href="#" className="flex items-center group">
          <span className="text-lg md:text-xl font-[family-name:var(--font-heading)] uppercase text-white leading-none tracking-tight">
            Unity
          </span>
          <span className="mx-[3px] w-[2px] h-5 md:h-6 bg-[#E8FF00] inline-block" />
          <span className="text-lg md:text-xl font-[family-name:var(--font-heading)] uppercase text-white leading-none tracking-tight">
            Snap
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            className="ml-4 px-5 py-2 bg-white text-black text-[13px] font-[family-name:var(--font-heading)] uppercase tracking-wider hover:bg-[#E8FF00] transition-colors duration-300"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-[#0A0A0A] transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start px-8 pt-12 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-[family-name:var(--font-heading)] uppercase text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-white text-black font-[family-name:var(--font-heading)] uppercase tracking-wider text-lg"
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
