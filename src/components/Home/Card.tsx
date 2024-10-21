"use client";
import { EllipsisVertical, HeartIcon, User } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { deleteProduct, likeProduct } from "@/api/product";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Session } from "@/hooks/Session";

function Card({
  userId,
  id,
  owner,
  likedBy,
  img,
  title,
  date,
  state,
  city,
  price,
  editable,
}: {
  userId: any;
  id: string;
  img: string;
  title: string;
  date: any;
  state: string;
  city: string;
  price?: string;
  editable?: boolean;
  owner?: string;
  likedBy?: any;
}) {
  const router = useRouter();
  const [newdate, setdate] = useState(new Date(date));
  const [isLiked, setisLiked] = useState(false);
  async function delProduct(id: string) {
    try {
      await deleteProduct(id);
      toast.success("Product deleted Succesfully");
      router.refresh();
    } catch (error) {
      toast.error("Error while deleting product");
    }
  }

  useEffect(() => {
    if (likedBy && likedBy.includes(userId)) {
      setisLiked(true);
    }
  }, [likedBy]);

  return (
    <>
      <div className="w-64   relative rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
        <div
          onClick={() => {
            window.location.href = `/product/${id}`;
            // console.log("MYID", id)
          }}
          className="flex space-x-5 items-center justify-center p-2"
        >
          <Image
            src={img}
            width={250}
            height={250}
            alt="Product Name"
            className="rounded-md"
          />
        </div>
        {!editable ? (
          <div className=" absolute top-5 right-3 rounded-full ">
            <HeartIcon
              fill={isLiked ? "red" : "white"}
              color={isLiked ? "red" : "black"}
              onClick={async () => {
                try {
                  setisLiked(!isLiked);
                  const data = await likeProduct(id);
                  if (data?.status == true) {
                    console.log("Added");
                  } else {
                    toast.error("Failed to add to Favorites");
                    setisLiked(false);
                  }
                } catch (e) {
                  toast.error("Failed to add to Favorites");
                }
              }}
              className="bg-white rounded-full p-1"
              width={28}
              height={28}
            />
          </div>
        ) : null}
        {editable && (
          <div className=" absolute top-5 right-3 rounded-full ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical
                  className="bg-white rounded-full p-1"
                  width={28}
                  height={28}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={"/profile"}>
                  <DropdownMenuLabel>Edit Product</DropdownMenuLabel>
                </Link>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => {
                    router.push("/myads/edit/" + id);
                  }}
                >
                  Edit
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => {
                    delProduct(id);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className="p-4">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">
            {"₹ " + price || "₹ 25,99,000"}
          </h1>
          <h1 className="text-base text-gray-700 font-medium mb-4">{title}</h1>
          <div className="flex justify-between mb-4">
            <p className="text-sm text-gray-600">
              {city}, {state}
            </p>
            <p className="text-sm text-gray-600">
              {newdate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
