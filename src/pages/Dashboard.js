import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PhaseCard from "../components/PhaseCard";
import { OF_phases } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import Planning from "../components/Planning";
import { prepMP } from "../store/OfSlice";

export default function Dashboard() {
  const [isPlanning, setIsPlanning] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <div className="relative    ">
      {/* <Navbar atelier={"CTUK"} /> */}
      <div className="relative">
        <div className="absolute top-0 pt-[5rem] h-full w-full flex flex-col  justify-start  items-center gap-[3rem] ">
          {OF_phases.map((phase, index) => {
            return <PhaseCard phase={phase} />;
          })}
        </div>

        {
          // user.Function === "Planificatrice" &&

          <button
            onClick={() => setIsPlanning(!isPlanning)}
            className="hover:cursor-pointer absolute top-2 right-2 bg-slate-700 text-slate-200 p-1 rounded-lg text-center align-middle hover:bg-slate-500"
          >
            ADD S+1 Planning
          </button>
        }
        {isPlanning && (
          <Planning
            isPlanning={isPlanning}
            setIsPlanning={() => setIsPlanning()}
          />
        )}
      </div>
    </div>
  );
}
