import React from "react";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

function Product({ id, thumbnail, heading, title, price }) {
  /*in this id thubnail which are written this are present in object so we are disturing all by {} use this....if in this we used data so 
id=data.id but now id = id due to disturing*/
  return (
    <div class="w-80 m-2 bg-blue-300">
      <div class="w-full h-80 ">
        <img class="h-full w-full" src={thumbnail} />
      </div>
      <p class="text-gray-500 text-xs">{heading}</p>
      <h1 class="text-sm">{title}</h1>
      <h2>${price}</h2>
      <Link to={"/ProductDetails/" + id} className="text-white">
        view details
      </Link>
    </div>
  );
}

export default Product;
