import av255 from "../assets/images/avatars/Ellipse_255.png";
import av256 from "../assets/images/avatars/Ellipse_256.png";
import av257 from "../assets/images/avatars/Ellipse_257.png";
import av258 from "../assets/images/avatars/Ellipse_258.png";
import av259 from "../assets/images/avatars/Ellipse_259.png";
import av260 from "../assets/images/avatars/Ellipse_260.png";
import av261 from "../assets/images/avatars/Ellipse_261.png";
import av262 from "../assets/images/avatars/Ellipse_262.png";

const avatars = [
  {
    id: 1,
    src: av255,
    style: {
      width: 88,
      left: "8%",
      top: "60px",
    },
  },
  {
    id: 2,
    src: av256,
    style: {
      width: 82,
      left: "16%",
      top: "20px",
    },
  },
  {
    id: 3,
    src: av262,
    style: {
      width: 92,
      left: "31%",
      top: "-10px",
    },
  },
  {
    id: 4,
    src: av257,
    style: {
      width: 82,
      left: "43%",
      top: "80px",
    },
  },
  {
    id: 5,
    src: av258,
    style: {
      width: 92,
      left: "56%",
      top: "10px",
    },
  },
  {
    id: 6,
    src: av259,
    style: {
      width: 88,
      left: "66%",
      top: "40px",
    },
  },
  {
    id: 7,
    src: av260,
    style: {
      width: 96,
      left: "80%",
      top: "5px",
    },
  },
  {
    id: 8,
    src: av261,
    style: {
      width: 82,
      left: "92%",
      top: "55px",
    },
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-10 md:pt-12">
      <div
        className="absolute top-4 right-10 md:right-16 w-12 h-16 md:w-14 md:h-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 56 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5 C30-5 60 10 50 35 C40 60 15 75 5 60 C-5 45 -10 15 10 5Z"
            fill="#9B59B6"
            opacity="0.85"
          />
        </svg>
      </div>

      <div
        className="absolute left-0 top-1/3 w-10 h-32 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 40 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5 C40 20 0 40 20 60 C40 80 0 100 20 115"
            stroke="#E8474C"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-gerbil font-normal text-[52px] sm:text-[68px] md:text-[84px] lg:text-[96px] leading-[0.92] text-brand-dark tracking-[-0.03em]">
          The <span className="underline-squiggle">thinkers</span> and
          <br className="hidden sm:block" /> doers were{" "}
          <span className="highlight-pink">changing</span>
          <br className="hidden sm:block" /> the{" "}
          <span className="highlight-green">status</span> Quo with
        </h1>

        <p className="mt-8 font-sans text-sm md:text-[15px] text-brand-gray max-w-lg mx-auto leading-7">
          We are a team of strategists, designers communicators, researchers.
          Togsether, we belive that progress only hghtappens when you refuse to
          play things safe.
        </p>
      </div>

      <div
        className="hidden md:block relative max-w-[1100px] mx-auto mt-16"
        style={{ height: "200px" }}
      >
        {avatars.map((avatar) => (
          <img
            key={avatar.id}
            src={avatar.src}
            alt={avatar.alt}
            className="absolute rounded-full object-cover"
            style={{
              width: avatar.style.width,
              height: avatar.style.width,
              left: avatar.style.left,
              top: avatar.style.top,
              transform: "translateX(-50%)",
            }}
          />
        ))}
      </div>

      <div
        className="sm:hidden flex gap-3 overflow-x-auto px-6 mt-8 pb-6 scrollbar-hide"
        aria-label="Team members"
      >
        {avatars.map((avatar) => (
          <img
            key={avatar.id}
            src={avatar.src}
            alt={avatar.alt}
            loading="lazy"
            className="rounded-full border-2 border-white shadow-md object-cover shrink-0"
            style={{ width: 64, height: 64 }}
          />
        ))}
      </div>
    </section>
  );
}
