import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-50 sm:h-100 lg:h-125 xl:h-150 ">
      <Image
        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="fill"
        objectFit="cover"
        alt="banner image"
      />
      <div className="absolute text-center top-1/2 w-full text-white">
        <p className="text-sm sm:text-lg">Where you want to go?</p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md 
            rounded-full font-bold my-3 hover:shadow-xl 
            cursor-pointer active:scale-90 
            transition duration-200"
        >
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
