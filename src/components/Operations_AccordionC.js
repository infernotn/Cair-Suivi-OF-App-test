import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BsFillPlusCircleFill, BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  saveSubOperation,
  saveSubOperationC,
  setMPready,
} from "../store/OfSlice";
import { useSelector } from "react-redux";
import { setPreparation } from "../store/OperationsSlice";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export default function OperationsAccordionC({
  plus,
  table_header = [],
  operations = {},
  of,
}) {
  let subOP = {
    "Date debut": "",
    "Date fin": "",
    Quantite: 0,
    Matricule: 0,
  };
  let date = new Date();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const SetReady = (mp, index) => {
    dispatch(setMPready([of, index, "ready"]));
  };
  const [selectedOP, setSelectedOP] = useState("");
  return (
    <div>
      <table className="w-full">
        {operations.Operations_list.map((op, index) => {
          return (
            <>
              <tr
                onClick={() => {
                  if (selectedOP === index) {
                    setSelectedOP(-1);
                  } else {
                    setSelectedOP(index);
                  }
                }}
                className={
                  " bg-slate-500 font-bold w-full text-slate-900  bg-opacity-70 hover:bg-slate-800 hover:text-slate-200 border-collapse border-y-2 border-slate-900 "
                }
              >
                {op.operation +
                  (op.Statut !== ""
                    ? " (" + op.QuantiteTotale + "/" + of.Quantite + ") "
                    : "")}
                {/* {["operation", "QuantiteTotale", "Statut"].map(
                  (header, index) => {
                    console.log("sub header", header);
                    return <td>{op[header]}</td>;
                  }
                )} */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              {index === selectedOP && (
                <tr
                  className={
                    " underline font-semibold bg-slate-400 w-full text-slate-900  bg-opacity-70 hover:bg-slate-800 hover:text-slate-200 border-collapse border-y-2 border-slate-900 "
                  }
                >
                  {["Date debut", "Date fin", "Quantite", "Matricule"].map(
                    (header, index) => {
                      console.log("sub header", header);
                      return <td>{header}</td>;
                    }
                  )}
                </tr>
              )}
              {index === selectedOP &&
                op.historique.length !== 0 &&
                op.historique.map((sub_op) => {
                  return (
                    <tr
                      className={
                        "w-full text-slate-900  bg-slate-100 bg-opacity-70 hover:bg-slate-800 hover:text-slate-200 border-collapse border-y-2 border-slate-900 "
                      }
                    >
                      {["Date debut", "Date fin", "Quantite", "Matricule"].map(
                        (header, index) => {
                          console.log("sub header", header);
                          return <td>{sub_op[header]}</td>;
                        }
                      )}
                      <td></td>
                    </tr>
                  );
                })}

              {index === selectedOP && op.Statut === "En cours" && (
                <tr className=" bg-slate-900 h-10">
                  <td>
                    {" "}
                    <input
                      onChange={(e) => {
                        subOP["Date debut"] = e.target.value;
                      }}
                      className="bg-opacity-0"
                      type="datetime-local"
                    />{" "}
                  </td>
                  <td>
                    {" "}
                    <input
                      onChange={(e) => {
                        subOP["Date fin"] = e.target.value;
                      }}
                      type="datetime-local"
                    />{" "}
                  </td>
                  <td>
                    {" "}
                    <input
                      onChange={(e) => {
                        subOP.Quantite = parseInt(e.target.value);
                      }}
                      type="number"
                    />{" "}
                  </td>
                  <td className="">
                    {" "}
                    <input
                      onChange={(e) => {
                        subOP.Matricule = e.target.value;
                      }}
                      type="number"
                    />{" "}
                  </td>
                  <button
                    onClick={() => {
                      console.log("save");
                      dispatch(
                        saveSubOperationC({
                          N: of["N° OF"],
                          op: selectedOP,
                          history: [
                            ...of["Operations_C"]["Operations_list"][
                              selectedOP
                            ]["historique"],
                            subOP,
                          ],
                        })
                      );
                    }}
                    className=" text-slate-200"
                  >
                    Save
                  </button>
                </tr>
              )}
            </>
          );
        })}
      </table>
    </div>
  );
}
