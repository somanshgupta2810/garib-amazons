import React from 'react';
import {Link} from 'react-router-dom';

export function NotFound(){
return <div><img src="https://img.freepik.com/premium-vector/modern-minimal-found-error-icon-oops-page-found-404-error-page-found-with-concept_599740-716.jpg?w=996"/>
 <Link to={"/"} className=" text-5xl bg-red-300 text-center px-2"><div className="text-3xl text-indigo-500 px-2 bg-red-300 mx-3 my-4">back</div></Link>

</div>
}


