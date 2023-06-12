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

export default function Of() {
  const location = useLocation();
  const [isOpenMP, setisOpenMP] = useState(true);
  const [isOpenM, setisOpenM] = useState(true);
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-[90%] flex justify-around text-2xl text-slate-500 font-semibold my-8">
        <h1>
          N° OF :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of["N° OF"]}
          </span>
        </h1>
        <h1>
          Réference :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of["Réference"]}
          </span>
        </h1>
        <h1>
          N° Lot :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of["N° Lot"]}
          </span>
        </h1>
        <h1>
          Quanite :{" "}
          <span className="text-3xl tracking-wider text-slate-900">
            {location.state.of["Quantite"]}
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
                  data={location.state.of["MP"]}
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
              <h1>Montage</h1>
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
