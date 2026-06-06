import { HiArrowRight } from "react-icons/hi";

export default function ServiceRow({ category, title }) {
  return (
    <div className="flex items-center justify-between py-7 md:py-8 border-b border-[#E8E8E8] cursor-pointer">
      <div className="w-[140px] md:w-[180px] shrink-0">
        <p className="font-satoshi text-[12px] md:text-[13px] leading-5 text-[#6B6B6B]">
          {category}
        </p>
      </div>

      <div className="flex-1 px-6 md:px-10">
        <h3 className="font-gerbil text-[24px] md:text-[32px] lg:text-[38px] leading-[1] text-black">
          {title}
        </h3>
      </div>

      <div className="w-12 flex justify-end shrink-0">
        <HiArrowRight
          size={22}
          className="text-black transition-transform duration-200 hover:translate-x-1"
        />
      </div>
    </div>
  );
}