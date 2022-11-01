import React from 'react';
import { ImSpinner } from "react-icons/im";

export function Loading(){
  return <div className="flex grow item-center justify-center h-screen bg-red-200">
  <ImSpinner className="animate-spin text-6xl"/>
  </div>
}