"use client";
import SearchNav from "@/components/SearchResult/SearchNav";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchProduct } from "@/api/product";
import React from "react";
import Card from "@/components/Home/Card";

function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchResults, setSearchResults] = useState<any>(null);

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
      <SearchNav query={query || ""} />

      <div className="p-5 gap-5 flex flex-wrap">
        {searchResults &&
          searchResults?.map((result: any) => (
            <Card
              key={result.id}
              title={result.title}
              date={result.createdAt}
              state={result.state}
              city={result.city}
              price={result.price}
              img={result.images[0].url}
              editable={false}
              id={result._id}
            />
          ))}
      </div>
    </>
  );
}

export default SearchPage;
