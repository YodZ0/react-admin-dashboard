import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const REVENUE_DATA = [
  { month: "Jan", revenue: 400, target: 350 },
  { month: "Feb", revenue: 420, target: 380 },
  { month: "Mar", revenue: 430, target: 400 },
  { month: "Apr", revenue: 500, target: 450 },
  { month: "May", revenue: 380, target: 350 },
  { month: "Jun", revenue: 300, target: 380 },
  { month: "Jul", revenue: 450, target: 400 },
  { month: "Aug", target: 600 },
  { month: "Sep", target: 650 },
  { month: "Oct", target: 700 },
  { month: "Nov", target: 700 },
  { month: "Dec", target: 900 },
];

export default function RevenueChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This month");
  const [opacity, setOpacity] = useState({ target: 0.4, revenue: 0.4 });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 0.7 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 0.4 }));
  };

  return (
    <motion.div
      className="bg-gray-800 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl lg:col-span-2 p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-100">
          Revenue VS Target
        </h2>
        <select
          className="bg-gray-700 text-gray-100 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This week</option>
          <option>This month</option>
          <option>This quarter</option>
          <option>This year</option>
        </select>
      </div>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart data={REVENUE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"month"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
            />
            <Legend
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <Area
              type="monotone"
              dataKey={"target"}
              fill="#b265cf"
              fillOpacity={opacity.target}
              stroke="#f018b6"
            />
            <Area
              type="monotone"
              dataKey={"revenue"}
              fill="#41c4be"
              fillOpacity={opacity.revenue}
              stroke="#0ce8c3"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
