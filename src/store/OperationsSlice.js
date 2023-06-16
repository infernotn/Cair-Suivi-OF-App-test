import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { OFs, data } from "../utils/Data";
import { useSelector } from "react-redux";

export const OperationsSlice = createSlice({
  name: "operations",
  initialState: {
    prepareMP: { ispreparing: false, reference: "" },
  },
  reducers: {
    setPreparation: (state, action) => {
      state.prepareMP = { ispreparing: true, reference: action.payload };

      console.log("preparation", state.prepareMP);
    },
    setPreparationDone: (state, action) => {
      state.prepareMP = { ispreparing: false, reference: "" };

      console.log("preparation done", state.prepareMP);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPreparation, setPreparationDone } = OperationsSlice.actions;

export default OperationsSlice.reducer;
