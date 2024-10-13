"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NoItem from "./NoItem";
import { getMyAds } from "@/api/product";
import Card from "@/components/Home/Card";
import toast from "react-hot-toast";
import AuthSession from "../(auth)/AuthSession";

function page() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    try {
      getMyAds().then((res) => setdata(res?.data));
    } catch (e) {
      toast.error("Error Occured");
    }
  }, []);
  return (
    <div>
      <AuthSession/>
      <div className="flex space-x-4 mt-5 w-fit pb-4  ml-5 border-b border-gray-200">
        <h1 className="text-sm">ADS</h1>
        <h1 className="text-sm">FAVOURITES</h1>
      </div>
      <div
        className={`flex flex-wrap gap-3 ml-5 mt-7 ${
          data ? (data.length > 0 ? "" : "justify-center") : null
        }`}
      >
        {data ? (
          data.length > 0 ? (
            data?.map((element: any) => {
              return (
                <Card
                  img={element?.images[0].url}
                  title={element?.title}
                  date={element?.createdAt}
                  state={element?.state}
                  city={element?.city}
                  price={element?.price}
                  key={element?._id}
                  editable={true}
                  id={element?._id.toString()}
                />
              );
            })
          ) : (
            <NoItem />
          )
        ) : null}
      </div>
    </div>
  );
}

export default page;
