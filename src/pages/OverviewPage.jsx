import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";

import Header from "../components/common/Header.jsx";
import StatCard from "../components/common/StatCard.jsx";
import SalesOverviewChart from "../components/overview/SalesOverviewChart.jsx";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart.jsx";
import SalesChannelChart from "../components/overview/SalesChannelChart.jsx";

export default function OverviewPage() {
  return (
    <div className="relative flex-1 overflow-auto z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total stat"
            icon={Zap}
            value={"$12,345"}
            color={"#6366F1"}
          />
          <StatCard
            name="New users"
            icon={Users}
            value={"1,234"}
            color={"#d1ed47"}
          />
          <StatCard
            name="Total products"
            icon={ShoppingBag}
            value={"456"}
            color={"#f22760"}
          />
          <StatCard
            name="Convertial rate"
            icon={BarChart2}
            value={"12.3%"}
            color={"#78f564"}
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}
