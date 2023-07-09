import React from "react";
import { useNavigate } from "react-router";

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate("/atelier", { state: { atelier: props.atelier } })
      }
      className="hover:cursor-pointer hover:scale-110 transition-transform  w-[80%] md:w-[25rem] h-[20rem]    flex flex-col items-center "
    >
      <div className="w-full z-10 flex justify-center">
        <h1 className="text-3xl border-2 border-opacity-80 font-semibold mb-2 w-fit px-3 py-1 rounded-xl text-center bg-slate-500 shadow-lg text-slate-200">
          {props.atelier}{" "}
        </h1>
      </div>
      <div className="rounded-lg -mt-5 z-0 bg-slate-400 w-full h-full pl-10 flex flex-col justify-around gap-3 text-2xl">
        <h2>OF en cours : {props.data}</h2>
        <h2>OF bloqué :</h2>
        <h2>BNC ouvert :</h2>
      </div>
    </div>
  );
}
