import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import planningReducer from "./PlanningSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    planning: planningReducer,
  },
});
export default store;
