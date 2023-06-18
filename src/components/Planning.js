import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Planning_addOF,
  Planning_deleteOF,
  Planning_updateOF,
  clear,
} from "../store/PlanningSlice";
import { addOF, prepareMP, update_OF_list } from "../store/OfSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { D_phase, Theader_subphase, ateliers } from "../utils/Data";

export default function Planning({ isPlanning, setIsPlanning }) {
  const [semaine, setSemaine] = useState("S+0");

  console.log("Planning");
  const dispatch = useDispatch();
  const [selectedOF, SetselectedOF] = useState(-1);
  let planningA = useSelector((state) => state.planning.planningA);
  let planningP = useSelector((state) => state.planning.planning);

  let planning = semaine === "S+0" ? planningA : planningP;
  let v = {
    "N° OF": "NA",
    Réference: "NA",
    "N° Lot": "NA",
    Quantite: 0,
    Statut: "à lancer",
    atelier: "NA",
    "Date prévu": "NA",
    DP: "NA",
    MP: [],
    Operations: {
      "Operation en cours": 0,
      Operations_list: [
        {
          operation: "Operation 1",
          Statut: "En cours",
          QuantiteTotale: 200,
          historique: [
            {
              "Date debut": "14/06/2023",
              "Date fin": "14/06/2023",
              Quantite: 100,
              Matricule: 3103,
            },
            {
              "Date debut": "14/06/2023",
              "Date fin": "14/06/2023",
              Quantite: 100,
              Matricule: 3103,
            },
          ],
        },
        {
          operation: "Operation 2",
          Statut: "",
          QuantiteTotale: 0,
          historique: [
            {
              "Date debut": "14/06/2023",
              "Date fin": "14/06/2023",
              Quantite: 100,
              Matricule: 3103,
            },
          ],
        },
        {
          operation: "Operation 3",
          Statut: "",
          QuantiteTotale: 0,
          historique: [],
        },
      ],
    },
    Operations_C: {
      "Operation en cours": -1,
      Operations_list: [
        {
          operation: "Controle 1",
          Statut: "",
          QuantiteTotale: 0,
          historique: [],
        },
        {
          operation: "Controle 2",
          Statut: "",
          QuantiteTotale: 0,
          historique: [],
        },
        {
          operation: "Controle 3",
          Statut: "",
          QuantiteTotale: 0,
          historique: [],
        },
      ],
    },
  };
  const [of, setOf] = useState(v);
  const handleClick = async (e) => {
    console.log(planning, "of");
    e.preventDefault();
    if (selectedOF === -1) {
      // dispatch(addOF({ of: of, selectedS: semaine }));
    } else {
      // dispatch(updateOF({ of: of, selected: selectedOF, selectedS: semaine }));
    }
  };
  useEffect(() => {}, [planningA, planningP]);

  return (
    <div className="absolute flex flex-col pt-5 justify-center items-center  z-40 top-0  w-screen h-screen bg-opacity-95 bg-slate-500 ">
      <div className="relative px-10 gap-10 rounded-2xl shadow-2xl bg-slate-600 w-[60rem] h-[60rem] flex flex-col justify-start items-center">
        <button
          onClick={() => {
            if (semaine === "S+0") {
              setSemaine("S+1");
            } else {
              setSemaine("S+0");
            }
            console.log("planning A", planningA);
            console.log("planning P", planningP);
            console.log("planning", planning);
          }}
          className="absolute left-7 top-5 bg-slate-500 py-2 px-3 rounded-xl hover:text-slate-900 text-slate-100 text-lg"
          type="button"
        >
          {" "}
          {semaine}
        </button>
        <button
          onClick={() => {
            if (semaine === "S+0") {
              dispatch(update_OF_list(planning));
            } else {
              dispatch(addOF(planning));

              dispatch(clear());
            }
          }}
          className="absolute right-7 bottom-5 bg-slate-500 py-2 px-3 rounded-xl hover:text-slate-900 text-slate-100 text-lg"
          type="button"
        >
          Valider
        </button>
        <div
          onClick={() => setIsPlanning(!isPlanning)}
          className="absolute top-2 right-2"
        >
          <IoMdClose
            size={"2rem"}
            className="hover:cursor-pointer hover:text-slate-900 text-slate-200"
          />
        </div>
        <h1 className="font-extrabold tracking-wider mt-5 text-slate-200 text-4xl underline">
          Planning
        </h1>

        <table className=" w-full text-left h-fit  text-black">
          <tr className="text-slate-200 underline">
            <th>Réference</th>
            <th>N° OF</th>
            <th>Quantite</th>
            <th>Atelier</th>
            <th>Date Prevu</th>
            <th>N° DP</th>
          </tr>

          {planning.map((of, index) => {
            return (
              <tr
                className={index === selectedOF ? "bg-slate-50" : ""}
                onClick={async () => {
                  if (of.Statut == "à lancer") {
                    await SetselectedOF(index);
                    await setOf(of);
                    console.log("selected", index, planning[index]);
                  } else {
                    await SetselectedOF(-1);
                    await setOf(v);
                  }
                }}
              >
                {[
                  "Réference",
                  "N° OF",
                  "Quantite",
                  "atelier",
                  "Date prévu",
                  "DP",
                ].map((el) => {
                  return <th>{of[el] === "" ? "NA" : of[el]}</th>;
                })}
              </tr>
            );
          })}
        </table>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick(e).then(() => {
              setOf(["", "", 0, "", "", ""]);
              e.target.reset();
            });
          }}
          onsubmit="return false"
          className="w-full flex flex-col items-center gap-4"
        >
          <div className="w-full flex justify-between">
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                setOf({ ...of, Réference: e.target.value });
              }}
            />
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                console.log("v", of);
                setOf({ ...of, "N° OF": e.target.value });
                console.log("v", of);
              }}
            />
            <input
              type="number"
              className="w-[6rem]"
              onChange={(e) => {
                setOf({ ...of, Quantite: e.target.value });
              }}
            />
            <select
              className="w-[6rem]"
              onChange={(e) => {
                setOf({ ...of, atelier: e.target.value });
              }}
            >
              {ateliers.map((atelier) => {
                return <option> {atelier} </option>;
              })}
            </select>
            {/* <input
              required
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                v[3] = e.target.value;
                setOf(v);
              }}
            /> */}
            <input
              type="date"
              className="w-[6rem]"
              onChange={(e) => {
                setOf({ ...of, "Date prévu": e.target.value });
              }}
            />
            <input
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                setOf({ ...of, DP: e.target.value });
              }}
            />
          </div>
          {selectedOF === -1 ? (
            <button
              onClick={() => {
                dispatch(Planning_addOF({ of: of, selectedS: semaine }));
                setOf(v);
              }}
              type="submit"
              className="text-slate-200 text-2xl"
            >
              add
            </button>
          ) : (
            <div className="flex gap-5">
              <button
                onClick={() => {
                  dispatch(
                    Planning_updateOF({
                      selected: selectedOF,
                      selectedS: semaine,
                      of: of,
                    })
                  );
                  SetselectedOF(-1);
                  setOf(v);
                }}
                type="submit"
                className="text-slate-200 text-2xl"
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(
                    Planning_deleteOF({
                      selected: selectedOF,
                      selectedS: semaine,
                    })
                  );
                  SetselectedOF(-1);
                  setOf(v);
                }}
                type="submit"
                className="text-slate-200 text-2xl"
              >
                Delete
              </button>
            </div>
          )}

          <button
            onClick={() => {
              setOf(v);
              SetselectedOF(-1);
            }}
            className="text-slate-200 text-2xl"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
