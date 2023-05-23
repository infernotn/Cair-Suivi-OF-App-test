import React from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
import PhaseCard from "../components/PhaseCard";

export default function Atelier() {
  const location = useLocation();
  return (
    <div className="relative  w-screen   md:h-screen">
      <Navbar atelier={location.state.atelier} />

      <div className="absolute top-0 pt-[5rem] h-full w-full flex flex-col sm:flex-wrap md:flex-row justify-center md:justify-around items-center gap-[3rem] ">
        {["Fabrication", "controle Qualite", "Emballage", "controle PF"].map(
          (phase, index) => {
            return <PhaseCard phase={phase} />;
          }
        )}
      </div>
    </div>
  );
}
