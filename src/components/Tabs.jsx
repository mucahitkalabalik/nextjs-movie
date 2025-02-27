"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const params = useSearchParams();
  const genre = params.get("genre");

  const tabs = [
    { name: "Popular", url: "/popular" },
    { name: "Top Rated", url: "/top_rated" },
    { name: "Up Coming", url: "/upcoming" },
  ];

  return (
    <div className="p-3 bg-gray-100 dark:bg-zinc-950 text-gray-800 dark:text-white flex justify-center items-center ga-4">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          className={`mr-4 border-1 p-1 rounded-lg hover:underline cursor-pointer ${
            tab.url === genre
              ? "underline text-gray-400 transition-all duration-200"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};
export default Tabs;
