"use client";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar";
import OfferHome from "@/components/Offers/OfferHome";
import { AppProvider } from "@/contextApi/AppContext";
import { Toaster } from "react-hot-toast";
import { createContext } from "vm";

function page() {
  return (

      <div className="relative">
        <Home />
        <Categories />
        <OfferHome />
        <Footer />
      </div>

  );
}

export default page;
