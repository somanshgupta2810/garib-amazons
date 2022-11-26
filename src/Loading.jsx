import React from "react";
import { ImSpinner } from "react-icons/im";

export function Loading() {
  return (
    <div className="flex justify-center h-screen bg-red-200 grow item-center">
      <ImSpinner className="text-6xl animate-spin" />
    </div>
  );
}
