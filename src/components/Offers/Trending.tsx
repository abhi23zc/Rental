"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, HandCoins, PawPrint } from "lucide-react";
import TrendingCard from "./TrendingCard";
import { getProducts } from "@/api/product";
import { SkeletonCard } from "../Skeleton";
import { Session } from "@/hooks/Session";

function Trending() {
  const [data, setData] = useState([]);
  const [user, setuser] = useState(null)
  useEffect(() => {
    async function fetchData() {
      await Session().then((data) => {
        setuser(data?.user?.userId);
      });
      const result = await getProducts("null", "null");
      const mydata = result?.data;
      mydata?.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setData(mydata?.slice(0, 6));

    }
    fetchData();
  }, []);

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
        {data?.length >0  ? data?.map((elem: any) => {
          return (
            <TrendingCard
            likedBy={elem?.likedBy}
            userId={user}
            id ={elem._id}
              img={elem?.images[0].url}
              name={elem?.title}
              liked={false}
              price={elem?.price}
            />
          );
        }) : <>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
        </>}
      </div>
    </div>
  );
}

export default Trending;
