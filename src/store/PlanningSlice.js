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
      console.log("olayload", action.payload);
      state.planning[state.planning.length] = action.payload;
      console.log("olayload", state.planning);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOF } = planningSlice.actions;

export default planningSlice.reducer;
