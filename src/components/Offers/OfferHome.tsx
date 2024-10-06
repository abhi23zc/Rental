import React from "react";
import Trending from "./Trending";
import Offers from "./Offers";
import Popular from "../Categories/Popular";

function OfferHome() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-baseline  mt-10 md:p-5 space-x-5">
        <Offers />
        <Trending />
      </div>
      <div className="w-full  p-5 flex justify-center">
        <Popular />
      </div>
    </>
  );
}

export default OfferHome;
