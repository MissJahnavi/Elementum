export default function NewsletterSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#DCEFD9" }}
    >
      <div className="absolute left-1/2 top-6 -translate-x-1/2 pointer-events-none">
        <svg
          width="220"
          height="110"
          viewBox="0 0 220 110"
          fill="none"
        >
          <path
            d="M50 0C50 40 0 40 0 80"
            stroke="#F46B6B"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M120 0C120 40 70 40 70 80"
            stroke="#F46B6B"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute right-[6%] top-[100px] hidden lg:block">
        <div
          className="w-[110px] h-[140px] bg-[#8E4EDB]"
          style={{
            borderTopLeftRadius: "140px",
            borderBottomLeftRadius: "140px",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pt-28 pb-20">
        <div className="text-center">
          <h2 className="font-gerbil text-black leading-[0.9] text-[56px] md:text-[80px]">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p className="font-satoshi text-[15px] mt-5 text-black/70">
            To make your stay special and even more memorable
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
            Subscribe Now
          </button>
        </div>

        <div className="mt-20">
          <div className="h-px bg-black/20 w-full" />
        </div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-24 mt-14">
          <div>
            <h4 className="font-satoshi font-medium text-lg mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-sm text-black/70">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-satoshi font-medium text-lg mb-6">
              Terms & Policies
            </h4>

            <ul className="space-y-4 text-sm text-black/70">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h4 className="font-satoshi font-medium text-lg mb-6">
              Follow Us
            </h4>

            <ul className="space-y-4 text-sm text-black/70">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4 className="font-satoshi font-medium text-lg mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-black/70">
              <p>
                1498W Fulton Ste,
                <br />
                STE 2D Chicago,
                IL 63867
              </p>

              <p>(123) 45678900</p>

              <p>info@elementum.com</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 text-xs text-black/50">
          ©2023 Elementum. All rights reserved
        </div>
      </div>
    </section>
  );
}