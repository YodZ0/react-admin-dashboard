import {
  LayoutDashboard,
  ContactRound,
  SquareUserRound,
  Menu,
  Settings,
  ShoppingBag,
  DollarSign,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    color: "#6366F1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#67f5e7",
    path: "/products",
  },
  {
    name: "Customers",
    icon: ContactRound,
    color: "#a95ef2",
    path: "/customers",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#78f564",
    path: "/sales",
  },
  {
    name: "Profile",
    icon: SquareUserRound,
    color: "#f7f563",
    path: "/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#b2b0b5",
    path: "/settings",
  },
];

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-100 ease-linear flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg mb-2 hover:bg-gray-700 transition-colors">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
