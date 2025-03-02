import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const SEGMENTATION_DATA = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfation", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

export default function CustomerSegmentation() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Customer segmentation
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <RadarChart
            data={SEGMENTATION_DATA}
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey={"subject"} stroke="#9CA3AF" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9CA3AF" />
            <Radar
              name="Segment A"
              dataKey={"A"}
              stroke="#f018b6"
              fill="#b265cf"
              fillOpacity={0.5}
            />
            <Radar
              name="Segment B"
              dataKey={"B"}
              stroke="#0ce8c3"
              fill="#41c4be"
              fillOpacity={0.5}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
