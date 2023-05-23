import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

export default function Dashboard() {
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
  }, []);

  return (
    <div className=" relative w-screen min-h-screen  flex flex-col items-center bg-slate-200">
      <Navbar />
      <div className="py-10 w-[90%] h-full my-auto flex flex-wrap gap-10 md:gap-[5rem] justify-center items-center ">
        {["CTUK1", "CTUK2", "CTUK3", "PLASTURGIE"].map((atelier, index) => {
          return <Card atelier={atelier} data={data[atelier]} />;
        })}
      </div>
    </div>
  );
}
