import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import planningReducer from "./PlanningSlice";
import OfReducer from "./OfSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    planning: planningReducer,
    ofs: OfReducer,
  },
});
export default store;
