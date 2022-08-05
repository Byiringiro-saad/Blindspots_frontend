import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snippets: [],
};

export const snippetSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {
    setSnippets: (state, action) => {
      state.snippets = action.payload;
    },
  },
});
