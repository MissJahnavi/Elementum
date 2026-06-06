import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-black/[0.04]">
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a
          href="#"
          className="font-gerbil text-[28px] text-black leading-none"
        >
          Elementum
        </a>

        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-satoshi text-[14px] text-black/70 hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex flex-col gap-1.5 cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <RiCloseLine size={24} className="text-black" />
          ) : (
            <RiMenu3Line size={24} className="text-black" />
          )}
        </button>

        <div className="hidden md:flex flex-col gap-[5px] cursor-pointer">
          <span className="block w-5 h-[2px] bg-black" />
          <span className="block w-5 h-[2px] bg-black" />
          <span className="block w-3 h-[2px] bg-black" />
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.04] px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-satoshi text-[14px] text-black/70 hover:text-black transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}