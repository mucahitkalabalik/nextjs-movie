import React from "react";
import options from "@/helpers/index";
import Image from "next/image";
import defaultMovie from "@/assets/defaultMovie.png";

export const Page = async ({ params }) => {
  const id = await params.slug;

  //   https://api.themoviedb.org/3/movie/movie_id?language=en-US
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log(res, "res");

  return (
    <div className="flex gap-4 px-5">
      <div className="flex justify-center items-center flex-col flex-1">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${res?.production_companies[0]?.logo_path}`}
          alt="poster"
          width={100}
          height={100}
          className="my-5"
        />
        {res?.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${res?.poster_path}`}
            alt="poster"
            width={400}
            height={400}
          />
        )}

        {!res?.poster_path && (
          <Image
            src={defaultMovie}
            alt="poster"
            width={400}
            height={400}
          />
        )}
      </div>
      <div className="flex justify-center items-start flex-col flex-1">
        <h1 className="border-b-2 mt-5 ">{res?.title}</h1>
        <div className="my-2">
          Release Date: {res?.release_date} - Vote Average: {res?.vote_average}
        </div>
        <div className="my-2">Runtime: {res?.runtime} minutes</div>
        <p>{res?.overview}</p>
      </div>
    </div>
  );
};

export default Page;
