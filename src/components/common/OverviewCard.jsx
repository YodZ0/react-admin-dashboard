import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OverviewCard({ name, value, change, icon: Icon }) {
  return (
    <motion.div
      className="bg-gray-800 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-400">{name}</h3>
            <p className="mt-1 text-xl font-semibold text-gray-100">{value}</p>
          </div>

          <div
            className={`p-3 rounded-full ${
              change >= 0 ? "bg-green-500/40" : "bg-red-500/40"
            }`}
          >
            <Icon
              size={20}
              className={`${change >= 0 ? "text-green-500" : "text-red-500"}`}
            />
          </div>
        </div>
        <div
          className={`mt-4 flex items-center ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change >= 0 ? (
            <ArrowUpRight size={20} />
          ) : (
            <ArrowDownRight size={20} />
          )}
          <span className="ml-1 text-sm font-medium">{Math.abs(change)}%</span>
          <span className="ml-2 text-sm text-gray-400">vs last period</span>
        </div>
      </div>
    </motion.div>
  );
}
