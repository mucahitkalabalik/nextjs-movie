"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import MenuItem from "./MenuItem";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const Theme = dynamic(() => import("./Theme"), { ssr: false });

const Header = () => {
  const [search, setSearch] = useState("");
  const Router = useRouter();

  const searchFunction = () => {
    if (search.length > 2) {
      Router.push(`/search/${search}`);
    }
  };
  const menu = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/login" },
  ];
  return (
    <header className="flex items-center">
      <h1 className="text-xl font-bold flex-1">
        <Link href="/">Next Movie App</Link>
      </h1>
      <div className="flex items-center m-3 flex-1 border-2 border-gray-600 rounded-lg">
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchFunction()}
          type="text"
          placeholder="Search"
          className="m-1 p-1 rounded-lg flex-1 outline-none border-gray-600"
        />
        <FaSearch onClick={searchFunction} className="mr-3 cursor-pointer" />
      </div>
      <div className="flex flex-1 justify-end">
        <Theme />
        {menu.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
    </header>
  );
};

export default Header;
