import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsFillPlusCircleFill, BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setMPready } from "../store/OfSlice";
import { useSelector } from "react-redux";
import { setPreparation } from "../store/OperationsSlice";
export default function MPAccordionContent({
  plus,
  table_header = [],
  data = [],
  of,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const SetReady = (mp, index) => {
    dispatch(setMPready([of, index, "ready"]));
  };

  return (
    <div>
      <table className="w-full ">
        <tr className="text-left w-full  ">
          {table_header.map((header, index) => {
            console.log(header);

            return <th>{header}</th>;
          })}
        </tr>

        {data.map((mp, index) => {
          let isOdd = index % 2 === 0;
          return (
            <tr
              className={
                (isOdd ? "bg-slate-200 bg-opacity-70" : "bg-slate-500") +
                " text-slate-900  bg-opacity-70 hover:bg-slate-800 hover:text-slate-200 border-collapse border-y-2 border-slate-900 "
              }
            >
              {table_header.map((header, index) => {
                if ((mp[header] !== 0) | (mp[header] !== "")) {
                  return <td className="pr-3">{mp[header]}</td>;
                } else {
                  return <td className="pr-3">-</td>;
                }
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
