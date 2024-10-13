import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NoItem() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <Image
          alt="No Ads"
          src={"/images/noad.webp"}
          width={200}
          height={200}
        />
        <h1 className="text-xl font-bold">You haven't listed anything yet</h1>
        <div>
          <h1>Let go of what you </h1>
          <h1>don't use anymore</h1>
        </div>

        <Link href={"/addproduct"}>
        <Button>Start Selling</Button>
        </Link>
      </div>
    </div>
  );
}

export default NoItem;
