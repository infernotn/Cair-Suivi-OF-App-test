import axios from "axios";
import React, { useEffect, useState } from "react";

export const Controle = () => {
  const [mesures, setmesures] = useState({
    diamètre_ext: { inFileName: "D_Ext", value: "" },
    diamètre_int: { inFileName: "D_Int", value: "" },
    epaisseur: { inFileName: "Ep", value: "" },

    time: { inFileName: "Time", value: "" },
    matricule: { inFileName: "Op", value: "" },
  });
  const [ControlePage, setControlePage] = useState({
    date: { inFileName: "Date", value: "18/05/2023" },
    mesures: {
      autoControle: [],
      controleQualite: [],
    },
  });
  useEffect(() => {
    console.log("g", { ...mesures });
  }, [mesures]);
  async function handleChange(e) {
    let value = "NA";
    switch (e.target.name) {
      case "matricule":
        value = parseInt(e.target.value);
        break;
      case "diamètre_ext":
        value = parseFloat(e.target.value);
        break;
      case "diamètre_int":
        value = parseFloat(e.target.value);
        break;
      case "epaisseur":
        value = parseFloat(e.target.value);
        break;
      default:
        break;
    }

    await setmesures({
      ...mesures,
      [e.target.name]: {
        inFileName: mesures[e.target.name].inFileName,
        value: value,
      },
    });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("/controle");
      console.log("check", mesures);
      await axios.post("http://localhost:8800/controle", mesures);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-slate-400 flex justify-center items-center w-screen h-screen">
      <form className="rounded-2xl shadow-xl min-h-[30rem] min-w-[30rem] bg-slate-700 flex gap-10 flex-col justify-start items-center ">
        <div className="w-full px-10 flex gap-6 flex-col items-center">
          <h1 className="my-5 text-4xl   text-black  font-bold   ">
            Controle Plasturgie{" "}
          </h1>{" "}
          <div className="w-full flex items-center justify-between text-slate-300">
            <h1 className="text-2xl">Ref : 5TG000</h1>
            <h3>Date : 18/05/2023</h3>
          </div>
        </div>
        {/* DE */}
        <div className="flex gap-1 justify-between w-[80%] h-[1.5rem] ">
          <label className="text-slate-100 text-lg">Diamètre Exterieur :</label>
          <input
            required
            name="diamètre_ext"
            type="text"
            className=""
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        {/* DI */}
        <div className="flex gap-1 justify-between w-[80%] h-[1.5rem] ">
          <label className="text-slate-100 text-lg">Diamètre interieur :</label>
          <input
            required
            name="diamètre_int"
            type="text"
            className=""
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        {/* EP */}
        <div className="flex gap-1 justify-between w-[80%] h-[1.5rem] ">
          <label className="text-slate-100 text-lg">Epaisseur :</label>
          <input
            required
            name="epaisseur"
            type="text"
            className=""
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        {/* Date */}
        {/* <div className="flex gap-1 justify-between w-[80%] h-[1.5rem] ">
          <label className="text-slate-100 text-lg">date/time :</label>
          <input
            name="date"
            type="date"
            className=""
            onChange={(e) => handleChange(e)}
          ></input>
        </div> */}
        {/* Time */}
        <div className="flex gap-1 justify-between w-[80%] h-[1.5rem] ">
          <label className="text-slate-100 text-lg">date/time :</label>
          <input
            required
            type="time"
            name="time"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        {/* Mat */}
        <div className="flex gap-1 justify-between w-[80%] h-[1.5rem] ">
          <label className="text-slate-100 text-lg">Matricule :</label>
          <input
            required
            name="matricule"
            type="number"
            className=""
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        {/* save button */}
        <button
          onClick={(e) => handleClick(e)}
          className="bg-slate-400 px-3 py-1 mb-3 rounded-md hover:bg-slate-500 text-slate-800 hover:text-slate-300 text-lg"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};
