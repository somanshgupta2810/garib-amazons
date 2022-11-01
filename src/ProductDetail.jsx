
import React from 'react';
import {useParams,Link} from 'react-router-dom';
import { HiArrowSmLeft , HiArrowSmRight} from "react-icons/hi";
import { GetSnglProduct } from "./api";
import {useState,useEffect} from 'react'; 
import {Loading} from './Loading';
import {NotFound} from './NotFound';



function ProductDetail({HandleOnclick}){
  const id = +(useParams().id);
  const[product,SetProduct]=useState();
  const[loading,Setloading]=useState(true);
  const[count,Setcount]=useState(1);
 useEffect(function(){
 const p = GetSnglProduct(id);
  p.then(function(product){
    SetProduct(product)
     Setloading(false);
  }).catch(function(){
 Setloading(false);
    
  })
 },[id]); 
  if(loading){
    return <Loading/>;
  }
  
  if(!product){
    return <NotFound/>
  }
function ChangeHoGya(event){
  Setcount(+event.target.value)
}
  function HandleAddToCart() {
    HandleOnclick(id,count)
  }
  
  return(
    (<div className="h-screen">
      <Link to={"/"} className="flex place-items-center"> <HiArrowSmLeft className="text-5xl text-indigo-500"/><div className="text-3xl text-indigo-500">back</div></Link>
    <div>
      
      
      
    <div className="flex min-w-full drop-shadow-lg" >
  <div className="max-w-lg min-w-0">
   
<img src={product.thumbnail} className="w-full,h-full"/>
  </div>

  <div className="pl-8 pr-8 pb-8 max-w-2xl mt-2">
    <h3 className="text-4xl text-slate-700">{product.title}</h3>
  <h3 className="text-4xl pt-5 text-slate-700">${product.price}</h3>
  <p className="pt-5 text-gray-400 text-xl">{product.description}</p>
    
  <input type="number"   placeholder={count} onChange={ChangeHoGya} class="w-20 mt-7 self-center color-black border border-current mx-2 rounded-md"/>
    <button className="bg-orange-600   px-6 py-1 rounded-md text-white" onClick={HandleAddToCart}>ADD TO CART</button>
    
  </div>
</div>
    </div> 
      <div className="flex justify-between m-6">
        <div>{id>1 && (<Link to={"/ProductDetails/"+(id-1)} className="flex place-items-center"> <HiArrowSmLeft className="text-5xl text-red-500"/><div className="text-3xl text-indigo-500">previous</div></Link>)}</div>
         <Link to={"/ProductDetails/"+(id+1)} className="flex place-items-center"> <HiArrowSmRight className="text-5xl text-red-500"/><div className="text-3xl text-indigo-500">next</div></Link>
        
      </div>
   
    </div>)


    
    
    
    
    
    
    
  );
}





export default ProductDetail;