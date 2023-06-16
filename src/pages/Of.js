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
import { addOF, lancerOF, prepMp } from "../store/OfSlice";
import { setPreparationDone } from "../store/OperationsSlice";

export default function Of() {
  const dispatch = useDispatch();
  let preparation = useSelector((state) => state.operations.prepareMP);
  const location = useLocation();
  let ofs = [];
  ofs = useSelector((state) =>
    state.ofs.OFs.filter((of) => of["N° OF"] == location.state.of["N° OF"])
  );
  console.log("oooof", ofs);
  let MPs = ofs[0].MP;

  console.log("oooof", MPs);
  const [isOpenMP, setisOpenMP] = useState(true);
  const [isOpenM, setisOpenM] = useState(true);
  let mp = { Quantite: 0, "N° lot MP": "", "Preparé par": "" };
  const handelAddMP = (mp) => {
    dispatch(
      prepMp({
        MP: mp,
        refMP: preparation.reference,
        OF: location.state.of["N° OF"],
      })
    );

    dispatch(setPreparationDone());
  };
  let lot = "";
  return (
    <div className="relative flex flex-col justify-start items-center">
      {/* lancement OF */}
      {location.state.of["Statut"] == "à lancer" && (
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
                  of: location.state.of["N° OF"],
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

      {preparation.ispreparing && (
        <div className="flex justify-center items-center bsolute top-0 left-0 w-screen h-screen bg-slate-300 bg-opacity-90">
          <forms className="w-[20rem] flex flex-col gap-3 items-center">
            <div className="w-full flex justify-between h-8">
              <label>N° Lot</label>
              <input
                type="text"
                onChange={(e) => (mp["N° Lot MP"] = e.target.value)}
              />
            </div>
            <div className="w-full flex justify-between h-8">
              <label>Quantite</label>
              <input
                type="number"
                onChange={(e) => (mp["Quantite"] = e.target.value)}
              />
            </div>
            <div className="w-full flex justify-between h-8">
              <label>Matricule</label>
              <input
                type="text"
                onChange={(e) => (mp["Preparé par"] = e.target.value)}
              />
            </div>

            <button
              className="bg-slate-600 text-slate-200 w-[7rem] "
              type="submit"
              onClick={() => {
                dispatch(
                  prepMp({
                    ref: preparation.reference,
                    mp: mp,
                    of: location.state.of["N° OF"],
                  })
                );
                dispatch(setPreparationDone());
              }}
            >
              Set Ready
            </button>
          </forms>
        </div>
      )}

      <div className="w-[90%] flex justify-around text-2xl text-slate-500 font-semibold my-8">
        <h1>
          N° OF :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {ofs[0]["N° OF"]}
          </span>
        </h1>
        <h1>
          Réference :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {ofs[0]["Réference"]}
          </span>
        </h1>
        {ofs[0]["N° Lot"] != "" && (
          <h1>
            N° Lot :{" "}
            <span className="text-3xl tracking-wider text-slate-900">
              {ofs[0]["N° Lot"]}
            </span>
          </h1>
        )}
        <h1>
          Quantite :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {ofs[0]["Quantite"]}
          </span>
        </h1>
      </div>
      <AnimatePresence initial={false}>
        <div className="w-[90%] mx-auto  flex flex-col gap-10 justify-start items-start ">
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
                  of={location.state.of}
                  table_header={["reference", "N° lot MP", "Quantite"]}
                  data={MPs}
                  plus={false}
                />
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
                {/* <Atelier_AccordionContent
                  headers={["operation", "poste de charge", "date", "quantite"]}
                  data={ops}
                /> */}
              </motion.section>
            )}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
