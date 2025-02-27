import React from "react";
import options from "@/helpers";
import Movies from "@/components/Movies";
export const page = async ({ params }) => {
  let slug = params.slug;

  let res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${slug}`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log(res, "res");
  return (
    <div className="flex flex-wrap gap-4">
      {res.results.map((movie, index) => {
        return <Movies key={index} movie={movie} />;
      })}
      {slug}
    </div>
  );
};

export default page;
