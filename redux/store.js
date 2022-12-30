import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducers/reducer";
const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});
export default store;
