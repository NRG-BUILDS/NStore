"use client";

import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="grid grid-cols-3 md:flex md:justify-between items-center border-b px-2 py-4 sticky top-0 left-0 w-full z-50 bg-gray-100">
        <div>
          <h1 className="font-bold text-lg">
            <span className="text-orange-500 font-extrabold">N</span>Store
          </h1>
        </div>
        <div className="flex order-3 md:order-2 gap-4 col-span-3 py-2 md:w-3/4">
          <input
            type="text"
            className="border w-full rounded p-2 outline-none focus:border-orange-400 transition"
          />
          <button className="bg-orange-500 px-4 text-white rounded font-semibold">
            Search
          </button>
        </div>
        <div className="flex justify-end items-center gap-4 col-span-2 md:order-3">
          <div className="w-10 h-10 bg-orange-200 rounded-full">
            <button
              onClick={() => {
                isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
              }}
              className="w-full h-full"
            ></button>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
        {isCartOpen && (
          <div className="absolute -bottom-full left-0 w-full">
            <Cart />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
