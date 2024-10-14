"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Card from "./Card";
import { getProducts } from "@/api/product";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SkeletonCard } from "../Skeleton";

function Home() {
  const [data, setData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    async function fetchData() {
      try {
        setLoading(true);
        const result = await getProducts();
        setData(result?.data);
        setLoading(false);
      } catch (e) {
        console.error("Error while fetching products", e);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      router.push(`/search/` + searchQuery);
    } catch (e) {
      console.error("Error while searching products", e);
      toast.error("Error while searching products");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex lg:p-28 p-5 sm:mt-0 md:mt-0 mt-16 md:p-24 space-x-3 "
      >
        <div className="left lg:mt-10 md:mt-10 p-2">
          <h1 className="tracking-normal md:font-bold font-extrabold text-3xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight mb-4">
            Find the perfect rental item for your needs
          </h1>

          <p className="text-sm font-semibold tracking-wide sm:text-lg md:text-lg lg:text-md xl:text-xl text-gray-400 max-w-2xl">
            Search by category, brand or rental period!
          </p>

          <div className="flex w-full max-w-sm  mt-16 md:flex-row lg:flex-row flex-col ">
            <div className="relative w-full flex justify-center items-center">
              <div className="relative w-80 flex">
                <Input
                  type="email"
                  className="font-bold text-md pr-10"
                  placeholder="What are you looking to rent?"
                  onChange={handleSearchInputChange}
                />
                <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              className="md:mt-0 mt-5 ml-5 font-bold text-md tracking-wide"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="right hidden lg:block md:block">
          <Image
            alt="Buy | Sell Image"
            src="/Images/Home.jpg"
            width={400}
            height={400}
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-800 text-2xl ml-5 mb-4"
      >
        <h1 className="ml-5">Fresh recommendations</h1>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-5 p-5 lg:justify-normal justify-center"
      >
        {!loading ? (
          data?.map((element) => (
            <Card
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
          ))
        ) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </motion.div>
    </>
  );
}

export default Home;
