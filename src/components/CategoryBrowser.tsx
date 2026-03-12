import { useState } from "react";

const categories = [
  "Giveaways", "Shopping", "Dining", "Auto", "Travel", "Groceries", "Fun", "Bonuses"
];

const dealsData: Record<string, { title: string; image: string }[]> = {
  "Giveaways": [
    { title: "$10 Coffee Giveaway", image: "coffee" },
    { title: "$50 Rides", image: "taxi" },
    { title: "$50 Dining", image: "restaurant" },
    { title: "$100 Grocery", image: "grocery" },
    { title: "$100 Shopping", image: "shopping" },
    { title: "$1000 Golden", image: "gold" }
  ],
  "Shopping": [
    { title: "20% Off Homegoods", image: "home" },
    { title: "50% Off Furniture", image: "sofa" },
    { title: "15% Off Online", image: "laptop" },
    { title: "15% Off Electronics", image: "tv" },
    { title: "20% Off", image: "discount" },
    { title: "30% Off", image: "sale" }
  ],
  "Dining": [
    { title: "15% Off", image: "food" },
    { title: "BOGO Sundae", image: "icecream" },
    { title: "Free Sandwich", image: "sandwich" },
    { title: "BOGO Sub", image: "sub" },
    { title: "Free Appetizer", image: "appetizer" },
    { title: "Free Burger", image: "burger" }
  ],
  "Auto": [
    { title: "$10 Off Oil Change", image: "oil" },
    { title: "10% Off Service", image: "wrench" },
    { title: "$15 Off Oil Change", image: "oil2" },
    { title: "$100 Off Tires", image: "tire" },
    { title: "15% Off", image: "discount" },
    { title: "20% Off Brakes", image: "brakes" }
  ],
  "Travel": [
    { title: "$100 Off 3-Day Stay", image: "hotel" },
    { title: "10% Off Hotels", image: "bed" },
    { title: "20% Off Rental", image: "car" },
    { title: "10% Off Flights", image: "plane" },
    { title: "10% Off Resorts", image: "resort" },
    { title: "$10/Day Rental", image: "keys" }
  ],
  "Groceries": [
    { title: "$5 Off Claritin", image: "pills" },
    { title: "$4 Off Skin Care", image: "lotion" },
    { title: "$1 Off Detergent", image: "soap" },
    { title: "$1 Off Mouth Wash", image: "mouthwash" },
    { title: "$1 Off Cereal", image: "cereal" },
    { title: "$5 Off Hair Care", image: "shampoo" }
  ],
  "Fun": [
    { title: "25% Off Tickets", image: "ticket" },
    { title: "$100 Off Clubs", image: "club" },
    { title: "$60 Off Theme Parks", image: "rollercoaster" },
    { title: "$20 Off Gym", image: "dumbbell" },
    { title: "50% Off Bowling", image: "bowling" },
    { title: "$30 Off Concerts", image: "music" }
  ],
  "Bonuses": [
    { title: "Welcome Bonus", image: "welcome" },
    { title: "Birthday Bonus", image: "cake" },
    { title: "Anytime Bonus", image: "gift" },
    { title: "Summer Bonus", image: "sun" },
    { title: "Thanksgiving Bonus", image: "turkey" },
    { title: "Anniversary Bonus", image: "ring" }
  ]
};

export default function CategoryBrowser() {
  const [activeTab, setActiveTab] = useState("Giveaways");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm transition-colors ${
                activeTab === cat
                  ? "bg-[#F00480] text-white"
                  : "bg-white text-[#040768] border border-[#040768]/20 hover:bg-[#040768]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {dealsData[activeTab].map((deal, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#F0F0F0] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${deal.image}/400/300`} 
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-outfit font-bold text-gray-900">{deal.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
