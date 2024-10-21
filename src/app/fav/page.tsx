"use client";
import { getLikedProducts } from "@/api/product";
import Card from "@/components/Home/Card";
import { Session } from "@/hooks/Session";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Fav() {
  const [data, setdata] = useState<any>([]);
  const [user, setuser] = useState(null);
  async function fetchData() {
    await Session().then((data) => {
      setuser(data?.user?.userId);
    });
    await getLikedProducts().then((data) => {
      console.log(data);
      setdata(data?.data)
    });
  }
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col ">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-2 justify-center text-center">Favourite Items</h1>
      <p className="text-lg text-gray-600 text-center mb-5">Your most loved items are here.</p>

      <div className=" flex flex-wrap gap-5 p-2">
        {data?.map((element: any) => (
          <Card
            userId={user}
            title={element.title}
            city={element.city}
            state={element.state}
            img={element.images[0].url}
            date={element.createdAt}
            id={element._id}
            price={element.price}
            key={element._id}
            owner={element.owner.toString()}
            editable={false}
            likedBy={element.likedBy}
          />
        ))}
      </div>
    </div>
  );
}

export default Fav;
