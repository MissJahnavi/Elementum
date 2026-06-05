export default function FooterColumn({ heading, links }) {
  return (
    <div>
      <h4 className="font-sans text-sm font-semibold text-brand-dark mb-4">
        {heading}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-sans text-xs text-brand-gray hover:text-brand-dark transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
