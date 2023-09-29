import { configureStore } from "@reduxjs/toolkit";
import bazarReducer from "./bazarSlice";

export const store = configureStore({
  reducer: {
    bazar: bazarReducer,
  },
});
