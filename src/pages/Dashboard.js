import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";
import Planning from "../components/Planning";

export default function Dashboard() {
  const [isPlanning, setIsPlanning] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState({
    CTUK1: 0,
    CTUK2: 0,
    CTUK3: 0,
    PLASTURGIE: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        console.log("res", res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user]);
  console.log("user", user.Function);
  return (
    <div className=" relative w-screen min-h-screen h-screen flex flex-col items-center bg-slate-200">
      <Navbar />
      <div className="relative py-10 w-[90%] h-full my-auto flex flex-wrap gap-10 md:gap-[5rem] justify-center items-center ">
        {user.Function === "Planificatrice" && (
          <button
            onClick={() => setIsPlanning(!isPlanning)}
            className="absolute top-2 right-2 bg-slate-700 text-slate-200 p-1 rounded-lg text-center align-middle hover:bg-slate-500"
          >
            {" "}
            ADD S+1 Planning{" "}
          </button>
        )}{" "}
        {["CTUK1", "CTUK2", "CTUK3", "PLASTURGIE"].map((atelier, index) => {
          return <Card atelier={atelier} data={data[atelier]} />;
        })}
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
