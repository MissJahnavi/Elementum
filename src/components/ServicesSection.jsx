import ServiceRow from './ServiceRow'

const services = [
  {
    category: 'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-24 overflow-hidden"
    >
      <div className="absolute top-[80px] right-[-80px] hidden lg:block">
        <svg
          width="500"
          height="220"
          viewBox="0 0 500 220"
          fill="none"
        >
          <path
            d="
              M0 170
              C40 220,80 30,150 60
              C230 95,280 210,370 180
              C450 150,490 70,500 0
            "
            stroke="#F46B6B"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[520px]">
        <h2 className="text-black font-light leading-[0.92] text-[52px] md:text-[72px] lg:text-[78px]">
          What we{' '}
          <span className="relative inline-flex items-center">
            <span className="absolute inset-0 bg-[#D7EEDD] rounded-full"></span>
            <span className="relative px-3">can</span>
          </span>
          <br />

          <span className="relative inline-block">
            offer you!

            <svg
              className="absolute -bottom-4 left-0 w-full"
              viewBox="0 0 240 20"
              fill="none"
            >
              <path
                d="M5 14 C60 5 130 18 235 10"
                stroke="#F2B63D"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      <div className="mt-16">
        {services.map((service, index) => (
          <ServiceRow
            key={index}
            category={service.category}
            title={service.title}
          />
        ))}
      </div>
    </section>
  )
}