import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <img src="/images/pageNotFound.jpg" />
      <Link to={"/"} className="px-2 text-5xl text-center bg-red-300 ">
        <div className="px-2 mx-3 my-4 text-3xl text-indigo-500 bg-red-300">
          back
        </div>
      </Link>
    </div>
  );
}
