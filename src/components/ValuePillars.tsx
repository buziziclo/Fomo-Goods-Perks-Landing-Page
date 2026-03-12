import { Gift, Star, Snowflake, Gamepad, CreditCard, Box, Sparkles, ShoppingBag, Utensils, ShoppingCart, Ticket } from "lucide-react";

interface ValuePillarsProps {
  onLoginClick: () => void;
}

export default function ValuePillars({ onLoginClick }: ValuePillarsProps) {
  return (
    <div className="bg-white">
      {/* Pillar 1: Earn */}
      <section className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-96 bg-[#FFF9F0] rounded-3xl flex items-center justify-center p-8">
            {/* Illustration Placeholder */}
            <div className="absolute top-1/4 left-1/4 w-48 h-64 bg-white shadow-xl rounded-2xl border border-gray-100 transform -rotate-6 flex flex-col items-center justify-center p-4 z-10">
              <Gift className="w-12 h-12 text-[#F00480] mb-4" />
              <span className="font-outfit font-bold text-center">Birthday Bonus</span>
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-64 bg-white shadow-xl rounded-2xl border border-gray-100 transform rotate-6 flex flex-col items-center justify-center p-4 z-20">
              <Star className="w-12 h-12 text-[#FFB800] mb-4" />
              <span className="font-outfit font-bold text-center">Monthly Rewards</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#040768] mb-6">Earn.</h2>
            <p className="font-satoshi text-lg text-gray-600 mb-8 leading-relaxed">
              Earn <strong className="text-[#F00480]">$50 in Reward Dollars</strong> every single month just for being a member. Plus, keep an eye out for surprise bonuses, seasonal rewards, games, and opportunities to earn even more!
            </p>
            <button 
              onClick={onLoginClick}
              className="border-2 border-[#040768] text-[#040768] hover:bg-[#040768] hover:text-white font-bold py-3 px-8 rounded-full transition-colors mb-10"
            >
              EXPLORE MY REWARDS &rarr;
            </button>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center"><Gift className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Monthly Rewards</span></div>
              <div className="flex flex-col items-center text-center"><Star className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Surprise Bonuses</span></div>
              <div className="flex flex-col items-center text-center"><Snowflake className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Seasonal Bonuses</span></div>
              <div className="flex flex-col items-center text-center"><Gamepad className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Games & Extras</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Play */}
      <section className="py-20 px-6 bg-[#040768]/5 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#040768] mb-6">Play!</h2>
            <p className="font-satoshi text-lg text-gray-600 mb-8 leading-relaxed">
              Enter daily, weekly, and monthly giveaways for gift cards, trending gadgets, and even a <strong className="text-[#F00480]">FREE 65" Smart TV</strong>. Plus games, challenges, and surprises that keep every month exciting.
            </p>
            <button 
              onClick={onLoginClick}
              className="border-2 border-[#040768] text-[#040768] hover:bg-[#040768] hover:text-white font-bold py-3 px-8 rounded-full transition-colors mb-10"
            >
              LOGIN & PLAY &rarr;
            </button>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center"><CreditCard className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Gift Card Giveaways</span></div>
              <div className="flex flex-col items-center text-center"><Box className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Product Giveaways</span></div>
              <div className="flex flex-col items-center text-center"><Star className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Bonus Giveaways</span></div>
              <div className="flex flex-col items-center text-center"><Sparkles className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Surprise Extras</span></div>
            </div>
          </div>

          <div className="relative h-96 bg-white rounded-3xl flex items-center justify-center p-8 shadow-sm">
            <div className="absolute top-1/4 right-1/4 w-48 h-64 bg-gradient-to-br from-[#F00480] to-[#D00370] text-white shadow-xl rounded-2xl border border-white/20 transform rotate-6 flex flex-col items-center justify-center p-4 z-10">
              <span className="font-outfit font-bold text-center text-xl mb-2">$100 Grocery</span>
              <span className="text-sm opacity-80">Giveaway</span>
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-64 bg-gradient-to-br from-[#040768] to-[#0A0F3C] text-white shadow-xl rounded-2xl border border-white/20 transform -rotate-6 flex flex-col items-center justify-center p-4 z-20">
              <span className="font-outfit font-bold text-center text-xl mb-2">Smart TV</span>
              <span className="text-sm opacity-80">Giveaway</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Save */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-96 bg-[#FFF9F0] rounded-3xl flex items-center justify-center p-8">
            <div className="absolute top-1/4 left-1/4 w-48 h-64 bg-white shadow-xl rounded-2xl border border-gray-100 transform -rotate-6 flex flex-col items-center justify-center p-4 z-10">
              <ShoppingBag className="w-12 h-12 text-[#F00480] mb-4" />
              <span className="font-outfit font-bold text-center">Local Deals</span>
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-64 bg-white shadow-xl rounded-2xl border border-gray-100 transform rotate-6 flex flex-col items-center justify-center p-4 z-20">
              <Utensils className="w-12 h-12 text-[#FFB800] mb-4" />
              <span className="font-outfit font-bold text-center">Dining Savings</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-[#040768] mb-6">Save.</h2>
            <p className="font-satoshi text-lg text-gray-600 mb-8 leading-relaxed">
              Use your Reward Dollars in over <strong className="text-[#F00480]">1,000,000 ways!</strong> Save at restaurants, local shops, popular stores, hotels, grocery stores, and more. Most members tell us their savings cover the membership cost in the first week.
            </p>
            <button 
              onClick={onLoginClick}
              className="border-2 border-[#040768] text-[#040768] hover:bg-[#040768] hover:text-white font-bold py-3 px-8 rounded-full transition-colors mb-10"
            >
              SAVE WITH MY REWARDS &rarr;
            </button>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center"><ShoppingBag className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Shopping Savings</span></div>
              <div className="flex flex-col items-center text-center"><Utensils className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Dining Savings</span></div>
              <div className="flex flex-col items-center text-center"><ShoppingCart className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Grocery Savings</span></div>
              <div className="flex flex-col items-center text-center"><Ticket className="w-6 h-6 text-[#F00480] mb-2"/><span className="text-sm font-medium">Entertainment Savings</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
