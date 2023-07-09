import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
// import { MP, data, ops } from "../utils/Data";
import Atelier_AccordionContent from "../components/AccordionContent";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import AccordionContent from "../components/AccordionContent";
import MP_AccordionContent from "../components/MP_Accordion";
import MPAccordionContent from "../components/MP_Accordion";
import { MP_ref } from "../utils/MP";
import { useDispatch, useSelector } from "react-redux";
import {
  Derogation,
  addOF,
  lancerOF,
  MPready,
  setMPready,
  // updateOF,
} from "../store/OfSlice";
import { setPreparationDone } from "../store/OperationsSlice";
import OperationsAccordion from "../components/Operations_Accordion";
import OperationsAccordionC from "../components/Operations_AccordionC";
import { OF_type } from "../utils/types";
import { getOf, updateOF } from "../api/OfsManager";
import { DB_notation } from "../utils/variables";

export default function Of() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  var lot: string = "";
  var derogation: string = "";
  const [of, setOf] = useState<OF_type>({
    "N° OF": "",
    Réference: "",
    N_LOT: "",
    Quantite: 0,
    Statut: "",

    atelier: "",
    "Date prévu": null,
    DP: "",
    Derogation: "Dérogation",
    DP_version: 0,
  });

  useEffect(() => {
    getOf(location.state["id"]).then((of) => setOf(of));
    // console.log("test app", of);
  }, []);
  const handle_LanceOF = () => {
    console.log("lancement OF test", lot);
    let url = `http://localhost:8000/of/${id}/`;
    updateOF(url, {
      ...of,
      N_LOT: lot,
      Statut: of.DP === "" ? "Préparation MP" : "derogation FF",
    }).then((res) => setOf(res));
  };
  const handle_Derogation = () => {
    document.getElementsByTagName("textarea").item(0).value = ``;

    let url = `http://localhost:8000/of/${id}/`;
    updateOF(url, {
      ...of,
      Derogation: derogation,
      Statut: "Préparation MP",
    }).then((res) => setOf(res));
  };
  return (
    <div className="relative flex flex-col justify-start items-center">
      {/* header */}
      <div className="bg-slate-200 bg-opacity-25 py-3 rounded-lg w-[90%] flex justify-around text-2xl text-slate-500 font-semibold my-8">
        <h1>
          N° OF :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {of["N_OF"]}
          </span>
        </h1>
        <h1>
          Réference :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {of["Reference"]}
          </span>
        </h1>
        {of["Statut"] !== "à lancer" && (
          <h1>
            N° Lot :{" "}
            <span className="text-3xl tracking-wider text-slate-900">
              {of["N_LOT"]}
            </span>
          </h1>
        )}
        <h1>
          Quantite :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {of["Quantite"]}
          </span>
        </h1>
      </div>

      {/* lancement OF */}
      {of["Statut"] === "à lancer" && (
        <div className="mt-3 w-screen flex justify-center gap-3">
          <label>N° lot</label>
          <input
            onChange={(e) => {
              lot = e.target.value.toString();
              console.log("lot test", lot);
              // setOf({ ...of, "N° Lot": e.target.value })
            }}
            name="lot"
            type="text"
            className=""
          />
          <button
            onClick={() => {
              handle_LanceOF();
            }}
            className="text-lg bg-slate-500 p-2 text-slate-200"
          >
            Lancer
          </button>
        </div>
      )}

      {/* Derogation OF */}

      {of["DP"] !== "" && (
        <div className="mx-auto mt-3 w-[95%]  gap-3 bg-slate-200 p-1 rounded">
          <fieldset className="flex flex-col justify-center items-center gap-2 ">
            <div className="flex justify-between w-full ">
              <legend className="text-lg underline text-slate-900 font-bold tracking-wide">
                Dérogation
              </legend>
              <legend className=" text-slate-900 font-bold tracking-wide text-lg ">
                <span className="text-sm underline mr-1">N° DP:</span>{" "}
                {of["DP"]}
              </legend>
            </div>

            {of.Statut === "derogation FF" && (
              <div className="w-[95%] flex flex-col items-center">
                <textarea
                  placeholder={"Write the derogation here"}
                  onChange={(e) => {
                    derogation = e.target.value;
                  }}
                  name="derogation"
                  className="bg-slate-200 w-full text-lg rounded-lg px-2 py-1 max-h-[10rem] "
                />
                <button
                  className="text-xl bg-slate-500 p-2 text-slate-200 w-[15rem] "
                  onClick={() => {
                    handle_Derogation();
                  }}
                >
                  Déroger
                </button>
              </div>
            )}
            {of.Derogation !== "" && <p className="w-full">{of.Derogation}</p>}
          </fieldset>
        </div>
      )}

      {/* Preparation MP */}

      {/* <div className="w-full bg-slMate-400 rounded-md">
        <div
          className="flex gap-2 items-center bg-slate-700 text-slate-200 hover:cursor-pointer rounded-md text-xl font-semibold tracking-widest pl-5 py-1"
          onClick={() => setisOpenMP(!isOpenMP)}
        >
          {isOpenMP ? <IoIosArrowDown /> : <IoIosArrowForward />}
          <h1>Preparation MP</h1>
        </div>
        {isOpenMP && (
          <motion.section
            key="content"
            className="w-full"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", scaleY: 1 },
              collapsed: { opacity: 0, height: 0, scaleY: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <MPAccordionContent
              of={of}
              table_header={[
                "reference",
                "N° lot MP",
                "Quantite",
                "Preparé par",
              ]}
              data={MPs}
              plus={false}
            />
            {of["Statut"] === "Préparation MP" && (
              <form
                id="mp"
                className="mt-2 border-t-2 flex flex-col items-center "
              >
                <div className="flex justify-between items-center w-full mt-4">
                  <input
                    required
                    className="pl-3 border-2 w-[150px] bg-slate-400 bg-opacity-25 rounded-lg "
                    type="text"
                    onChange={(e) => {
                      mp.reference = e.target.value;
                    }}
                  />
                  <input
                    required
                    className="pl-3 border-2 w-[150px] bg-slate-400 bg-opacity-25 rounded-lg "
                    type="text"
                    onChange={(e) => (mp["N° lot MP"] = e.target.value)}
                  />
                  <input
                    required
                    className="pl-3 border-2 w-[150px] bg-slate-400 bg-opacity-25 rounded-lg "
                    type="number"
                    onChange={(e) => (mp.Quantite = e.target.value)}
                  />
                  <input
                    required
                    className="pl-3 border-2 w-[150px] bg-slate-400 bg-opacity-25 rounded-lg "
                    type="text"
                    onChange={(e) => (mp["Preparé par"] = e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-500 text-slate-200 px-2 py-1 rounded-lg mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    var allInputs = document.querySelectorAll("input");
                    allInputs.forEach(
                      (singleInput) => (singleInput.value = "")
                    );

                    dispatch(setMPready({ N: of["N° OF"], mp: mp }));
                  }}
                >
                  Set ready
                </button>
                <button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-500 text-slate-200 px-2 py-1 rounded-lg mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(MPready({ N: of["N° OF"] }));
                  }}
                >
                  Ready to Fab
                </button>
              </form>
            )}
          </motion.section>
        )}
      </div> */}
    </div>
  );
}
