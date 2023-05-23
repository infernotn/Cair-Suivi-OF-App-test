import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
export default function PhaseCard({ phase }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };
  console.log(getToggleProps());
  return (
    <div className="rounded-xl w-[20rem] h-[40rem] bg-slate-400 flex flex-col justify-start items-center ">
      <h1 className="rounded-t-xl bg-slate-500 w-full h-[3rem] flex justify-center items-center  text-xl text-slate-200 font-bold tracking-widest">
        {phase}
      </h1>
      <div className="flex flex-col gap-2">
        <div className="w-full px-3">
          <h1
            className="text-lg font-bold underline"
            {...getToggleProps({ onclick: toggleExpanded })}
          >
            {/* {isExpanded ? "Collapse" : "Expand"} */}
            En cours
          </h1>
          <div {...getCollapseProps()}>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="w-full px-3">
          <h1 className="text-lg font-bold underline" {...getToggleProps()}>
            {/* {isExpanded ? "Collapse" : "Expand"} */}
            En cours
          </h1>
          <div {...getCollapseProps()}>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
