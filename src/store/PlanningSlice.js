import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { data } from "../utils/Data";

export const planningSlice = createSlice({
  name: "planning",
  initialState: {
    planning: data,
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
  },
});

// Action creators are generated for each case reducer function
export const { addOF, deleteOF, updateOF } = planningSlice.actions;

export default planningSlice.reducer;
