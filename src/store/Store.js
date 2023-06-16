import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import planningReducer from "./PlanningSlice";
import OfReducer from "./OfSlice";
import OperationsReducer from "./OperationsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    planning: planningReducer,
    ofs: OfReducer,
    operations: OperationsReducer,
  },
});
export default store;
