import av263 from "../assets/images/avatars/Ellipse_263.png";
import av264 from "../assets/images/avatars/Ellipse_264.png";
import av265 from "../assets/images/avatars/Ellipse_265.png";
import av266 from "../assets/images/avatars/Ellipse_266.png";
import av267 from "../assets/images/avatars/Ellipse_267.png";
import av268 from "../assets/images/avatars/Ellipse_268.png";
import av269 from "../assets/images/avatars/Ellipse_269.png";
import av270 from "../assets/images/avatars/Ellipse_270.png";

export default function TestimonialSection() {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 py-24 overflow-hidden">
      <div className="hidden lg:block">
        <div className="absolute left-[10%] top-[22%] w-16 h-16 rounded-full overflow-hidden">
          <img src={av263} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[12%] top-[42%] w-24 h-24 rounded-full overflow-hidden">
          <img src={av268} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[9%] top-[68%] w-16 h-16 rounded-full overflow-hidden">
          <img src={av267} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute left-[5%] top-[52%] w-12 h-12 rounded-full overflow-hidden">
          <img src={av266} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="absolute right-[14%] top-[28%] w-16 h-16 rounded-full overflow-hidden">
          <img src={av270} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[18%] top-[46%] w-12 h-12 rounded-full overflow-hidden">
          <img src={av264} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[18%] top-[66%] w-12 h-12 rounded-full overflow-hidden">
          <img src={av265} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute right-[8%] top-[52%] w-28 h-28 rounded-full overflow-hidden">
          <img src={av269} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-gerbil text-center text-[52px] md:text-[72px] leading-[0.92] text-black">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-2 h-5 bg-[#D7EEDD] rounded-full"></span>
            <span className="relative">What</span>
          </span>{" "}
          our customer
          <br />
          says{" "}
          <span className="relative inline-block">
            About Us
            <svg
              className="absolute -bottom-2 left-0 w-full"
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

        <div className="relative mt-14 w-full max-w-[680px] rounded-[36px] bg-[#D7EEDD] px-12 py-12 text-center">
          <span className="absolute left-8 top-0 text-[90px] leading-none text-[#BEC7BE] font-serif">
            ❝
          </span>

          <p className="text-[#333] text-[15px] md:text-[16px] leading-8 max-w-[520px] mx-auto">
            Elementum delivered the site within the timeline as they
            requested. In the end, the client found a 50% increase in
            traffic within days since its launch. They also had an
            impressive ability to use technologies that the company
            hadn't used, which proved to be easy to use and reliable.
          </p>

          <span className="absolute right-8 bottom-[-15px] text-[90px] leading-none text-[#BEC7BE] font-serif">
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
  );
}