import React, { useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { MP, data, ops } from "../utils/Data";
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
  updateOF,
} from "../store/OfSlice";
import { setPreparationDone } from "../store/OperationsSlice";
import OperationsAccordion from "../components/Operations_Accordion";
import OperationsAccordionC from "../components/Operations_AccordionC";

export default function Of() {
  const dispatch = useDispatch();
  const location = useLocation();

  //states
  let preparation = useSelector((state) => state.operations.prepareMP);
  let of = useSelector((state) =>
    state.ofs.OFs.filter((of) => of["N° OF"] === location.state.of["N° OF"])
  )[0];
  console.log("1---- ", of);
  const [isOpenMP, setisOpenMP] = useState(true);
  const [isOpenM, setisOpenM] = useState(true);
  //variables
  let derogation = ``;
  let operation_trame = {
    Statut: "",
    operation: "",
    QuantiteTotale: 0,
    historique: [],
  };
  let historiqueOP_trame = {
    "Date debut": "",
    "Date fin": "",
    Quantite: 0,
    Matricule: "",
  };
  // let of = [];
  let MPs = of.MP;
  let mps = { reference: "", Quantite: 0, "N° lot MP": "", "Preparé par": "" };
  let mp = { reference: "", Quantite: 0, "N° lot MP": "", "Preparé par": "" };
  let lot = "";
  //fonctions

  return (
    <div className="relative flex flex-col justify-start items-center">
      <div className="w-[90%] flex justify-around text-2xl text-slate-500 font-semibold my-8">
        <h1>
          N° OF :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {of["N° OF"]}
          </span>
        </h1>
        <h1>
          Réference :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {of["Réference"]}
          </span>
        </h1>
        {of["N° Lot"] != "" && (
          <h1>
            N° Lot :{" "}
            <span className="text-3xl tracking-wider text-slate-900">
              {of["N° Lot"]}
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
      <AnimatePresence initial={false}>
        <div className="w-[90%] mx-auto  flex flex-col gap-10 justify-center items-center ">
          {/* lancement OF */}
          {of["Statut"] === "à lancer" && (
            <div className="mt-3 w-screen flex justify-center gap-3">
              <label>N° lot</label>
              <input
                onChange={(e) => (lot = e.target.value)}
                name="lot"
                type="text"
                className=""
              />
              <button
                onClick={() => {
                  dispatch(
                    lancerOF({
                      of: of["N° OF"],
                      lot: lot,
                    })
                  );
                }}
                className="text-lg bg-slate-500 p-2 text-slate-200"
              >
                Lancer
              </button>
            </div>
          )}

          {/* Derogation OF */}

          {of["DP"] !== "" && (
            <div className="mx-auto mt-3 w-full  gap-3 bg-slate-200 p-1 rounded">
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
                  <>
                    <textarea
                      placeholder={"Write the derogation here"}
                      onChange={(e) => {
                        derogation = e.target.value;
                      }}
                      name="lot"
                      type="text"
                      className="bg-slate-200 w-full  rounded-lg px-2 py-1 max-h-[10rem] "
                    />
                    <button
                      className="text-lg bg-slate-500 p-2 text-slate-200 w-[15rem] "
                      onClick={() => {
                        document
                          .getElementsByTagName("textarea")
                          .item(0).value = ``;

                        let var_of = { ...of, Statut: "Préparation MP" };
                        console.log("var", var_of);
                        dispatch(
                          Derogation({ N: of["N° OF"], DP: derogation })
                        );
                      }}
                    >
                      Déroger
                    </button>
                  </>
                )}
                {of.Derogation !== "" && (
                  <p className="w-full">{of.Derogation}</p>
                )}
              </fieldset>
            </div>
          )}

          {/* Preparation MP */}

          <div className="w-full bg-slMate-400 rounded-md">
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
          </div>
          {/* Montage */}
          <div className="w-full bg-slate-400 rounded-md">
            <div
              className="flex gap-2 items-center bg-slate-700 text-slate-200 hover:cursor-pointer rounded-md text-xl font-semibold tracking-widest pl-5 py-1"
              onClick={() => setisOpenM(!isOpenM)}
            >
              {isOpenM ? <IoIosArrowDown /> : <IoIosArrowForward />}
              <h1>Fabrication</h1>
            </div>

            {isOpenM && (
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
                <OperationsAccordion
                  plus={false}
                  table_header={["Operations", "Quantite Réalisé", "Statut"]}
                  operations={of.Operations}
                  of={of}
                />
              </motion.section>
            )}
          </div>
          {/* Controle */}
          <div className="w-full bg-slate-400 rounded-md">
            <div
              className="flex gap-2 items-center bg-slate-700 text-slate-200 hover:cursor-pointer rounded-md text-xl font-semibold tracking-widest pl-5 py-1"
              onClick={() => setisOpenM(!isOpenM)}
            >
              {isOpenM ? <IoIosArrowDown /> : <IoIosArrowForward />}
              <h1>Controle Qualite</h1>
            </div>

            {isOpenM && (
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
                <OperationsAccordionC
                  plus={false}
                  table_header={["Controles", "Quantite Réalisé", "Statut"]}
                  operations={of.Operations_C}
                  of={of}
                />
              </motion.section>
            )}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
