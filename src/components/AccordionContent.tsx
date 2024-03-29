import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill, BsPlusLg } from "react-icons/bs";
import { DB_notation } from "../utils/variables";
import { useDispatch } from "react-redux";
import { Select } from "../store/OfSlice";
import { OF_type } from "../utils/types";
export default function AccordionContent({
  plus = false,
  table_header = [],
  data = [],
  selectedOF = { N_OF: "", index: -1 },
  setSelected,
}: {
  plus: boolean;
  table_header: string[];
  data: OF_type[] | any[];
  selectedOF: { N_OF: string; index: number };
  setSelected: any;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      {data.length !== 0 && (
        <table className="w-full">
          <tr className="text-left w-full  text-violet-200 ">
            {table_header.map((header, index) => {
              // console.log(header);

              return <th>{header}</th>;
            })}
            {plus && <th className="w-[3rem]">Plus</th>}
          </tr>
          {data.map((of, index) => {
            let isOdd = index % 2 === 0;
            return (
              <tr
                onClick={() =>
                  selectedOF.index === index
                    ? setSelected({ N_OF: "", index: -1 })
                    : setSelected({ N_OF: of.N_OF, index: index })
                }
                className={
                  (isOdd ? "bg-purple-200 " : "bg-purple-500") +
                  " text-center text-purple-950   hover:bg-purple-800 hover:text-purple-200 border-collapse border-y-2 border-purple-900 " +
                  (selectedOF.index === index
                    ? "bg-purple-900 text-purple-100 text-xl underline"
                    : "")
                }
              >
                {table_header.map((col, index) => {
                  return (
                    <td key={index} className="pr-3 font-medium">
                      {of[DB_notation[col]] ? of[DB_notation[col]] : "NA"}
                    </td>
                  );
                })}
                {plus && (
                  <td>
                    <BsPlusLg
                      onClick={() => {
                        navigate("/of/" + of["id"], {
                          state: { id: of["id"] as number },
                        });
                        dispatch(Select(of));
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
