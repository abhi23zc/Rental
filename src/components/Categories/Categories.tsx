import React from "react";
import Card from "./Card";
import Link from "next/link";
function Categories() {
  return (
    <div className="lg:m-0 mt-20 ">
      <h1 className="text-center text-3xl md:font-bold font-extrabold">
        Categories
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <Link href={"/category/home"}>
          <Card name={"Home"} img={"/Category/home.webp"} />
        </Link>
        <Link href={"/category/fashion"}>
          <Card name={"Fashion"} img={"/Category/fashion.webp"} />
        </Link>
        <Link href={"/category/electronic"}>
          <Card name={"Electronics"} img={"/Category/electronics.webp"} />
        </Link>
        <Link href={"/category/book"}>
          <Card name={"Books"} img={"/Category/books.png"} />
        </Link>
        <Link href={"/category/tool"}>
          <Card name={"Tools"} img={"/Category/tools.webp"} />
        </Link>
        <Link href={"/category/vehicle"}>
          <Card name={"Vehicles"} img={"/Category/vehicles.png"} />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
