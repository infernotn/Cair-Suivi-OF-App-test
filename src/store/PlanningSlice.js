import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { OFs_data } from "../utils/Data";

export const planninglice = createSlice({
  name: "planning",
  initialState: {
    planningA: OFs_data,
    planning: [],
  },
  reducers: {
    Planning_addOF: (state, action) => {
      if (action.payload.selectedS === "S+0") {
        state.planningA[state.planningA.length] = action.payload.of;
      } else {
        state.planning[state.planning.length] = action.payload.of;
      }
    },
    Planning_updateOF: (state, action) => {
      if (action.payload.selectedS === "S+0") {
        state.planningA[action.payload.selected] = action.payload.of;
      } else {
        state.planning[action.payload.selected] = action.payload.of;
      }
    },
    Planning_deleteOF: (state, action) => {
      if (action.payload.selectedS === "S+0") {
        state.planningA.splice(action.payload.selected, 1);
      } else {
        state.planning.splice(action.payload.selected, 1);
      }
    },
    clear: (state, action) => {
      state.planningA.push(...state.planning);
      state.planning = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { Planning_addOF, Planning_deleteOF, Planning_updateOF, clear } =
  planninglice.actions;

export default planninglice.reducer;
