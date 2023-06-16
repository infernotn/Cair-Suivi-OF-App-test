import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { OFs, data } from "../utils/Data";
import { useDispatch } from "react-redux";

export const OfSlice = createSlice({
  name: "OFs",
  initialState: {
    OFs: OFs,
  },
  reducers: {
    prepMp: (state, action) => {
      console.log("hi there", state.OFs);
      state.OFs = state.OFs.map((of, index) => {
        if (action.payload.of == of["N° OF"]) {
          console.log("hi there 22", of);
          let mp = { ...of.MP, [action.payload.ref]: action.payload.mp };
          return {
            ...of,
            MP: mp,
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
      // action.payload.forEach((of) => (state.OFs[state.OFs.length] = of));
      state.OFs = [...state.OFs, ...action.payload];
      console.log("hi ofs", state.OFs);
    },

    setMPready: (state, action) => {
      console.log("n", state.planning);
      state.planning = state.planning.map((of) => {
        if (of["N° OF"] === action.payload[0]["N° OF"]) {
          console.log("n", of);
          console.log("n", of.MP[action.payload[1]]);
          // of.MP[action.payload[1]] = action.payload[2];
        }
      });
    },
    lancerOF: (state, action) => {
      state.OFs = state.OFs.map((of) => {
        if (action.payload.of == of["N° OF"]) {
          return {
            ...of,
            "N° Lot": action.payload.lot,
            Statut: "derogation FF",
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
  },
});

// Action creators are generated for each case reducer function
export const {
  prepMp,
  addOF,
  deleteOF,
  updateOF,
  setMPready,
  update_OF_list,
  lancerOF,
} = OfSlice.actions;

export default OfSlice.reducer;
