import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const SALES_DATA = [
  { name: "Jan", sales: 4200, avg: 100 },
  { name: "Feb", sales: 3800, avg: 120 },
  { name: "Mar", sales: 5100, avg: 130 },
  { name: "Apr", sales: 4600, avg: 110 },
  { name: "May", sales: 5400, avg: 100 },
  { name: "Jun", sales: 5722, avg: 150 },
  { name: "Jul", sales: 4100, avg: 120 },
  { name: "Aug", sales: 6824, avg: 90 },
  { name: "Sep", sales: 8972, avg: 140 },
  { name: "Oct", sales: 5342, avg: 130 },
  { name: "Nov", sales: 3722, avg: 160 },
  { name: "Dec", sales: 3768, avg: 170 },
];

export default function SalesOverviewChart() {
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
          <LineChart data={SALES_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9CA3AF" />
            <YAxis yAxisId="left" stroke="#9CA3AF" />
            <YAxis yAxisId="right" stroke="#9CA3AF" orientation="right" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", r: 3, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="avg"
              stroke="#f22760"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: "#f22760", r: 3, strokeWidth: 1 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
