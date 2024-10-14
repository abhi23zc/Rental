import React from "react";
import { ChevronLeft, ChevronRight, HandCoins, PawPrint } from "lucide-react";
import TrendingCard from "./TrendingCard";


function Trending() {
  return (
    <div className="w-fit mt-10  rounded-lg ">
      <div className="flex  bg-gray-200 p-1 rounded-md justify-between items-center mb-8">
        <div className="flex  items-center space-x-4">
          <PawPrint size={30} className="fill-black" />
          <h1 className="font-bold text-2xl">Trending Now</h1>
        </div>

        <div className="flex space-x-4">
          <ChevronLeft width={30} />
          <ChevronRight width={30} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <TrendingCard
          img={"/Trending/download.jpeg"}
          name={"Luxury Sofa Set"}
          liked={false}
          price={599}
        />
        <TrendingCard
          img={"/Trending/car.jpeg"}
          name={"Drive in style"}
          liked={false}
          price={699}
        />
        <TrendingCard
          img={"/Trending/camera.jpeg"}
          name={"Professional Camera Kit"}
          liked={false}
          price={899}
        />
        <TrendingCard
          img={"/Trending/tent.jpeg"}
          name={"Camping Tent"}
          liked={false}
          price={499}
        />
        <TrendingCard
          img={"/Trending/camera-p.jpeg"}
          name={"Capture your memories"}
          liked={false}
          price={799}
        />
        <TrendingCard
          img={"/Trending/library.jpeg"}
          name={"Get ahead with "}
          liked={false}
          price={399}
        />
      </div>
    </div>
  );
}

export default Trending;
