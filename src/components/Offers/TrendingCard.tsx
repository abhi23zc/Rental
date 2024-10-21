import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeartIcon } from "lucide-react";
import { likeProduct } from "@/api/product";
import toast from "react-hot-toast";

function TrendingCard({
  img,
  name,
  price,
  id,
  liked,
  userId,
  likedBy,
}: {
  likedBy: any;
  id: string;
  img: string;
  name: string;
  price: number;
  liked: boolean;
  userId: any;
}) {
  const [isLiked, setisLiked] = useState(false);
  useEffect(() => {
    if (likedBy && likedBy.includes(userId)) {
      setisLiked(true);
    }
  }, [likedBy]);

  return (
    <div className="w-56 bg-gray-100 rounded-lg shadow-md m-5 overflow-hidden">
      <div
        onClick={() => {
          window.location.href = `/product/${id}`;
          // console.log("MYID", id)
        }}
        className="relative w-full h-48"
      >
        <Image
          src={img}
          alt="Trending"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex p-3 justify-between">
        <div>
          <p>{name}</p>
          <p>₹ {price}</p>
        </div>
        <div>
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
          {/* <HeartIcon fill={liked ? "black" : "none"} stroke={liked ? "none" : "currentColor"} /> */}
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
