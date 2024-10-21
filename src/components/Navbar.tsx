"use client";

import {
  BellIcon,
  LogInIcon,
  SearchIcon,
  Shapes,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AppContext } from "@/contextApi/AppContext";
import { Session } from "@/hooks/Session";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NotificationsCard from "./Notifications";
import Loading from "./Loading";

function Navbar() {
  const router = useRouter();
 
  const { session, setsession } = useContext<any>(AppContext);
  const [notification, setnotification] = useState<boolean>(false);
 

  const check = async () => {
    const userData = await Session();

    return userData;
  };

  useEffect(() => {
    check().then((userData) => {
      if (userData != null) {
        setsession(userData);
      }
    });
  }, []);

  return (
    <div>
    
     
      <div className="flex lg:justify-between md:lg:justify-between p-10 flex-col lg:flex-row md:flex-row space-y-5 items-center w-full">
        <div className="left flex lg:space-x-9 md:space-x-9 font-bold lg:flex-row md:flex-row flex-col space-y-5 lg:space-y-0 md:space-y-0 items-center">
          <Shapes fill="black" />
          <ul className="flex md:space-x-9 lg:space-x-9 space-x-5 text-sm relative ">
            <Link href={"/"} className="tracking-wider cursor-pointer">
              HOME
            </Link>
            <Link href={"/"} className="tracking-wider cursor-pointer">
              RENTALS
            </Link>
            <Link
              href={"/myads"}
             
              className="tracking-wider cursor-pointer"
            >
              POST
            </Link>
            <Link
              href={"/addproduct"}
              className="tracking-wider cursor-pointer"
            >
              SELL
            </Link>
          </ul>
        </div>

        <div className="right flex  space-x-8 relative">
          {/* <SearchIcon /> */}
          <div className="relative cursor-pointer ">
            <BellIcon
              onClick={() => {
                setnotification((prev) => !prev);
              }}
            />

            {notification ? (
              <div className="absolute top-0 right-0 z-10">
                <NotificationsCard
                  notification={notification}
                  setnotification={setnotification}
                />
              </div>
            ) : null}
          </div>

          <ShoppingCart onClick={()=>{
            router.push("/fav")
          }} className="fill-black" />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <User className="fill-black" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              
                <DropdownMenuLabel>{session?.user?.username}</DropdownMenuLabel>
              

              <DropdownMenuSeparator />
              <Link href="/account">
                <DropdownMenuItem>My Account</DropdownMenuItem>
              </Link>
             
              <Link href="/addproduct">
                <DropdownMenuItem>Sell</DropdownMenuItem>
              </Link>
              <Link href={"/myads"}>
                <DropdownMenuItem>My Ads</DropdownMenuItem>
              </Link>

              {session ? (
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.setItem("token", "");
                    router.push("/login");
                    document.cookie =
                      "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
                  }}
                >
                  LogOut
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.setItem("token", "");
                    router.push("/login");
                    document.cookie =
                      "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
                  }}
                >
                  LogIn
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Navbar;
