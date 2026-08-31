import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white px-3 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-15 cursor-pointer my-auto">
        <Image
          src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>

      {/* Middle */}
      <div className="flex justify-between border-gray-600 border-2 rounded-full align-middle ">
        <input type="text" placeholder="Search for stay" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 " />
      </div>

      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
