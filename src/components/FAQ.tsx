import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How much does Fomo Perks cost?",
      a: "Yes, it's just $14.95/month — and you receive $50 in Reward Dollars every single month. That's a 3.3x return on your membership. Cancel anytime with no penalties."
    },
    {
      q: "I reached Level 5 — is my first month really free?",
      a: "Yes! As a Level 5 reward, your first month is completely free with no credit card required. After your free month, it's $14.95/month and you can cancel anytime."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes! There are no contracts, no commitments, and no cancellation fees. You can cancel directly from your account or by contacting our support team."
    },
    {
      q: "How do I use my Reward Dollars?",
      a: "Yes! Once logged in, browse deals by category — shopping, dining, groceries, travel, and more. Click any deal to redeem your Reward Dollars. It works at over 500,000 locations nationwide."
    },
    {
      q: "When do I receive my Reward Dollars?",
      a: "Yes! Your Reward Dollars are deposited immediately when you sign up or when your monthly billing renews. They're ready to use right away."
    },
    {
      q: "Are the giveaways real?",
      a: "Yes! We run daily, weekly, and monthly giveaways for gift cards, popular gadgets, and big prizes. Every active member is automatically entered. Winners are announced in the Fomo Goods community."
    },
    {
      q: "What if I'm already a Fomo Perks member and reached Level 5?",
      a: "Yes! You still receive your $250 Reward Dollars bonus. Just log in at the top of this page and the bonus will be applied to your account automatically."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[#FFF9F0]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center text-[#040768] mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-outfit font-bold text-lg text-[#040768] pr-8">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#F00480] transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-satoshi text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
