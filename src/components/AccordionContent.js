import React from "react";
import { useNavigate } from "react-router";
import { BsFillPlusCircleFill, BsPlusLg } from "react-icons/bs";
export default function AccordionContent({
  plus,
  table_header = [],
  data = [],
}) {
  const navigate = useNavigate();

  return (
    <div>
      {data.length !== 0 && (
        <table className="w-full">
          <tr className="text-left w-full  ">
            {table_header.map((header, index) => {
              console.log(header);

              return <th>{header}</th>;
            })}
            <th className="w-[3rem]">Plus</th>
          </tr>
          {data.map((of, index) => {
            let isOdd = index % 2 === 0;
            return (
              <tr
                className={
                  (isOdd ? "bg-slate-200 bg-opacity-70" : "bg-slate-500") +
                  " text-slate-900  bg-opacity-70 hover:bg-slate-800 hover:text-slate-200 border-collapse border-y-2 border-slate-900 "
                }
              >
                {table_header.map((col, index) => {
                  return (
                    <td key={index} className="pr-3">
                      {of[col]}
                    </td>
                  );
                })}
                {plus && (
                  <td>
                    <BsPlusLg
                      onClick={() => {
                        navigate("/of", { state: { of: of } });
                      }}
                      className={"  text-xl hover:cursor-pointer"}
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}
