import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const INSIGHTS_DATA = [
  {
    icon: TrendingUp,
    color: "text-green-500",
    insight:
      "Revenue is up 15% compared to last month, driven primarily by successful email compaign.",
  },
  {
    icon: Users,
    color: "text-blue-500",
    insight:
      "Customers retention has improved by 8% following the launch of the new Loyalty program.",
  },
  {
    icon: ShoppingBag,
    color: "text-purple-500",
    insight:
      "Product category 'Electronic' shows highest growth potential based on recent market trends.",
  },
  {
    icon: DollarSign,
    color: "text-yellow-500",
    insight:
      "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
  },
];

export default function AnaliticsInsights() {
  return (
    <motion.div
      className="bg-gray-800 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl lg:col-span-2 p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-100">
        AI-Powered insights
      </h2>
      <div className="space-y-4">
        {INSIGHTS_DATA.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`p-2 ${item.color}`}>
              <item.icon size={20} />
            </div>
            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
