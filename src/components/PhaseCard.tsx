import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import { D_phase, OF_subPhases } from "../utils/variables";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { OF_type } from "../utils/types";
import Accordion from "./Accordion";
type propstype = {
  sata: OF_type[];
  header: string;
  i: number;
  expanded: boolean;
  setExpanded: any;
};

export default function PhaseCard({ phase, data }) {
  const [expanded, setExpanded] = useState<number>(0);
  return (
    <div className="h-fit rounded-xl w-[80%] h-[40rem] bg-violet-400 flex flex-col justify-start items-center ">
      <h1 className="rounded-t-xl bg-violet-900 w-full h-[3rem] flex justify-center items-center  text-xl text-purple-200 font-bold tracking-widest">
        {phase}
      </h1>
      <div className=" flex flex-col gap-2 justify-start items-start p-8 w-full ">
        {OF_subPhases[phase].map((sub: string, index: number) => (
          <Accordion
            data={data}
            key={index}
            header={sub}
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </div>
  );
}

PhaseCard.prototype = {
  phase: PropTypes.string,
  data: PropTypes.arrayOf,
};
