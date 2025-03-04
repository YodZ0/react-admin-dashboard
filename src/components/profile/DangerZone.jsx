import { Trash } from "lucide-react";
import { motion } from "framer-motion";

export default function DangerZone() {
  return (
    <motion.div
      className="bg-red-900/50 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <Trash className="text-red-400 mr-3" size={24} />
        <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
      </div>
      <p className="text-gray-300 mb-4">
        Permanently delete your account and all your content.
      </p>
      <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded transition duration-200">
        Delete account
      </button>
    </motion.div>
  );
}
