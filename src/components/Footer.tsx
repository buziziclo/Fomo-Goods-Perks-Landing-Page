import { Gift, CreditCard, Box, Gamepad, Star } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Final Benefits Summary Bar */}
      <section className="bg-[#040768] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-outfit text-2xl font-bold mb-8 text-[#FFB800]">
            Endless Rewards, Giveaways, Bonuses, Savings & Surprises with Fomo Perks
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <Gift className="w-8 h-8 text-[#F00480] mb-3" />
              <span className="font-satoshi text-sm font-medium">Monthly Rewards</span>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="w-8 h-8 text-[#F00480] mb-3" />
              <span className="font-satoshi text-sm font-medium">Gift Card Giveaways</span>
            </div>
            <div className="flex flex-col items-center">
              <Box className="w-8 h-8 text-[#F00480] mb-3" />
              <span className="font-satoshi text-sm font-medium">Product Giveaways</span>
            </div>
            <div className="flex flex-col items-center">
              <Gamepad className="w-8 h-8 text-[#F00480] mb-3" />
              <span className="font-satoshi text-sm font-medium">Games & Challenges</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-[#F00480] mb-3" />
              <span className="font-satoshi text-sm font-medium">Surprises & Bonuses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-satoshi text-xs text-gray-400 mb-8 leading-relaxed max-w-4xl mx-auto">
            All product names, company names, and logos depicted are (1) the property of their respective holders, (2) used solely for illustrative purposes, and (3) not meant to imply any affiliation with or endorsement by their holders. Participating offers subject to change. Fomo Perks is an ongoing customer loyalty, connection, and community resource created by Fomo Goods for select Fomo Goods customers over the age of eighteen. Enrollment in Fomo Perks by Fomo Goods and online/mobile redemption by enrolled customers are required to access/use Fomo Perks benefits. Fomo Perks is not a one-time promotion or inducement to contract/purchase. Reward Dollars are not cash, rebates, gift cards, or gift certificates, and have no cash value.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 font-satoshi text-sm font-medium text-gray-600">
            <a href="#login-endpoint" className="hover:text-[#F00480] transition-colors">Reward Login</a>
            <a href="#support" className="hover:text-[#F00480] transition-colors">Support</a>
            <a href="#terms" className="hover:text-[#F00480] transition-colors">Program Terms</a>
            <a href="#privacy" className="hover:text-[#F00480] transition-colors">Privacy</a>
          </div>
          
          <p className="font-satoshi text-sm text-gray-500">
            &copy; 2026 Fomo Goods Perks. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
