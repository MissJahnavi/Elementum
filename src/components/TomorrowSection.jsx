import meetingImg from '../assets/images/image_348.png'

export default function TomorrowSection() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 pt-12 pb-28 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[650px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,180,180,0.25) 0%, rgba(255,180,180,0.12) 35%, transparent 70%)',
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-6 items-start">
        <div className="pt-16 lg:pt-20">
          <h2 className="font-gerbil text-[56px] md:text-[72px] leading-[0.92] text-black">
            <span className="underline-squiggle">Tomorrow</span>{' '}
            should
            <br />
            be better than{' '}
            <span className="highlight-green">today</span>
          </h2>

          <p className="font-satoshi mt-8 max-w-[470px] text-[#555] text-[15px] leading-8">
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-4 font-satoshi text-[14px]"
          >
            Read more
            <span className="w-16 h-[1px] bg-black" />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[380px] h-[380px]">
            <div className="absolute top-8 right-0 w-28 h-28 bg-[#F86E6E] rotate-12 z-0" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <img
                src={meetingImg}
                alt="Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
