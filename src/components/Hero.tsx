interface HeroProps {
  onLoginClick: () => void;
  onHelpClick: () => void;
}

export default function Hero({ onLoginClick, onHelpClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#040768] to-[#0A0F3C] text-white py-20 px-6 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/shopping-friends/1920/1080?blur=2')" }}
      />
      
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          fomo perks<span className="text-[#FFB800]">.</span>
        </h1>
        <p className="font-satoshi text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">
          Endless Rewards, Endless Savings!
        </p>

        {/* Login Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Phone or Email</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F00480]"
                placeholder="Enter your phone or email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F00480]"
                placeholder="Enter your password"
              />
            </div>
            <button 
              type="button"
              onClick={onLoginClick}
              className="mt-2 w-full bg-[#040768] hover:bg-[#0A0F3C] text-white font-bold py-3 px-6 rounded-full transition-colors flex justify-center items-center gap-2"
            >
              LOG IN &rarr;
            </button>
            <div className="mt-4 text-center text-sm text-white/70">
              <p>First time? Your temporary password is your zip code</p>
              <button 
                type="button"
                onClick={onHelpClick}
                className="text-[#FFB800] hover:underline mt-1"
              >
                Need help logging in?
              </button>
            </div>
          </form>
        </div>

        {/* Non-member CTA */}
        <div className="mt-12">
          <a 
            href="#activate" 
            className="text-[#F00480] font-bold text-lg hover:text-[#D00370] transition-colors flex items-center gap-2"
          >
            Not a member yet? Activate your FREE month &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
