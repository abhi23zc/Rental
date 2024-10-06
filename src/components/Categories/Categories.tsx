import React from "react";
import Card from "./Card";
function Categories() {
  return (
    <div className="lg:m-0 mt-20 ">
      <h1 className="text-center text-3xl md:font-bold font-extrabold">
        Categories
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <Card name={"Home"} img={"/Category/home.webp"} />
        <Card name={"Fashion"} img={"/Category/fashion.webp"} />
        <Card name={"Electronics"} img={"/Category/electronics.webp"} />
        <Card name={"Books"} img={"/Category/books.png"} />
        <Card name={"Tools"} img={"/Category/tools.webp"} />
        <Card name={"Vehicles"} img={"/Category/vehicles.png"} />
      </div>
    </div>
  );
}

export default Categories;
