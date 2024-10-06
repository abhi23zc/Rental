"use client";
import React, { useState } from "react";

function Timer() {
  const [hours, sethours] = useState("");
  const [min, setmin] = useState("");

  setInterval(() => {
    const mydate = new Date();
    sethours(mydate.getHours().toString());
    setmin(mydate.getMinutes().toString());
  }, 1000);

  //   console.log(date)

  return (
    <div className="mt-5 w-54 bg-black  rounded-md p-5 text-center">
      <h1 className="font-extrabold text-xl text-white tracking-wide">
        Huge Discounts
      </h1>
      <span className="text-sm text-white">Limited time offer</span>

      <div className="text-white flex space-x-3 justify-center mt-5">
        <div className="flex space-x-1">
          <h1 className="p-2  font-bold text-xl  rounded-md bg-white text-black">{hours[0] ? hours[0] : "0"}</h1>
          <h1 className="p-2 font-bold text-xl rounded-md bg-white text-black">{hours[1] ? hours[1] : "0"}</h1>
        </div>
        <div>
            <p className="text-white text-3xl font-semibold">:</p>
        </div>
        <div className="flex space-x-1">
          <h1 className="p-2 font-bold text-xl rounded-md bg-white text-black">{min[0] ? min[0] : "0"}</h1>
          <h1 className="p-2 font-bold text-xl rounded-md bg-white text-black">{min[1] ? min[1] : "0"}</h1>
        </div>
        {}
      </div>
    </div>
  );
}

export default Timer;
