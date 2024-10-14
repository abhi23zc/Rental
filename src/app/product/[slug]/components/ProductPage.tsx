"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  HeartIcon,
  Share2Icon,
  User2Icon,
  MessageCircleIcon,
} from "lucide-react";
import { createRequest } from "@/api/product";
import toast from "react-hot-toast";

function ProductPage({ element }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
   
  }, [element]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (element?.images?.length || 1)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (element?.images?.length || 1) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-5  rounded-lg  max-w-7xl mx-auto">
      {/* Custom Carousel */}
      <div className="bg-black p-5 w-full">
        <div className="relative w-full max-w-2xl mx-auto ">
          <div className="relative overflow-hidden rounded-lg shadow-lg  ">
            {element?.images?.length > 0 && (
              <div className="relative w-full h-96">
                <Image
                  src={element.images[currentIndex].url}
                  alt={`Product Image ${currentIndex}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-50 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-900 transition-all"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-50 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-900 transition-all"
          >
            &#8594;
          </button>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
          {element?.images?.map((img: any, index: number) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-400" : "bg-gray-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Share and Like Icons */}
      <div className="flex space-x-6 mt-5 justify-center">
        <div className="cursor-pointer">
          <Share2Icon
            size={28}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          />
        </div>
        <div className="cursor-pointer">
          <HeartIcon
            size={28}
            className="text-gray-600 hover:text-red-500 transition-colors"
          />
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex flex-wrap md:flex-nowrap mt-10 gap-5">
        <div className="md:w-2/3 space-y-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800">
              {element?.title || "Royal Enfield Meteor 320 (2023)"}
            </h1>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-xl font-semibold text-gray-700">Description</p>
            <hr className="my-4 border-t border-gray-200" />
            <p className="text-gray-600">
              {element?.description ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iure eius repudiandae quas neque esse sit magnam soluta at doloremque."}
            </p>
          </div>
        </div>

        {/* Price and Offer Section */}
        <div className="w-full md:w-1/3 p-6 bg-white shadow-lg rounded-lg space-y-6">
          <div>
            <p className="text-5xl font-extrabold text-gray-800">₹ {element?.price}</p>
          </div>
          <button
            onClick={async () => {
              try {
                console.log(element._id, element.owner)
      
                const data = await createRequest(element._id, element.owner);
                console.log(data)
                if(data){
                  toast.success("Offer Sent Succesfully");
                }else{
                  toast.error("Offer has already been sent");
                  
                }
                // console.log(data);
                
              } catch (e) {
                toast.error("Error while sending offer");
              }
            }}
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Make Offer
          </button>
          <div className="flex items-center space-x-3">
            <User2Icon size={28} className="text-gray-700" />
            <p className="text-lg font-medium text-gray-700">
              Eicher Motors Ltd
            </p>
          </div>
          <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition">
            <MessageCircleIcon className="inline mr-2" />
            Chat with owner
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
