import { Gift, MapPin, Trophy } from "lucide-react";

export default function ValueBar() {
  const values = [
    {
      icon: <Gift className="w-8 h-8 text-[#F00480]" />,
      title: "$50 Reward Dollars",
      subtitle: "Every Month"
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#F00480]" />,
      title: "Save at 500,000+",
      subtitle: "Locations"
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#F00480]" />,
      title: "Daily Giveaways",
      subtitle: "& Surprise Bonuses"
    }
  ];

  return (
    <section className="bg-[#FFF9F0] py-12 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-outfit text-2xl md:text-3xl font-bold text-[#040768] mb-10">
          Rewarding Fomo Goods Customers in a Million+ Ways!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-[#F00480]/10">
                {val.icon}
              </div>
              <h3 className="font-outfit font-bold text-xl text-gray-900">{val.title}</h3>
              <p className="font-satoshi text-gray-600">{val.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
