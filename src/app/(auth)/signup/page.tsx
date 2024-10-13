import Register from "@/components/Register";
import Link from "next/link";
import React from "react";
import CheckSession from "../CheckSession";

function page() {
  return (
    <>
      <CheckSession />
      <div className="flex  justify-center items-center p-5">
        <div className="w-[550px] bg-white rounded-md py-5 px-10 shadow-md ">
          <h1 className="text-4xl  font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">
            Renter
          </h1>
          <h1 className=" text-3xl font-bold">Signup</h1>
          <p>Welcome Back</p>
          <Register />
          <p className="mt-2 text-center font-semibold text-gray-500">
            Already have an account ?{" "}
            <strong>
              <Link href={"/login"}>Login</Link>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
