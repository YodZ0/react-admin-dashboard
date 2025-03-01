import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const SALES_TREND_DATA = [
  { name: "Jan", sales: 3200 },
  { name: "Feb", sales: 2200 },
  { name: "Mar", sales: 4700 },
  { name: "Apr", sales: 5600 },
  { name: "May", sales: 3400 },
  { name: "Jun", sales: 2722 },
  { name: "Jul", sales: 4100 },
  { name: "Aug", sales: 2824 },
  { name: "Sep" },
  { name: "Oct" },
  { name: "Nov" },
  { name: "Dec" },
];

export default function SalesTrendChart() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales overview</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={SALES_TREND_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey={"sales"}
              stroke="#b93dcc"
              strokeWidth={3}
              dot={{ fill: "#b93dcc", r: 3, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
