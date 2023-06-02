import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    isGuest: true,
    user: {
      service: "",
      fonction: "",
      atelier: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isGuest = false;
      console.log("action", action.payload);
      console.log("login", state.user);
    },
    logout: (state) => {
      state.user = {
        service: "",
        fonction: "",
        atelier: "",
      };
      state.isGuest = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
