import React from "react";
import { useNavigate } from "react-router";
import { BsFillPlusCircleFill, BsPlusLg } from "react-icons/bs";
export default function AccordionContent({ ...props }) {
  const navigate = useNavigate();
  return (
    <div>
      <table className="w-full">
        <tr className="text-left w-full  ">
          <th className="">Réference</th>
          <th className="">N° OF</th>
          <th className="">Lot</th>
          <th className="">Quantite</th>
        </tr>
        {props.data.map((row, index) => {
          let isOdd = index % 2 === 0;
          return (
            <tr
              className={
                (isOdd ? "bg-slate-200 bg-opacity-70" : "bg-slate-500") +
                " text-slate-900  bg-opacity-70 hover:bg-slate-800 hover:text-slate-200 border-collapse border-y-2 border-slate-900 "
              }
            >
              {row.map((col, index) => {
                return <td className="pr-3">{col}</td>;
              })}
              <td>
                <BsPlusLg
                  onClick={() => {
                    navigate("/of", { state: { of: row } });
                  }}
                  className={"  text-xl hover:cursor-pointer"}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
