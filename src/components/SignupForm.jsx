function SignupForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#eef8f8] pt-36 pb-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-[0_5px_15px_rgba(0,0,0,0.25)]">

          <h2 className="text-4xl font-extrabold text-[#2a2a2a]">
            Join Travora
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Create your account and start your next adventure.
          </p>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-semibold text-[#2a2a2a]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#01959a] focus:ring-2 focus:ring-[#01959a]/30"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-[#2a2a2a]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#01959a] focus:ring-2 focus:ring-[#01959a]/30"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-[#2a2a2a]">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#01959a] focus:ring-2 focus:ring-[#01959a]/30"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-[#2a2a2a]">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#01959a] focus:ring-2 focus:ring-[#01959a]/30"
              />
            </div>

            <button
              className="w-full h-12 rounded-xl bg-[#01959a] hover:bg-[#017b80] text-white font-semibold transition-all duration-300"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full h-12 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition flex items-center justify-center gap-3 font-medium"
            >
              <i className="fa-brands fa-google text-red-500"></i>
              Continue with Google
            </button>

            <p className="text-center text-gray-600 pt-2">
              Already have an account?{" "}
              <a
                href="#"
                className="text-[#01959a] font-semibold hover:underline"
              >
                Login
              </a>
            </p>

          </form>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex flex-col items-center text-center">

          <div className="w-80 h-80 rounded-full bg-[#01959a]/10 flex items-center justify-center shadow-lg">

            <i className="fa-solid fa-earth-americas text-[9rem] text-[#01959a]"></i>

          </div>

          <h3 className="mt-8 text-4xl font-bold text-[#2a2a2a]">
            Explore the World
          </h3>

          <p className="mt-4 max-w-sm text-gray-600 leading-7">
            Discover breathtaking destinations, plan unforgettable journeys,
            and make every trip an adventure with Travora.
          </p>

          <div className="flex gap-8 mt-8 text-[#01959a] text-4xl">
            <i className="fa-solid fa-plane"></i>
            <i className="fa-solid fa-map-location-dot"></i>
            <i className="fa-solid fa-suitcase-rolling"></i>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SignupForm;