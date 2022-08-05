import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { snippetSlice } from "./reducers/snippets";

const makeStore = () =>
  configureStore({
    reducer: {
      [snippetSlice.name]: snippetSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
