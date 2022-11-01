import React,{useState} from 'react';
import Maindetail from './Maindetail';
import { Routes, Route, Link } from "react-router-dom";
import Productlist from './Productlist';
import ProductDetail from './ProductDetail';
import Navbar from './Navbar';
import Footer from './Footer';
import {NotFound} from './NotFound';
function App() {
  const savedDataString=localStorage.getItem("my cart")||"{}";/*esee hmm nikal rahe ha*/                                                                              
 const cartObject=JSON.parse(savedDataString);/*esee hmm string ko vaps sa objct form ma kar rahe ha*/

  
const  [Cart,SetCart]=useState(cartObject);
  console.log("Crt is",Cart);
  
  function ProductAmount(productId,count){
    const oldCount=Cart[productId]||0;/*agar jo chij hmee dalne ha vo present ha he nahi to zero ho ayga*/
    const newCart={...Cart,[productId]:oldCount+count};
    
  SetCart(newCart);
    const cartString=JSON.stringify(newCart);/*ya hmm ess liya kar rahe ha kyu ki local storage ma hmm string format ma he likh skte ha*/
    localStorage.setItem("my cart",cartString)/*esse hmm save kar rahe ha*/
  ;}
    
   const totalCount=Object.keys(Cart).reduce(function(previous,current) {return previous + Cart[current];},0)
    
  
return(
  <div className="flex h-screen flex-col">
    <Navbar productAcount={totalCount}/>
    <div className="grow">
      
    <Routes >
      
 <Route index element={<Maindetail/>}></Route>
 <Route path="/ProductDetails/:id" element={<ProductDetail HandleOnclick={ProductAmount}/>} ></Route>
 <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </div>
  <Footer/>
  </div>

)
  }


export default App;