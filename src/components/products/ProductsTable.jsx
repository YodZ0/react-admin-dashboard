import { Edit, Search, Trash, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 134,
    sales: 554,
    img: "",
  },
  {
    id: 2,
    name: "Leather wallet",
    category: "Clothing",
    price: 39.99,
    stock: 89,
    sales: 231,
    img: "",
  },
  {
    id: 3,
    name: "Smart watch",
    category: "Electronics",
    price: 399,
    stock: 56,
    sales: 86,
    img: "",
  },
  {
    id: 4,
    name: "Yoga mat",
    category: "Sports & Outdoors",
    price: 79.9,
    stock: 210,
    sales: 44,
    img: "https://plus.unsplash.com/premium_photo-1709932755399-b61bb0a3aa2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Clean Architecture",
    category: "Books",
    price: 18,
    stock: 12,
    sales: 28,
    img: "https://images.unsplash.com/photo-1601724161617-928285222d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "T-Shirt",
    category: "Clothing",
    price: 5,
    stock: 445,
    sales: 486,
    img: "",
  },
  {
    id: 7,
    name: "Headphones",
    category: "Electornics",
    price: 125,
    stock: 531,
    sales: 672,
    img: "",
  },
  {
    id: 8,
    name: "Boxing guntles",
    category: "Sports & Outdoors",
    price: 75,
    stock: 63,
    sales: 61,
    img: "",
  },
  {
    id: 9,
    name: "Coat",
    category: "Clothing",
    price: 775,
    stock: 21,
    sales: 34,
    img: "",
  },
];

const IMG_NOT_FOUND =
  "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    PRODUCTS_DATA.slice(0, 5)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCTS_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* TABLE HEADER WITH SEARCH INPUT */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium mb-4 text-gray-100">
          Products List
        </h2>
        <div className="relative">
          <input
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search product..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 mb-2">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                className=""
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    className="size-10 rounded-full"
                    src={product.img ? product.img : IMG_NOT_FOUND}
                    alt="product-img"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-2 items-center justify-center">
          <button
            className="text-gray-400 hover:text-gray-300"
            onClick={handlePrev}
          >
            <ArrowBigLeft size={22} />
          </button>
          <p className="text-gray-400 text-lg font-medium select-none">{`${currentPage} / 10`}</p>
          <button
            className="text-gray-400 hover:text-gray-300"
            onClick={handleNext}
          >
            <ArrowBigRight size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
