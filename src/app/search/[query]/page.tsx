"use client";
import SearchNav from "@/components/SearchResult/SearchNav";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { searchProduct } from "@/api/product";
import React from "react";
import Card from "@/components/Home/Card";
import { AppContext } from "@/contextApi/AppContext";

function SearchPage() {
  const { query }: { query: string } = useParams();
  const [searchResults, setSearchResults] = useState<any>(null);
  const { session, setsession } = useContext<any>(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const result = await searchProduct(query);
          setSearchResults(result);
          console.log(result);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <SearchNav query={query} first="" second="" />

      <div className="p-5 gap-5 flex flex-wrap">
        {searchResults &&
          searchResults?.map((result: any) => (
            <Card
              userId={session?.user?.userId}
              likedBy={result.likedBy}
              key={result.id}
              title={result.title}
              date={result.createdAt}
              state={result.state}
              city={result.city}
              price={result.price}
              img={result.images[0]?.url} // Add optional chaining for safety
              editable={false}
              id={result._id}
            />
          ))}
      </div>
    </>
  );
}

export default SearchPage;
