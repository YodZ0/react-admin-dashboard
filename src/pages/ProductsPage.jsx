import { motion } from "framer-motion";
import { Box, DollarSign, TrendingUp, TriangleAlert } from "lucide-react";

import Header from "../components/common/Header.jsx";
import StatCard from "../components/common/StatCard.jsx";

import CategoryDistribution from "../components/overview/CategoryDistributionChart.jsx";
import ProductsTable from "../components/products/ProductsTable.jsx";
import SalesTrendChart from "../components/products/SalesTrendChart.jsx";

export default function ProductsPage() {
  return (
    <div className="relative flex-1 overflow-auto z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STAT CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Box}
            value={"4,321"}
            color={"#6366F1"}
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={"1,234"}
            color={"#f3fa2a"}
          />
          <StatCard
            name="Low Stock"
            icon={TriangleAlert}
            value={"23"}
            color={"#faaa2a"}
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$462,732"}
            color={"#78f564"}
          />
        </motion.div>
        <ProductsTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistribution />
        </div>
      </main>
    </div>
  );
}
