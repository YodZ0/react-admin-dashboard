import { motion } from "framer-motion";
import { Eye, ShoppingBag, Users, DollarSign } from "lucide-react";

import Header from "../components/common/Header.jsx";
import OverviewCard from "../components/common/OverviewCard.jsx";

import RevenueChart from "../components/analitics/RevenueChart.jsx";
import CustomerSegmentation from "../components/analitics/CustomerSegmentation.jsx";
import AnaliticsInsights from "../components/analitics/AnaliticsInsights.jsx";

const OVERVIEW_DATA = [
  {
    name: "Revenue",
    value: "$1,234,567",
    change: 12.5,
    icon: DollarSign,
  },
  { name: "Users", value: "2,345", change: 8.3, icon: Users },
  {
    name: "Orders",
    value: "45,678",
    change: -3.2,
    icon: ShoppingBag,
  },
  {
    name: "Page views",
    value: "765,432",
    change: 15.7,
    icon: Eye,
  },
];

export default function AnaliticsPage() {
  return (
    <div className="relative flex-1 overflow-auto z-10">
      <Header title="Analitics Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* OVERVIEW CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {OVERVIEW_DATA.map((item, index) => (
            <OverviewCard
              key={index}
              name={item.name}
              value={item.value}
              change={item.change}
              icon={item.icon}
            />
          ))}
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <RevenueChart />
          <CustomerSegmentation />
          <AnaliticsInsights />
        </div>
      </main>
    </div>
  );
}
