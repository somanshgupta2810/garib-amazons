import React,{useState} from 'react';
import { BiShoppingBag } from "react-icons/bi";
function Navbar({productAcount}){
  
  return(<div className="bg-white  flex justify-between px-40">
   
  <img class="w-48 ml-40 py-6 mb-0" 
  src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"/>
  <div className="flex flex-col">
  
    
  <BiShoppingBag className="text-5xl "/>
    <div className="text-red-300">{productAcount}</div>
  </div>
  
  </div>);
  
}




export default Navbar;