import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { OFs, data } from "../utils/Data";

export const planningSlice = createSlice({
  name: "planning",
  initialState: {
    planning: OFs,
  },
  reducers: {
    addOF: (state, action) => {
      state.planning[state.planning.length] = action.payload;
    },
    updateOF: (state, action) => {
      state.planning[action.payload[1]] = action.payload[0];
    },
    deleteOF: (state, action) => {
      state.planning.splice(action.payload, 1);
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
  },
});

// Action creators are generated for each case reducer function
export const { addOF, deleteOF, updateOF, setMPready } = planningSlice.actions;

export default planningSlice.reducer;
