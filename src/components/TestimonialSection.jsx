import av263 from '../assets/images/avatars/Ellipse_263.png'
import av264 from '../assets/images/avatars/Ellipse_264.png'
import av265 from '../assets/images/avatars/Ellipse_265.png'
import av266 from '../assets/images/avatars/Ellipse_266.png'
import av267 from '../assets/images/avatars/Ellipse_267.png'
import av268 from '../assets/images/avatars/Ellipse_268.png'
import av269 from '../assets/images/avatars/Ellipse_269.png'
import av270 from '../assets/images/avatars/Ellipse_270.png'

export default function TestimonialSection() {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 py-28 overflow-hidden">

      <div className="hidden lg:block">
        <div className="absolute left-[8%] top-[25%] w-14 h-14 rounded-full overflow-hidden">
          <img src={av263} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[12%] top-[42%] w-28 h-28 rounded-full overflow-hidden">
          <img src={av268} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[8%] top-[70%] w-14 h-14 rounded-full overflow-hidden">
          <img src={av267} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[4%] top-[52%] w-10 h-10 rounded-full overflow-hidden">
          <img src={av266} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="absolute right-[12%] top-[30%] w-16 h-16 rounded-full overflow-hidden">
          <img src={av270} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[18%] top-[45%] w-12 h-12 rounded-full overflow-hidden">
          <img src={av264} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[18%] top-[65%] w-12 h-12 rounded-full overflow-hidden">
          <img src={av265} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[7%] top-[55%] w-36 h-36 rounded-full overflow-hidden">
          <img src={av269} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">

        <h2 className="text-center text-[42px] md:text-[56px] leading-none font-light text-black">
          <span className="relative inline-block">
            <span className="absolute left-0 bottom-2 h-5 w-full bg-[#D7EEDD] rounded-full"></span>
            <span className="relative">What</span>
          </span>

          {' '}our customer

          <br />

          says{' '}

          <span className="relative inline-block">
            About Us

            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 140 14"
              fill="none"
            >
              <path
                d="M2 10C35 2 80 14 138 6"
                stroke="#F2B63D"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <div className="relative mt-12 w-full max-w-[560px] rounded-[32px] bg-[#D7EEDD] px-10 py-10 text-center">

          <span className="absolute left-6 top-2 text-[70px] leading-none text-[#C6CEC6] font-serif">
            ❝
          </span>

          <p className="text-[#000000]-400 text-sm md:text-base leading-8">
            Elementum delivered the site within the timeline as they
            requested. In the end, the client found a 50% increase
            in traffic within days since its launch. They also had
            an impressive ability to use technologies that the company
            hadn&apos;t used, which have also proved to be easy to use
            and reliable.
          </p>

          <span className="absolute right-6 bottom-0 text-[70px] leading-none text-[#C6CEC6] font-serif">
            ❞
          </span>
        </div>
      </div>

      <div className="lg:hidden flex justify-center gap-3 flex-wrap mt-10">
        {[av263, av264, av265, av266, av267, av268, av269, av270].map(
          (img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
          )
        )}
      </div>
    </section>
  )
}