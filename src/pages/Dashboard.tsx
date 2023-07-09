import React, { useState, useEffect, ReactElement } from "react";
// import Navbar from "../components/Navbar";
import PhaseCard from "../components/PhaseCard";
import { OF_phases } from "../utils/variables";
// import { useDispatch, useSelector } from "react-redux";
// import Planning from "../components/Planning";
// import { prepMP } from "../store/OfSlice";
// import axios from "axios";
import { getOfs } from "../api/OfsManager";
import { OF_subPhases } from "../utils/variables";
import { OF_type } from "../utils/types";
import Planning from "./Planning";
import { useNavigate } from "react-router";

export default function Dashboard(): ReactElement<any> {
  // const [isPlanning, setIsPlanning] = useState(false);
  // const user = useSelector((state: any) => state.user.user);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ofs, setOfs] = useState<OF_type[]>([]);
  const [atelier, setAtelier] = useState<string>("all");
  useEffect(() => {
    getOfs().then((ofs) => setOfs(ofs));
    // console.log("test api", ofs);
    // console.log("test api", ofs[0]);
  }, []);
  const [isPlanning, setIsPlanning] = useState<boolean>(false);

  // const user = useSelector((state) => state.user.user);
  // const dispatch = useDispatch();
  return (
    <div className="  relative  ">
      <div className="w-[95%] flex justify-between mt-2">
        <div className="flex gap-2">
          {["CTUK1", "CTUK2", "CTUK3", "PLASTURGIE"].map(
            (atl: string, index: number) => {
              return (
                <button
                  className={
                    (atl === atelier
                      ? "bg-violet-700  text-violet-200  "
                      : "bg-violet-400  text-violet-800 ") +
                    "py-1 px-2 rounded-xl text-lg font-semibold"
                  }
                  onClick={() => {
                    atl === atelier ? setAtelier("all") : setAtelier(atl);
                  }}
                >
                  {atl}
                </button>
              );
            }
          )}
        </div>
        {
          // user.Function === "Planificatrice" &&

          <button
            onClick={() => navigate("/planification")}
            className="bg-violet-700  text-violet-200   hover:bg-violet-400  hover:text-violet-800 hover:underline py-1 px-2 rounded-xl text-lg font-semibold"
          >
            Planning
          </button>
        }
      </div>
      <div className=" pt-[5rem]  w-full  flex flex-col  justify-start  items-center gap-[3rem] ">
        {OF_phases.map((phase, index) => {
          return (
            <PhaseCard
              phase={phase}
              data={ofs.filter((of) => {
                // console.log(OF_subPhases[phase]);

                return (OF_subPhases[phase] as string[]).indexOf(of.Statut) !==
                  -1 && atelier === "all"
                  ? true
                  : of.atelier.toUpperCase() === atelier;
              })}
            />
          );
        })}
      </div>
    </div>
  );
}
