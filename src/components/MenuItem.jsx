import Link from "next/link";
import React from "react";

const MenuItem = ({item} ) => {
  return <Link className="mr-4 border-1 p-1 rounded-lg hover:underline cursor-not-allowed" href='/'>{item.name}</Link>;
};

export default MenuItem;
