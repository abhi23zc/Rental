import { SearchIcon, Shapes, ShoppingCart, User } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex lg:justify-between md:lg:justify-between p-10 flex-col lg:flex-row md:flex-row space-y-5 items-center">
        <div className="left flex lg:space-x-9 md:space-x-9 font-bold lg:flex-row md:flex-row flex-col space-y-5 lg:space-y-0 md:space-y-0 items-center">
          <Shapes fill="black" />
          <ul className="flex md:space-x-9 lg:space-x-9 space-x-5 text-sm  ">
            <li className="tracking-wider">HOME</li>
            <li className="tracking-wider">RENTALS</li>
            <li className="tracking-wider">CATEGORIES</li>
            <li className="tracking-wider">SERVICES</li>
          </ul>
        </div>

        <div className="right flex  space-x-8 ">
          <SearchIcon />
          <ShoppingCart className="fill-black" />
          <User className="fill-black" />
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Navbar;
