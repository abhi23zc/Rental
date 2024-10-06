import Image from "next/image";
import React from "react";

function CategoryCard({
  img,
  heading,
  sheading,
}: {
  img: string;
  heading: string;
  sheading: string;
}) {
  return (
    <div className="relative p-5">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          className="rounded-xl blur-sm transition-all duration-300 hover:scale-105"
          src={img}
          width={500}
          height={500}
          alt={heading}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mt-8">
          <h1 className="text-2xl font-bold mb-2">{heading}</h1>
          <h2 className="text-lg mb-4">{sheading}</h2>
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
