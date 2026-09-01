import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

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
      <div className="flex items-center justify-between border-gray-400 border-2 rounded-full p-3 m-2 md:shadow-sm">
        <input
          className="pl-2 bg-transparent outline-transparent"
          type="text"
          placeholder="Search for stay"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-1 md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full border-gray-300">
          <Bars4Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
