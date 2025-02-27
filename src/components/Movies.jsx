"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import defaultMovie from "@/assets/defaultMovie.png";

export const Movies = (props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${props.movie.id}`)}
      key={props.movie.id}
      className="m-4 cursor-pointer max-w-[250px] rounded-lg shadow-lg"
    >
      <h5>{props.movie.title}</h5>
      {props.movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w400${props.movie.poster_path}`}
          className="rounded-lg"
          width={250}
          height={300}
          alt={props.movie.overview}
        />
      )}

      {!props.movie.poster_path && (
        <div>
          <h2>Image Not Found</h2>
          <Image
            src={defaultMovie}
            className="rounded-lg"
            width={250}
            height={300}
            alt={props.movie.overview}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;
