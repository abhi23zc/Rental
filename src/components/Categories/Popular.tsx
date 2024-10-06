import { ShoppingBag } from "lucide-react";
import React from "react";
import CategoryCard from "./CategoryCard";

function Popular() {
  return (
    <div className="w-full md:w-auto">
      <div className="bg-gray-200 flex p-3 space-x-4 rounded-lg">
        <ShoppingBag size={30} />
        <h1 className="font-bold text-xl">Popular Categories</h1>
      </div>
      <div className="flex flex-wrap md:space-x-5  mt-8 md:space-y-0 space-y-5">
        <CategoryCard
          img="/Category/popular/travel.png"
          heading="Travel luggage"
          sheading="Travel light with our luggage"
        />
        <CategoryCard
          img="/Category/popular/outdoor.jpeg"
          heading="Outdoor Gear"
          sheading="Tents, sleeping bags, and more"
        />
      </div>
    </div>
  );
}

export default Popular;
