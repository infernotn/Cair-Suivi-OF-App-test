import React from "react";
import { useNavigate } from "react-router";

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/atelier")}
      className="hover:cursor-pointer hover:scale-110 transition-transform shadow-2xl w-[80%] md:w-[25rem] h-[20rem] bg-slate-400 rounded-3xl pb-4 flex flex-col items-center "
    >
      <h1 className="text-3xl font-semibold mb-2 w-full py-1 rounded-t-3xl text-center bg-slate-900 bg-opacity-50 text-slate-200">
        {props.atelier}{" "}
      </h1>
      <div className="w-full h-full pl-10 flex flex-col justify-around gap-3 text-2xl">
        <h2>OF en cours :</h2>
        <h2>OF bloqué :</h2>
        <h2>BNC ouvert :</h2>
      </div>
    </div>
  );
}
