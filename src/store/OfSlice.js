import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { OFs, data } from "../utils/Data";

export const OfSlice = createSlice({
  name: "planning",
  initialState: {
    OFs: OFs,
  },
  reducers: {
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
    // updateOF: (state, action) => {
    //   state.planningS[action.payload[1]] = action.payload[0];
    // },
    // deleteOF: (state, action) => {
    //   state.planningS.splice(action.payload, 1);
    // },
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
  },
});

// Action creators are generated for each case reducer function
export const { addOF, deleteOF, updateOF, setMPready } = OfSlice.actions;

export default OfSlice.reducer;
