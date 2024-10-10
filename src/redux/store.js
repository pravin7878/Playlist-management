import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import dataReduser from "./slices/dataSlice";
import utilityReduser from "./slices/utilitySlice"

const store = configureStore({
  reducer: {
    utility : utilityReduser,
    user: userReduser,
    data: dataReduser,
  },
});

export default store;
