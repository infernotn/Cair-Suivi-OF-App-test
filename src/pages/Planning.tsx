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
import { D_phase, Theader_subphase } from "../utils/Data";
import {
  getOfs,
  getPlanningOfWeek,
  uploadPlanningFile,
} from "../api/OfsManager";
import { OF_type } from "../utils/types";
import Accordion from "../components/Accordion";
import Accordion_planning from "../components/Accordion_planning";
import AccordionContent from "../components/AccordionContent";
import { ateliers, of_template } from "../utils/variables";

export default function Planning() {
  const [expanded, setExpanded] = useState<number>(0);
  var currentDate: any = new Date();
  var startDate: any = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

  var weekNumber = Math.ceil(days / 7);
  const [semaine, setSemaine] = useState<{ AC: number; PR: number }>({
    AC: weekNumber,
    PR: weekNumber + 1,
  });
  const [selectedSemaine, setselectedSemaine] = useState<number>(weekNumber);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOF, SetselectedOF] = useState<{ N_OF: string; index: number }>(
    {
      N_OF: "",
      index: -1,
    }
  );
  const [of, setOf] = useState<OF_type>(of_template);
  let ofToDelete = [];
  const [planningA, setPlanningA] = useState<OF_type[]>([]);
  const [planningP, setPlanningP] = useState<OF_type[]>([]);

  let planning: OF_type[] = [];
  useEffect(() => {
    setOf(planningP.filter((of: OF_type) => of.N_OF === selectedOF.N_OF)[0]);
    console.log(of);
  }, [selectedOF]);
  useEffect(() => {
    getPlanningOfWeek(selectedSemaine).then((ofs) => {
      setPlanningA(ofs.filter((of: OF_type) => of.Semaine_prévu <= semaine.AC));
    });
    console.log("planning", planningA);
  }, [selectedSemaine]);

  return (
    <div className="absolute flex flex-col pt-5 justify-center items-center  z-40 top-0  w-screen h-screen  ">
      <div className="relative px-10 gap-10 rounded-2xl shadow-2xl bg-violet-600  w-[60rem] h-[60rem] flex flex-col justify-start items-center">
        <button
          onClick={() => {
            if (selectedSemaine === weekNumber) {
              setselectedSemaine(weekNumber + 1);
            } else {
              setselectedSemaine(weekNumber);
            }
            // console.log("planning A", planningA);
            // console.log("planning P", planningP);
            // console.log("planning", planning);
          }}
          className="absolute left-7 top-5 border-2 border-violet-100 bg-violet-500 py-2 px-3 rounded-xl hover:bg-violet-600 text-violet-100 text-lg"
          type="button"
        >
          {" Semaine : "}
          <span className="font-bold underline">{selectedSemaine}</span>
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

        {selectedSemaine === semaine.AC &&
          ["OFs en retard", "OF du semaine"].map((sub, index) => {
            let data: OF_type[] = [];
            if (sub === "OFs en retard") {
              data = planningA.filter(
                (of) => of.Semaine_prévu <= selectedSemaine
              );
            } else {
              data = planningA.filter(
                (of) => of.Semaine_prévu === selectedSemaine
              );
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

        {selectedSemaine === semaine.PR && (
          <div className={"  w-full h-full   "}>
            <AccordionContent
              table_header={[
                "Réference",
                "N° OF",
                "Quantite",
                "Atelier",
                "Date prévu",
                "N° DP",
                "DP_version",
              ]}
              data={planningP}
              plus={false}
              selectedOF={selectedOF}
              setSelected={SetselectedOF}
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handleClick(e).then(() => {
                //   setOf(["", "", 0, "", "", ""]);
                //   e.target.reset();
                // });
              }}
              className="w-full flex flex-col items-center gap-4 mt-10"
            >
              <div className="w-full flex justify-between">
                <input
                  required
                  placeholder="Réference"
                  type="text"
                  className="w-[6rem] text-center"
                  onChange={(e) => {
                    setOf({ ...of, Reference: e.target.value });
                  }}
                />
                <input
                  required
                  placeholder="N° OF	"
                  type="text"
                  className="w-[6rem] text-center"
                  onChange={(e) => {
                    setOf({ ...of, N_OF: e.target.value });
                    console.log("v", of);
                  }}
                />
                <input
                  required
                  placeholder="Quantite"
                  type="number"
                  className="w-[6rem] text-center"
                  onChange={(e) => {
                    setOf({ ...of, Quantite: parseFloat(e.target.value) });
                  }}
                />
                <select
                  placeholder="Atelier"
                  className="w-[120px] text-center"
                  onChange={(e) => {
                    setOf({ ...of, atelier: e.target.value });
                  }}
                >
                  {ateliers.map((atelier) => {
                    return <option> {atelier} </option>;
                  })}
                </select>

                <input
                  placeholder="	Date prévu"
                  type="date"
                  className="w-[6rem] text-center"
                  onChange={(e) => {
                    setOf({ ...of, Date_prévu: e.target.value });
                  }}
                />
                <input
                  placeholder="	N° DP"
                  type="text"
                  className="w-[6rem] text-center"
                  onChange={(e) => {
                    setOf({ ...of, DP: e.target.value });
                  }}
                />
                <input
                  placeholder="DP Version"
                  type="number"
                  className="w-[5rem] text-center"
                  onChange={(e) => {
                    setOf({ ...of, DP_version: parseInt(e.target.value) });
                  }}
                />
              </div>
              {selectedOF.index === -1 ? (
                <button
                  onClick={() => {
                    if (of.N_OF !== "") {
                      let N_OFs: string[] = [];
                      planningP.forEach((of) => {
                        N_OFs.push(of.N_OF);
                      });
                      if (N_OFs.indexOf(of.N_OF) === -1) {
                        setPlanningP([...planningP, of]);
                      } else {
                        window.alert("OF already existe");
                      }
                    }
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
                      // dispatch(
                      //   Planning_updateOF({
                      //     selected: selectedOF,
                      //     selectedS: semaine,
                      //     of: of,
                      //   })
                      //   );
                      //   SetselectedOF(-1);
                      //   setOf(v);
                    }}
                    type="submit"
                    className="text-violet-200 text-2xl"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      console.log("delete", of);
                      ofToDelete.push(of);
                      setPlanningP(planningP.filter((p) => p.N_OF !== of.N_OF));
                      SetselectedOF({ N_OF: "", index: -1 });
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
                  setOf(of_template);
                  SetselectedOF({ N_OF: "", index: -1 });
                }}
                className="text-violet-200 text-2xl"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
