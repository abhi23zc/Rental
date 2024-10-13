"use client";
import React, { useEffect, useState } from "react";
import ProductPage from "./components/ProductPage";
import { getProduct } from "@/api/product";
import toast from "react-hot-toast";

function page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  // console.log(id);
  const [data, setdata] = useState<any>([]);
  useEffect(() => {
    console.log("Fetching data ...")
    getProduct(id)
      .then((data) => {
        console.log(data);
        setdata(data);
      })
      .catch((e) => {
        toast.error("Something went wrong");
      });
  }, []);

  return (
    <>
      <div>
        <ProductPage element={data?.data} />
      </div>
    </>
  );
}

export default page;
