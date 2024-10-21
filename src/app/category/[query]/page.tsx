"use client";
import { getProducts } from "@/api/product";
import Card from "@/components/Home/Card";
import SearchNav from "@/components/SearchResult/SearchNav";
import { AppContext } from "@/contextApi/AppContext";
import React, { useContext, useEffect, useState } from "react";

function page({ params }: any) {
  const [data, setData] = useState<any[]>([]);
  const { session, setsession } = useContext<any>(AppContext);
  const query = params?.query;
  useEffect(() => {
   
    async function fetchData() {
      try {
        
        const result = await getProducts("", "");
        setData(result?.data);
      } catch (e) {
        console.error("Error while fetching products", e);
      }
    }

    fetchData();
  }, [session]);

  return (
    <div>
      <SearchNav query="" first="Category" second={query} />
      <div className="flex flex-wrap gap-5 p-5">
        {data
          ?.filter(
            (element) =>
              element.category?.toLowerCase() === query?.toLowerCase()
          )
          .map((element) => {
            return (
              <Card
                userId={session?.user?.userId}
                likedBy={element.likedBy}
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
              />
            );
          })}
      </div>
    </div>
  );
}

export default page;
