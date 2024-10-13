"use client";

import {
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

import { useRouter } from "next/navigation";

import CheckSession from "@/app/(auth)/CheckSession";
import Link from "next/link";

function Navbar() {
  const router = useRouter();

  return (
    <div>
      <div className="flex lg:justify-between md:lg:justify-between p-10 flex-col lg:flex-row md:flex-row space-y-5 items-center">
        <div className="left flex lg:space-x-9 md:space-x-9 font-bold lg:flex-row md:flex-row flex-col space-y-5 lg:space-y-0 md:space-y-0 items-center">
          <Shapes fill="black" />
          <ul className="flex md:space-x-9 lg:space-x-9 space-x-5 text-sm  ">
            <Link href={"/"} className="tracking-wider cursor-pointer">
              HOME
            </Link>
            <Link href={"/"} className="tracking-wider cursor-pointer">
              RENTALS
            </Link>
            <Link href={"/myads"} className="tracking-wider cursor-pointer">
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

        <div className="right flex  space-x-8 ">
          <SearchIcon />
          <ShoppingCart className="fill-black" />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <User className="fill-black" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href={"/account"}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
              </Link>

              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <Link href="/addproduct">
                <DropdownMenuItem>Sell</DropdownMenuItem>
              </Link>
              <Link href={"/myads"}>
                <DropdownMenuItem>My Ads</DropdownMenuItem>
              </Link>
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
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Navbar;
