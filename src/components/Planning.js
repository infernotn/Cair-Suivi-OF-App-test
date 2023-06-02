import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOF } from "../store/PlanningSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function Planning({ isPlanning, setIsPlanning }) {
  const dispatch = useDispatch();

  let planning = useSelector((state) => state.planning.planning);
  const [of, setOf] = useState(["", "", 0, "", "", ""]);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addOF(of));

    console.log(planning);
  };
  useEffect(() => {}, [planning]);
  return (
    <div className="absolute flex flex-col pt-5 justify-center items-center  z-40 top-0  w-screen h-full bg-opacity-95 bg-slate-500 ">
      <div className="relative px-10 gap-10 rounded-2xl shadow-2xl bg-slate-600 w-[60rem] h-[60rem] flex flex-col justify-start items-center">
        <div
          onClick={() => setIsPlanning(!isPlanning)}
          className="absolute top-2 right-2"
        >
          <IoMdClose
            size={"2rem"}
            className="hover:cursor-pointer hover:text-slate-900 text-slate-200"
          />
        </div>
        <h1 className="font-extrabold tracking-wider mt-5 text-slate-200 text-4xl underline">
          Planning
        </h1>

        <table className=" w-full text-left ">
          <tr className="text-slate-200 underline">
            <th>Réference</th>
            <th>N° OF</th>
            <th>Quantite</th>
            <th>Atelier</th>
            <th>Date Prevu</th>
            <th>N° DP</th>
          </tr>
          {console.log("hi", planning)}
          {console.log("hi", of)}
          {planning.map((of) => {
            return (
              <tr>
                {of.map((el) => {
                  return <th>{el}</th>;
                })}
              </tr>
            );
          })}
        </table>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick(e);
            setOf(["", "", 0, "", "", ""]);
            e.target.reset();
          }}
          onsubmit="return false"
          className="w-full flex flex-col items-center gap-4"
        >
          <div className="w-full flex justify-between">
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[0] = e.target.value;
                setOf(v);
              }}
            />
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[1] = e.target.value;
                setOf(v);
              }}
            />
            <input
              type="number"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[2] = e.target.value;
                setOf(v);
              }}
            />
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[3] = e.target.value;
                setOf(v);
              }}
            />
            <input
              type="date"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[4] = e.target.value;
                setOf(v);
                console.log(of);
              }}
            />
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[5] = e.target.value;
                setOf(v);
                console.log(of);
              }}
            />
          </div>
          <button
            type="submit"
            onSubmit={(e) => {
              //   e.preventDefault();
            }}
            className="text-slate-200 text-2xl"
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
}
