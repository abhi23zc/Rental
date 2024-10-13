"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EditProductFrom from "../../../components/Forms/EditProductForm";
import { getProduct } from "@/api/product";
import toast from "react-hot-toast";

function page() {
  const query = useSearchParams();
  const id = query.get("id") || "";
  const [data, setdata] = useState<any | null>(null);
  useEffect(() => {
    try {
      getProduct(id)
        .then((data) => {
          setdata(data.data);
        })
        .catch((e) => {
          toast.error("Error Occured");
        });
    } catch (e) {
      toast.error("Error Occured");
    }
  }, [id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <EditProductFrom
          title={data?.title}
          description={data?.description}
          price={data?.price}
          city={data?.city}
          state={data?.state}
          pincode={data?.pincode}
          category={data?.category}
          id={id}
        />
      </div>
    </Suspense>
  );
}

export default page;
