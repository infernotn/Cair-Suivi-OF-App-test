import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center bg-slate-200">
      <Navbar />
      <div className="w-[90%] flex flex-wrap gap-x-10 justify-center items-center h-full">
        {["CTUK1", "CTUK2", "CTUK3", "PLASTURGIE"].map((atelier, index) => {
          return <Card atelier={atelier} />;
        })}
      </div>
    </div>
  );
}
