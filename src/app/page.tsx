import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar";
import OfferHome from "@/components/Offers/OfferHome";
import Offers from "@/components/Offers/Offers";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Categories/>
      <OfferHome/>
      <Footer/>
    </div>
  );
}

export default page;
