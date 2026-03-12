export default function Conversion() {
  return (
    <section id="activate" className="bg-gradient-to-r from-[#FFB800] to-[#FF8C00] py-24 px-6 text-center relative overflow-hidden">
      {/* Confetti/Sparkle Accents */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/50 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-6 h-6 rounded-full bg-white/40 animate-pulse delay-100" />
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-white/60 animate-pulse delay-300" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#040768] mb-6">
          🎉 You've Unlocked Fomo Perks!
        </h2>
        <p className="font-satoshi text-xl text-[#040768]/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Congratulations on reaching Level 5 in the Fomo Goods community. As a reward for your engagement, you've earned:
        </p>
        
        <ul className="text-left max-w-md mx-auto mb-10 space-y-4 font-satoshi text-lg text-[#040768] font-medium">
          <li className="flex items-center gap-3">
            <span className="bg-white text-[#F00480] rounded-full p-1 shadow-sm">✓</span>
            $250 in Reward Dollars
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-white text-[#F00480] rounded-full p-1 shadow-sm">✓</span>
            A FREE month of Fomo Perks (no credit card required to start)
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-white text-[#F00480] rounded-full p-1 shadow-sm">✓</span>
            Access to 500,000+ savings locations
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-white text-[#F00480] rounded-full p-1 shadow-sm">✓</span>
            Entry into all giveaways and prize draws
          </li>
        </ul>

        <a 
          href="#activate-endpoint"
          className="inline-block bg-[#040768] hover:bg-[#0A0F3C] text-white font-bold text-xl py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 mb-6"
        >
          ACTIVATE MY FREE MONTH &rarr;
        </a>
        
        <p className="text-sm text-[#040768]/80 font-medium mb-8">
          No credit card required for your free month. $14.95/month after that. Cancel anytime.
        </p>
        
        <p className="text-xs text-[#040768]/60">
          Already a Perks member? Log in above to claim your $250 Reward Dollars bonus.
        </p>
      </div>
    </section>
  );
}
