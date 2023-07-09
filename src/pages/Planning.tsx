import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Planning_addOF,
  Planning_deleteOF,
  Planning_updateOF,
  clear,
} from "../store/PlanningSlice";
// import { addOF, prepareMP, update_OF_list } from "../store/OfSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { D_phase, Theader_subphase, ateliers } from "../utils/Data";
import {
  getOfs,
  getPlanningOfWeek,
  uploadPlanningFile,
} from "../api/OfsManager";
import { OF_type } from "../utils/types";
import Accordion from "../components/Accordion";
import Accordion_planning from "../components/Accordion_planning";

export default function Planning() {
  const [expanded, setExpanded] = useState<number>(0);
  var currentDate: any = new Date();
  var startDate: any = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  var weekNumber = Math.ceil(days / 7);
  const [semaine, setSemaine] = useState<number>(weekNumber);
  const navigate = useNavigate();
  console.log("Planning");
  const dispatch = useDispatch();
  const [selectedOF, SetselectedOF] = useState(-1);
  // let planningA = useSelector((state) => state.planning.planningA);
  // let planningP = useSelector((state) => state.planning.planning);

  // let planning = semaine === "S+0" ? planningA : planningP;
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
  const [planningA, setPlanningA] = useState<OF_type[]>([]);
  // const handleClick = async (e) => {
  //   console.log(planning, "of");
  //   e.preventDefault();
  //   if (selectedOF === -1) {
  //     // dispatch(addOF({ of: of, selectedS: semaine }));
  //   } else {
  //     // dispatch(updateOF({ of: of, selected: selectedOF, selectedS: semaine }));
  //   }
  // };
  // useEffect(() => {}, [planningA, planningP]);
  let planning: OF_type[] = [];

  useEffect(() => {
    getPlanningOfWeek(semaine).then((ofs) => setPlanningA(ofs));
    console.log("planning", planningA);
  }, []);
  return (
    <div className="absolute flex flex-col pt-5 justify-center items-center  z-40 top-0  w-screen h-screen  ">
      <div className="relative px-10 gap-10 rounded-2xl shadow-2xl bg-violet-600  w-[60rem] h-[60rem] flex flex-col justify-start items-center">
        <button
          onClick={() => {
            if (semaine === weekNumber) {
              setSemaine(weekNumber + 1);
            } else {
              setSemaine(weekNumber);
            }
            // console.log("planning A", planningA);
            // console.log("planning P", planningP);
            // console.log("planning", planning);
          }}
          className="absolute left-7 top-5 border-2 border-violet-100 bg-violet-500 py-2 px-3 rounded-xl hover:bg-violet-600 text-violet-100 text-lg"
          type="button"
        >
          {" Semaine : "}
          <span className="font-bold underline">{semaine}</span>
        </button>
        {/* valider */}
        <button
          onClick={() => {}}
          className="absolute right-7 bottom-5 bg-violet-500 py-2 px-3 rounded-xl hover:text-violet-900 text-violet-100 text-lg"
          type="button"
        >
          Valider
        </button>
        <div
          // onClick={() => setIsPlanning(!isPlanning)}
          className="absolute top-2 right-2"
        >
          <IoMdClose
            onClick={() => navigate("/")}
            size={"2rem"}
            className="hover:cursor-pointer  hover:scale-110 text-violet-200"
          />
        </div>

        <h1 className="font-extrabold tracking-wider mt-5 text-violet-200 text-4xl underline">
          Planning
        </h1>

        {/* <input
          type="file"
          onChange={() => {
            console.log("upload");
            uploadPlanningFile("", 27).then((res) => {
              console.log(res);
            });
          }}
        /> */}

        {["OFs en retard", "OF du semaine"].map((sub, index) => {
          let data: OF_type[] = [];
          if (sub === "OFs en retard") {
            data = planningA.filter((of) => of.Semaine_prévu < semaine);
          } else {
            data = planningA.filter((of) => of.Semaine_prévu == semaine);
          }
          return (
            <Accordion_planning
              data={data}
              // key={index}
              header={sub}
              i={index}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          );
        })}

        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            // handleClick(e).then(() => {
            //   setOf(["", "", 0, "", "", ""]);
            //   e.target.reset();
            // });
          }}
          // onsubmit="return false"
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
                // setOf({ ...of, Quantite: e.target.value });
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
            <input
              required
              type="text"
              className="w-[6rem]"
              onChange={(e) => {
                let v = of;
                // v[3] = e.target.value;
                setOf(v);
              }}
            />
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
              className="text-violet-200 text-2xl"
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
                className="text-violet-200 text-2xl"
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
                className="text-violet-200 text-2xl"
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
            className="text-violet-200 text-2xl"
          >
            Cancel
          </button>
        </form> */}
      </div>
    </div>
  );
}
