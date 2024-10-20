import React from "react";
import Image from "next/image";
import { HeartIcon } from "lucide-react";

function TrendingCard({
  img,
  name,
  price,
  liked,
}: {
  img: string;
  name: string;
  price: number;
  liked: boolean;
}) {
  return (
    <div className="w-56 bg-gray-100 rounded-lg shadow-md m-5 overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={img}
          alt="Trending"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex p-3 justify-between">
        <div>
          <p>{name}</p>
          <p>₹ {price}</p>
        </div>
        <div>
          <HeartIcon fill={liked ? "black" : "none"} stroke={liked ? "none" : "currentColor"} />
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
