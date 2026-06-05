import { HiArrowRight } from 'react-icons/hi'

export default function ServiceRow({ category, title }) {
  return (
    <div className="flex items-center justify-between py-5 md:py-6 border-b border-gray-200 group cursor-pointer">
      <p className="font-sans text-xs md:text-sm text-brand-gray leading-tight w-28 md:w-36 shrink-0">
        {category}
      </p>

      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-brand-dark flex-1 text-center px-4 group-hover:text-brand-red transition-colors duration-200">
        {title}
      </h3>

      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <HiArrowRight
          size={18}
          className="text-brand-dark group-hover:translate-x-1 transition-transform duration-200"
        />
      </div>
    </div>
  )
}
