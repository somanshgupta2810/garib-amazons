import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "./pageNotFound.jpg";

export function NotFound() {
  return (
    <div>
      <img src={pageNotFound} />
      <Link to={"/"} className="px-2 text-5xl text-center bg-red-300 ">
        <div className="px-2 mx-3 my-4 text-3xl text-indigo-500 bg-red-300">
          back
        </div>
      </Link>
    </div>
  );
}
