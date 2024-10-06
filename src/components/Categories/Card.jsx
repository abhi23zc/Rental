import React from "react";
import Image from "next/image";
import { Home } from "lucide-react";

function Card({ name, img }) {
  return (
    <div className="shadow-xl  bg-gray-200 card w-56 max-w-64 transform transition-all duration-300 hover:scale-105">
      <div className="  rounded-xl overflow-hidden ">
        <div className="relative m-auto">
          <Image
            src={img}
            width={150}
            height={150}
            alt={name}
            className="transition-all duration-300 hover:opacity-90 m-auto"
          />
        </div>
        <div className="p-6">
          <h2 className=" cursor-pointer  font-bold text-2xl text-gray-800 mb-2">{name}</h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm font-semibold">
            Explore our {name.toLowerCase()} collection
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
