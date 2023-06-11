import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import AccordionContent from "./Atelier_AccordionContent";
import { OF_subPhases, data } from "../utils/Data";
import { useSelector } from "react-redux";

const Accordion = ({ header, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  const planning = useSelector((state) => state.planning.planning);
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className=" border-2 border-slate-900 w-full">
      <motion.h1
        className={
          "hover:cursor-pointer font-bold underline w-full bg-slate-900 p-1  bg-opacity-90 hover:bg-slate-500 hover:text-slate-900 text-slate-200 "
        }
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {header + " (" + data.length + ")"}
      </motion.h1>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            className="w-full mt-1"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", scaleY: 1 },
              collapsed: { opacity: 0, height: 0, scaleY: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordionContent
              headers={[
                "N° OF",
                "Réference",
                "N° Lot",
                "Quantite",
                "Statut",
                "Plus",
              ]}
              data={planning}
              plus={true}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PhaseCard({ phase }) {
  const [expanded, setExpanded] = useState(0);
  return (
    <div className="rounded-xl w-[80%] h-[40rem] bg-slate-400 flex flex-col justify-start items-center ">
      <h1 className="rounded-t-xl bg-slate-500 w-full h-[3rem] flex justify-center items-center  text-xl text-slate-200 font-bold tracking-widest">
        {phase}
      </h1>
      <div className=" flex flex-col gap-2 justify-start items-start p-8 w-full ">
        {OF_subPhases[phase].map((header, index) => (
          <Accordion
            header={header}
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </div>
  );
}
