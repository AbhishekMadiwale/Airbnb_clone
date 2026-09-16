"use client";

import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import { format } from "date-fns";
import Image from "next/image";

function SearchResults({ searchParams, searchResultsData }) {
  const { location, startDate, endDate, numberOfGuests } = searchParams;
  const range =
    startDate && endDate
      ? `${format(new Date(startDate), "dd/MMMM/yy")} - ${format(
          new Date(endDate),
          "dd/MMMM/yy",
        )}`
      : "Any dates";
  const listings = Array.isArray(searchResultsData) ? searchResultsData : [];

  return (
    <div>
      <Header
        placeholder={`${location || "Anywhere"} | ${range} | ${
          numberOfGuests || 0
        } guests`}
      />
      <main className="grow px-6 pt-14">
        <section>
          <p className="text-sm">
            {listings.length}+ stays - {range} for {numberOfGuests || 0} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-bold">
            Stays in {location || "your destination"}
          </h1>

          <div className="hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={`${listing.img}-${listing.title}`}
              className="flex gap-4"
            >
              <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={listing.img}
                  alt={listing.title || listing.location}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">{listing.location}</p>
                <h2 className="font-semibold">{listing.title}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {listing.description}
                </p>
                <p className="mt-2 text-sm">
                  {listing.star} · {listing.price}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

export default SearchResults;
