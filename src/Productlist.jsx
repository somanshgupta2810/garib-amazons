import React from 'react';
import Product from './Product';
import {useParams} from 'react-router-dom';

function Productlist({products}){
  return(
<div className="grid grid-cols-3 gap-2 ">
    {products.map(function(item){
return(
 
<Product
  key={item.title}{...item}/>)})
  
  }
             
</div>
    );}

export default Productlist;
