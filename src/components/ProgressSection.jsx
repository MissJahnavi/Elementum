import workingImg from '../assets/images/image_348__1_.png'
import avatarImg from '../assets/images/avatars/Ellipse_258.png'

export default function ProgressSection() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 py-24 overflow-hidden">

      <svg
        className="absolute left-[35%] top-[10%] hidden lg:block"
        width="700"
        height="220"
        viewBox="0 0 700 220"
        fill="none"
      >
        <path
          d="M0 120 C120 30 180 200 320 140 C460 80 500 -20 700 40"
          stroke="#F46B6B"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        <div className="relative flex justify-center lg:justify-start">

          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">

            <div className="absolute -left-8 top-6 z-0">
              <svg width="90" height="90" viewBox="0 0 90 90">
                <polygon
                  points="45,0 90,90 0,90"
                  fill="#F86E6E"
                />
              </svg>
            </div>

            <div className="absolute right-0 bottom-[-30px] z-0">
              <svg width="110" height="110" viewBox="0 0 110 110">
                <polygon
                  points="55,0 110,110 0,110"
                  fill="#F86E6E"
                />
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

        <div className="max-w-[420px]">

          <h2 className="font-gerbil text-[42px] md:text-[64px] leading-[0.92] text-black">

            <span className="highlight-green">
              See
            </span>{' '}

            how we can           

            help you{' '}

            <span className="underline-squiggle">
              progress
            </span>
          </h2>

          <p className="font-satoshi mt-5 text-[15px] leading-7 text-[#555]">
            We add a layer of fearless insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design digital, comms and social
            research.
          </p>

        
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-4 font-satoshi text-sm"
          >
            Read more
            <span className="w-20 h-[1px] bg-black" />
          </a>

        </div>
      </div>
    </section>
  )
}