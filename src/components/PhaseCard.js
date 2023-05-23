import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import AccordionContent from "./AccordionContent";

const Accordion = ({ header, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  const data = [
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
    ["5tg000", "23Cair1006", "23L15", "2000"],
  ];
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.h1
        className="hover:cursor-pointer font-bold underline w-full"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {header + " (" + data.length + ")"}
      </motion.h1>

      <AnimatePresence initial={false}>
        {isOpen && (
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
            <AccordionContent data={data} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default function PhaseCard({ phase }) {
  const [expanded, setExpanded] = useState(0);
  return (
    <div className="rounded-xl w-[25rem] h-[40rem] bg-slate-400 flex flex-col justify-start items-center ">
      <h1 className="rounded-t-xl bg-slate-500 w-full h-[3rem] flex justify-center items-center  text-xl text-slate-200 font-bold tracking-widest">
        {phase}
      </h1>
      <div className="flex flex-col gap-2 justify-start items-start p-8 w-full ">
        {["En cours", "Bloqué"].map((header, index) => (
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
