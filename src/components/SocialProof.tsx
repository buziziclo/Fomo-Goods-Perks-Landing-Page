import { Star } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      text: "I saved $47 on groceries in my first week. The membership paid for itself three times over before the month was up.",
      author: "Sarah M."
    },
    {
      text: "Won a $50 gift card in the monthly giveaway. I almost didn't sign up when I reached Level 5 — so glad I did.",
      author: "James R."
    },
    {
      text: "The dining deals alone are worth it. My wife and I save every time we go out now. It's like having a coupon book that never runs out.",
      author: "Michael T."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center text-[#040768] mb-16">
          What Our Members Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col">
              <div className="flex text-[#FFB800] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="font-satoshi text-gray-700 text-lg mb-6 flex-grow italic">
                "{t.text}"
              </p>
              <p className="font-outfit font-bold text-[#040768]">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
