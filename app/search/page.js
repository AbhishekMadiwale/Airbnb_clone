"use client";

import React, { Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";

function SearchResults() {
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    async function fetchSearchData() {
      try {
        const response = await fetch("/api/search");

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setSearchData(data);
        console.log("Search data:", data);
      } catch (error) {
        console.error("Failed to fetch search data:", error);
      }
    }

    fetchSearchData();
  }, []);

  const { location, startDate, endDate, numberOfGuests } = Object.fromEntries(
    searchParams.entries(),
  );

  const formattedStartDate = startDate
    ? format(new Date(startDate), "dd/MMMM/yy")
    : "Any date";
  const formattedEndDate = endDate
    ? format(new Date(endDate), "dd/MMMM/yy")
    : "Any date";
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />

      <main className="grow pt-14 px-6">
        <section>
          <p className="text-sm">
            300+ stays - {range} for {numberOfGuests} number of guests
          </p>

          <h1 className="text-3xl font-bold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchData.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              ),
            )}
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SearchResults />
    </Suspense>
  );
}
export default Page;
