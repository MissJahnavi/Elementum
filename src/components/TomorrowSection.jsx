import meetingImg from '../assets/images/image_348.png'

export default function TomorrowSection() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-6 py-24 overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,180,180,0.25) 0%, rgba(255,180,180,0.12) 35%, transparent 70%)',
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-16 items-start">
        <div className="pt-10">
          <h2 className="font-gerbil text-[48px] md:text-[60px] leading-[0.92] text-black">
            <span className="underline-squiggle">Tomorrow</span>{' '}
            should
            <br />
            be better than{' '}
            <span className="highlight-green">today</span>
          </h2>

          <p className="font-satoshi mt-8 max-w-[430px] text-[#555] text-[15px] leading-8">
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
          <div className="relative w-[300px] h-[300px]">
            <div className="absolute top-10 right-4 w-24 h-24 bg-[#F86E6E] rotate-12 z-0" />
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
