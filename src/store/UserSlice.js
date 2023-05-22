import { createSlice } from "@reduxjs/toolkit";

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
      state.isGuest = true;
      console.log("action", action.payload);
      console.log("login", state.user);
    },
    logout: (state) => {
      state.user = {
        service: "",
        fonction: "",
        atelier: "",
      };
      state.isGuest = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
