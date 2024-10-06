import { HandCoins, PawPrint } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Timer from "./Timer";

function Offers() {
  return (
    <div className="">
      <div className="bg-gray-200 w-fit rounded-md ">
        <div className="flex justify-center  space-x-5 items-center p-2 w-56 ">
          <PawPrint size={30} className="fill-black" />
          <h1 className="font-bold text-lg">Special Offers</h1>
        </div>
      </div>

      <div className="offer1 bg-gray-200  w-56  mt-8 rounded-md p-5 ">
        <div className="text-center">
          <h1 className="font-bold text-xl">Home</h1>
          <span className="text-sm font-semibold">by RentNow </span>
        </div>

        <div className="relative left-0 right-0 mt-10 m-auto">
          <Image src="/Others/offer.webp" alt="Offer" width={90} height={90} />

          <div className="h-12 w-12 left-20 -top-5 bg-gray-50 rounded-full font-bold flex flex-col p-3 text-xs  items-center absolute ">
            <h1>20%</h1>
            <h1>OFF</h1>
          </div>
        </div>

        <Button className="w-full mt-5">Rent Now</Button>
      </div>

      <Timer/>
    </div>
  );
}

export default Offers;
