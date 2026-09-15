"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars4Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function resetInput() {
    setSearchInput("");
  }

  const search = () => {
    const searchParams = new URLSearchParams({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      numberOfGuests: String(numberOfGuests),
    });

    router.push(`/search?${searchParams.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white px-3 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-15 cursor-pointer my-auto">
        <Image
          onClick={() => router.push("/")}
          src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
          fill
          className="object-contain object-left"
          alt="logo"
        />
      </div>

      {/* Middle */}
      <div
        className="flex items-center justify-between border-gray-400 border-2 
        rounded-full p-3 m-2 md:shadow-sm"
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="grow placeholder-gray-600 text-sm 
          pl-5 bg-transparent outline-transparent flex-wrap"
          type="text"
          placeholder={placeholder || "Search for stay"}
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-red-400 
          text-white rounded-full cursor-pointer p-1 md:mx-2"
        />
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-5">
            <h2 className="text-2xl grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 ml-2 outline-none text-red-400"
              value={numberOfGuests}
              min={1}
              max={6}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex mb-3">
            <button
              className="grow text-gray-500 cursor-pointer"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="grow text-red-500 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
