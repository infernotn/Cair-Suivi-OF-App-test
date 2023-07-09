import { AnimatePresence, motion } from "framer-motion";
import AccordionContent from "./AccordionContent";
import React, { useState } from "react";
import { D_phase } from "../utils/variables";
const Accordion = ({ data, header, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  let Ofs: OF_type[] = [];
  // Ofs = useSelector((state) => state.ofs.OFs);
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  let filtredOFS = data.filter((of: OF_type) => of.Statut == header);
  // let filtredOFS = Ofs.filter((of) => of.Statut == header);
  return (
    <div className=" border-2  w-full">
      <AnimatePresence initial={false}>
        <motion.h1
          className={
            "hover:cursor-pointer font-bold underline w-full bg-violet-900 p-1  bg-opacity-90 hover:bg-violet-500 hover:text-purple-900 text-purple-200 "
          }
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          {header + " (" + filtredOFS.length + ")"}
        </motion.h1>

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
              expanded={expanded}
              setExpanded={setExpanded}
              table_header={D_phase[header]}
              data={filtredOFS}
              plus={true}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
