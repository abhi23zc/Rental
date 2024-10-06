import React from "react";
import { ChevronLeft, ChevronRight, HandCoins, PawPrint } from "lucide-react";
import TrendingCard from "./TrendingCard";

function Trending() {
  return (
    <div className="w-fit mt-10">
      <div className="bg-gray-200 rounded-lg flex justify-between items-center mr-5">
        <div className="flex justify-center space-x-4 items-center p-2">
          <PawPrint size={30} className="fill-black" />
          <h1 className="font-bold text-xl">Trending Now</h1>
        </div>

        <div className="flex pr-2">
          <ChevronLeft width={30} />
          <ChevronRight width={30} />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center">
        <TrendingCard
          img={"/Trending/download.jpeg"}
          name={"Luxury Sofa Set"}
          liked={false}
          price={500}
        />
        <TrendingCard
          img={"/Trending/car.jpeg"}
          name={"Drive in style"}
          liked={false}
          price={500}
        />
        <TrendingCard
          img={"/Trending/camera.jpeg"}
          name={"Professional Camera Kit"}
          liked={false}
          price={500}
        />
        <TrendingCard
          img={"/Trending/tent.jpeg"}
          name={"Camping Tent"}
          liked={false}
          price={500}
        />
        <TrendingCard
          img={"/Trending/camera-p.jpeg"}
          name={"Capture your memories"}
          liked={false}
          price={500}
        />
        <TrendingCard
          img={"/Trending/library.jpeg"}
          name={"Get ahead with "}
          liked={false}
          price={500}
        />
      </div>
    </div>
  );
}

export default Trending;
