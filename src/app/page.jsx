import Movies from "@/components/Movies";
import React from "react";
import options from "@/helpers/index";
export const metadata = {
  title: "Next Movie App",
  description: "A Next.js Movie App",
  icons: {
    icon: "/icon.png",
  },
};
const Page = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;

  let query = resolvedSearchParams?.genre;
  console.log("Resolved Search Params:", resolvedSearchParams);


  const res = await fetch(
    `https://api.themoviedb.org/3/${
      query ? "movie/" + query : "trending/all/day"
    }?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {res?.results?.map((movie, index) => (
          <Movies key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Page;
