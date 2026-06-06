import workingImg from "../assets/images/image_348__1_.png";

export default function ProgressSection() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 py-16 overflow-hidden">
      <svg
        className="absolute left-[20%] top-[18%] hidden lg:block pointer-events-none"
        width="900"
        height="260"
        viewBox="0 0 900 260"
        fill="none"
      >
        <path
          d="M0 150 C180 30 280 250 500 120 C650 40 750 20 900 70"
          stroke="#F46B6B"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative flex justify-center lg:justify-start lg:pt-10">
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
            <div className="absolute -left-10 top-10 z-0">
              <svg width="110" height="110" viewBox="0 0 110 110">
                <polygon points="55,0 110,110 0,110" fill="#F86E6E" />
              </svg>
            </div>

            <div className="absolute right-[-10px] bottom-[-40px] z-0">
              <svg width="130" height="130" viewBox="0 0 130 130">
                <polygon points="65,0 130,130 0,130" fill="#F86E6E" />
              </svg>
            </div>

            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <img
                src={workingImg}
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[520px]">
          <h2 className="font-gerbil text-[48px] md:text-[72px] leading-[0.92] text-black">
            <span className="highlight-green">See</span> how we can
            <br />
            help you <span className="underline-squiggle">progress</span>
          </h2>

          <p className="font-satoshi mt-8 text-[15px] leading-7 text-[#555]">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social research.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-4 font-satoshi text-sm"
          >
            Read more
            <span className="w-20 h-[1px] bg-black" />
          </a>
        </div>
      </div>
    </section>
  );
}