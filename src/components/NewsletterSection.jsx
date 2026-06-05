export default function NewsletterSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#D7EEDD" }}
    >
      <div className="absolute left-1/2 top-8 -translate-x-1/2">
        <svg
          width="160"
          height="80"
          viewBox="0 0 160 80"
          fill="none"
        >
          <path
            d="M40 0C40 30 0 30 0 60"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M90 0C90 30 50 30 50 60"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute right-[8%] top-[120px] hidden lg:block">
        <div
          className="w-[80px] h-[100px] bg-[#8E4EDB]"
          style={{
            borderTopLeftRadius: "100px",
            borderBottomLeftRadius: "100px",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-16">

        <div className="text-center">

          <h2 className="font-gerbil text-black leading-[0.9] text-[52px] md:text-[72px]">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p className="font-satoshi text-[14px] mt-4 text-black/70">
            To make your stay special and even more memorable
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
            Subscribe Now
          </button>
        </div>

        <div className="mt-16">
          <div className="h-px bg-black/20 w-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12">

          <div>
            <h4 className="font-satoshi text-lg mb-6">
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
            <h4 className="font-satoshi text-lg mb-6">
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
            <h4 className="font-satoshi text-lg mb-6">
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
            <h4 className="font-satoshi text-lg mb-6">
              Terms & Policies
            </h4>

            <div className="space-y-4 text-sm text-black/70">
              <p>
                1498W Fulton ste,
                <br />
                STE 2D Chicago,
                IL 63867.
              </p>

              <p>(123) 45678900</p>

              <p>info@elementum.com</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-20 text-xs text-black/50">
          ©2023 Elementum. All rights reserved
        </div>

      </div>
    </section>
  )
}