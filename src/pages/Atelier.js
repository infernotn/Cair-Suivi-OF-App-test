import React from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
import PhaseCard from "../components/PhaseCard";

export default function Atelier() {
  const location = useLocation();
  return (
    <div className="relative  w-screen">
      <Navbar atelier={location.state.atelier} />

      <div className="absolute top-0 h-full w-full flex flex-wrap justify-center items-center gap-[2rem] ">
        {["Fabrication", "controle Qualite", "Emballage", "controle PF"].map(
          (phase, index) => {
            return <PhaseCard phase={phase} />;
          }
        )}
      </div>
    </div>
  );
}
