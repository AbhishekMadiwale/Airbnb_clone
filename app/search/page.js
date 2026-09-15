"use client";

import React from "react";
import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

function Page() {
  const searchParams = useSearchParams();

  // console.log(Object.fromEntries(searchParams.entries()));

  const { location, startDate, endDate, numberOfGuests } = Object.fromEntries(
    searchParams.entries(),
  );
  console.log({ location }, { startDate }, { endDate }, { numberOfGuests });

  const formattedStartDate = format(new Date(startDate), "dd/MMMM/yy");
  const formattedEndDate = format(new Date(endDate), "dd/MMMM/yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="grow pt-14 px-6">
        <section>
          <p className="text-sm">
            300+ stays -{range} for {numberOfGuests} number of guests
          </p>

          <h1 className="text-3xl font-bold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

export default Page;
