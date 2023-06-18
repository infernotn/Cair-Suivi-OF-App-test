import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { OFs_data } from "../utils/Data";
import { useDispatch } from "react-redux";

const initialState = { OFs: OFs_data };
export const OfSlice = createSlice({
  name: "OFs",
  initialState,
  reducers: {
    setMPready: (state, action) => {
      state.OFs = state.OFs.map((of) => {
        if (of["N° OF"] === action.payload.N) {
          return {
            ...of,
            MP: [...of.MP, action.payload.mp],
          };
        } else return of;
      });
      console.log("Update MP done", state.OFs);
    },
    Derogation: (state, action) => {
      state.OFs = state.OFs.map((of) => {
        if (of["N° OF"] === action.payload.N) {
          return {
            ...of,
            Derogation: action.payload.DP,
            Statut: "Préparation MP",
          };
        } else return of;
      });
      console.log("Update OF done", state.OFs);
    },
    MPready: (state, action) => {
      state.OFs = state.OFs.map((of, index) => {
        if (action.payload.N === of["N° OF"]) {
          return {
            ...of,
            Statut: "Fabrication",
          };
        } else return of;
      });
    },
    addOF: (state, action) => {
      // action.payload.forEach((of) => (state.OFs[state.OFs.length] = of));
      state.OFs = [...state.OFs, ...action.payload];
      console.log("hi ofs", state.OFs);
    },
    updateOF: (state, action) => {
      console.log("Update OF done", state.OFs);
      state.OFs = state.OFs.map((of) => {
        if (of["N° OF"] === action.payload.N) {
          return action.payload.of;
        } else return of;
      });
    },

    lancerOF: (state, action) => {
      state.OFs = state.OFs.map((of) => {
        if (action.payload.of === of["N° OF"]) {
          return {
            ...of,
            "N° Lot": action.payload.lot,
            Statut: of.DP === "" ? "Préparation MP" : "derogation FF",
          };
        } else return of;
      });
    },
    update_OF_list: (state, action) => {
      let toUpdate = action.payload.filter((of) => of.Statut == "à lancer");
      console.log(toUpdate);
      toUpdate.forEach((el, index) => {
        let existe = false;
        state.OFs = state.OFs.map((of) => {
          console.log("el", index);
          console.log("el", of);
          if (el["N° OF"] == of["N° OF"]) {
            existe = true;
            console.log("ell", el);
            return el;
          } else return of;
        });
        if (!existe) {
          state.OFs.push(el);
        }
      });
      console.log("el", state.OFs);
    },
    saveSubOperationC: (state, action) => {
      state.OFs = state.OFs.map((of) => {
        let el = of["Operations_C"];

        el["Operations_list"][action.payload.op]["historique"] =
          action.payload.history;
        let q = 0;
        el["Operations_list"][action.payload.op]["historique"].forEach((i) => {
          q += parseInt(i.Quantite);
        });

        el["Operations_list"][action.payload.op]["QuantiteTotale"] = q;
        if (of["N° OF"] === action.payload.N) {
          let r = {};
          if (q >= of.Quantite) {
            console.log("operation termine");
            if (action.payload.op < el["Operations_list"].length - 1) {
              el["Operations_list"][action.payload.op + 1]["Statut"] =
                "En cours";
              el["Operations_list"][action.payload.op]["Statut"] = "";
            } else {
              el["Operations_list"][action.payload.op]["Statut"] = "";
            }
          }

          return {
            ...of,
            Operations_C: el,
          };
        } else return of;
      });
      console.log("Update MP donex", state.OFs);
    },
    saveSubOperation: (state, action) => {
      state.OFs = state.OFs.map((of) => {
        let el = of["Operations"];
        let el_c = of["Operations_C"];
        el["Operations_list"][action.payload.op]["historique"] =
          action.payload.history;
        let q = 0;
        el["Operations_list"][action.payload.op]["historique"].forEach((i) => {
          q += parseInt(i.Quantite);
        });

        el["Operations_list"][action.payload.op]["QuantiteTotale"] = q;
        if (of["N° OF"] === action.payload.N) {
          let r = {};
          if (q >= of.Quantite) {
            console.log("operation termine");
            if (action.payload.op < el["Operations_list"].length - 1) {
              el["Operations_list"][action.payload.op + 1]["Statut"] =
                "En cours";
              el["Operations_list"][action.payload.op]["Statut"] = "";
            } else {
              el["Operations_list"][action.payload.op]["Statut"] = "";
              el_c["Operations_list"][0]["Statut"] = "En cours";
            }
          }

          return {
            ...of,
            Operations: el,
          };
        } else return of;
      });
      console.log("Update MP donex", state.OFs);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveSubOperationC,
  saveSubOperation,
  MPready,
  addOF,
  deleteOF,
  updateOF,
  setMPready,
  update_OF_list,
  lancerOF,
  Derogation,
} = OfSlice.actions;

export default OfSlice.reducer;
