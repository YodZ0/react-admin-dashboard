import { Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/OverviewPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import AnaliticsPage from "./pages/AnaliticsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import EmptyPage from "./pages/EmptyPage.jsx";

import SideBar from "./components/SideBar.jsx";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-70" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <SideBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/analitics" element={<AnaliticsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/empty" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}
