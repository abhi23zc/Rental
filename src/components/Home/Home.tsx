import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function Home() {
  return (
    <div className="flex lg:p-28 p-5 sm:mt-0 md:mt-0 mt-16 md:p-24 space-x-3 ">
      <div className="left lg:mt-10 md:mt-10 p-2">
        <h1 className="tracking-normal md:font-bold font-extrabold text-3xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight mb-4">
          Find the perfect rental item for your needs
        </h1>
        <p className="text-sm font-semibold tracking-wide sm:text-lg md:text-lg lg:text-md xl-text-xl text-gray-400 max-w-2xl">
          Search by category, brand or rental period!
        </p>
        
        <div className="flex w-full max-w-sm  mt-16 md:flex-row lg:flex-row flex-col ">
          <div className="relative w-full flex justify-center items-center">
            <div className="relative w-80 flex">
              <Input
                type="email"
                className="font-bold text-md pr-10"
                placeholder="What are you looking to rent?"
              />
              <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <Button type="submit" className="md:mt-0 mt-5 font-bold text-md tracking-wide">Search</Button>
        </div>

        <div></div>
      </div>
      <div className="right hidden lg:block md:block">
        <Image
          alt="Buy | Sell Image"
          src="/Images/Home.jpg"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Home;
