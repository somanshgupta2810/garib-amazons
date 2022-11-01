import React,{useState,useEffect} from 'react';
import Product from './Product';
import {GetProductList,GetSnglProduct} from './api';
import {useParams} from 'react-router-dom';
import Productlist from './Productlist';


function Maindetail() {
  const[query,setQuery]=useState("");
const[sort,setSort]=useState("default");
const[productLists,SetProductList]=useState([]);
  const[loading,Setloading]=useState(true);
  useEffect(function(){
 const data = GetProductList();
   data.then(function (productss){
    SetProductList(productss);
   })
 },[]);                                                                                                                                                                                                                                          
                                       

let data=productLists.filter(function(item){
const lowerCaseTitle=item.title.toLowerCase();
const lowerCaseQuery=query.toLowerCase();
  return lowerCaseTitle.indexOf(lowerCaseQuery)!=-1;})

  
if(sort=="name"){
data.sort(function(x,y){
  return (x.title>y.title)? 1 : -1;
})}
else if(sort=="LtoH"){
data.sort(function(x,y){
  return (x.price-y.price);
})}
else if(sort=="HtoL"){
data.sort(function(x,y){
  return (y.price-x.price);
})}
  
function handleQueryChange(event){
setQuery(event.target.value);
}
function handleSortChange(event){
setSort(event.target.value);

}



  

return(
<div>

  <div class="place-content-center max-w-6xl mx-auto grid-rows-3">
<div class="content-between">
  <input class="border border-current my-20" value={query} placeholder="search" onChange={handleQueryChange}/>
  <select className="border border-current mx-2 my-20" value={sort} onChange={handleSortChange}>
   <option value="default">Default Sort</option>
  <option value="name">Sort by Name</option>
  <option value="LtoH">Sort by Low to High</option>
  <option value="HtoL">Sort by High to Low</option>
  </select>
  </div>
<Productlist products={data}/>

</div>

  

  </div>
  
);
  }

export default Maindetail;
