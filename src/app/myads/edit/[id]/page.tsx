"use client"; 
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import EditProductForm from "../../../../components/Forms/EditProductForm";
import { getProduct } from "@/api/product";
import toast from "react-hot-toast";

function Page() {
  const { id }: { id: string } = useParams();
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProduct(id)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Error occurred while fetching the product");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EditProductForm
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
  );
}

export default Page;
