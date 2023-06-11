import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOF, deleteOF, updateOF } from "../store/PlanningSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { ateliers } from "../utils/Data";

export default function Planning({ isPlanning, setIsPlanning }) {
  console.log("Planning");
  const dispatch = useDispatch();
  const [selectedOF, SetselectedOF] = useState(-1);
  let planning = useSelector((state) => state.planning.planning);
  let v = ["", "", 0, "", "", ""];
  const [of, setOf] = useState(v);
  const handleClick = (e) => {
    e.preventDefault();
    if (selectedOF === -1) {
      dispatch(addOF(of));
    } else {
      dispatch(updateOF([of, selectedOF]));
    }

    console.log(planning);
  };
  useEffect(() => {
    // let sortedPlanning = planning.sort((a, b) => {
    //   if (a > b) return -1;
    //   if (a < b) return 1;
    //   return 0;
    // });
  }, [planning]);

  return (
    <div className="absolute flex flex-col pt-5 justify-center items-center  z-40 top-0  w-screen h-screen bg-opacity-95 bg-slate-500 ">
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

          {planning.map((of, index) => {
            return (
              <tr
                className={index === selectedOF ? "bg-slate-50" : ""}
                onClick={async () => {
                  await SetselectedOF(index);
                  await setOf(of);
                  console.log("selected", index, planning[index]);
                }}
              >
                {of.map((el) => {
                  return <th>{el === "" ? "NA" : el}</th>;
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
              required
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                v[0] = e.target.value;
                setOf(v);
              }}
            />
            <input
              required
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                v[1] = e.target.value;
                setOf(v);
              }}
            />
            <input
              required
              type="number"
              className="w-[6rem]"
              onChange={(e) => {
                v[2] = e.target.value;
                setOf(v);
              }}
            />
            <select
              required
              className="w-[6rem]"
              onChange={(e) => {
                v[3] = e.target.value;
                setOf(v);
              }}
            >
              {ateliers.map((atelier) => {
                return <option> {atelier} </option>;
              })}
            </select>
            {/* <input
              required
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[3] = e.target.value;
                setOf(v);
              }}
            /> */}
            <input
              required
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
              required
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
          {selectedOF === -1 ? (
            <button type="submit" className="text-slate-200 text-2xl">
              add
            </button>
          ) : (
            <div className="flex gap-5">
              <button type="submit" className="text-slate-200 text-2xl">
                Update
              </button>
              <button
                onClick={() => {
                  SetselectedOF(-1);

                  dispatch(deleteOF(selectedOF));
                }}
                type="submit"
                className="text-slate-200 text-2xl"
              >
                Delete
              </button>
            </div>
          )}

          <button
            onClick={() => {
              SetselectedOF(-1);
            }}
            className="text-slate-200 text-2xl"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
