import ServiceRow from "./ServiceRow";

const services = [
  {
    category: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    category: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    category: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-20 overflow-hidden"
    >
      <div className="absolute top-[70px] right-[-40px] hidden lg:block pointer-events-none">
        <svg
          width="380"
          height="180"
          viewBox="0 0 380 180"
          fill="none"
        >
          <path
            d="
              M0 140
              C40 180,70 40,130 60
              C190 80,230 170,300 150
              C350 135,370 70,380 10
            "
            stroke="#F46B6B"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[520px]">
        <h2 className="font-gerbil text-black leading-[0.92] text-[48px] md:text-[64px] lg:text-[72px] font-normal">
          What we{" "}
          <span className="relative inline-flex items-center">
            <span className="absolute inset-0 bg-[#D7EEDD] rounded-full scale-x-[1.15] scale-y-[0.9]" />
            <span className="relative px-2">can</span>
          </span>

          <br />

          <span className="relative inline-block">
            offer you!

            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 240 20"
              fill="none"
            >
              <path
                d="M5 12 C60 5 130 16 235 10"
                stroke="#F2B63D"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      <div className="mt-12">
        {services.map((service, index) => (
          <ServiceRow
            key={index}
            category={service.category}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
}