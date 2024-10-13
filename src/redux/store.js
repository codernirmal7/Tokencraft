import { configureStore } from "@reduxjs/toolkit";
import web3Content from "./slices/web3Content";

export const store = configureStore({
  reducer: {
    web3Content: web3Content,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});