import React from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";

export default function Of() {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-start items-center">
      <Navbar />
      <div className="w-[90%] flex justify-around text-2xl text-slate-500 font-semibold my-8">
        <h1>
          Réference :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of[0]}
          </span>
        </h1>
        <h1>
          N° OF :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of[1]}
          </span>
        </h1>
        <h1>
          N° Lot :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of[2]}
          </span>
        </h1>
        <h1>
          Quanite :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of[3]}
          </span>
        </h1>
      </div>
    </div>
  );
}
