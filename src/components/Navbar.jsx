import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-lg font-semibold text-brand-dark tracking-tight">
          Elementum
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-sm text-gray-700 hover:text-brand-dark transition-colors duration-200"
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
            <RiCloseLine size={22} className="text-brand-dark" />
          ) : (
            <RiMenu3Line size={22} className="text-brand-dark" />
          )}
        </button>

        <div className="hidden md:flex flex-col gap-1 cursor-pointer">
          <span className="block w-5 h-0.5 bg-brand-dark" />
          <span className="block w-5 h-0.5 bg-brand-dark" />
          <span className="block w-3 h-0.5 bg-brand-dark" />
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-gray-700 hover:text-brand-dark transition-colors"
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
  )
}
