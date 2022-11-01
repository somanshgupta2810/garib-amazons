import React from 'react';
import ProductDetail from './ProductDetail';
import {Link} from 'react-router-dom';


function Product({id,thumbnail,heading,title,price}){
  
  return(
  
    <div class="w-80 m-2 bg-red-400">
    <div class="w-full h-80 ">
    <img class="h-full w-full" src={thumbnail}/>
    </div>
  <p class="text-gray-500 text-xs" >{heading}</p>
    <h1 class="text-sm">{title}</h1>
  <h2>${price}</h2>
    <Link to={"/ProductDetails/"+ id} className="text-white">view details</Link>
  </div>)
  
  
  
}




export default Product;