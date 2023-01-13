import { configureStore } from "@reduxjs/toolkit";
import { transportApi } from "./api/transportApi";

const store = configureStore({
  reducer: {
    [transportApi.reducerPath]: transportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transportApi.middleware),
});
export default store;
