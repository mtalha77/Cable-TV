// src/reducers/pagesReducer.js

import { createSlice } from "@reduxjs/toolkit";
const pagesReducer = createSlice({
  name: "pages",
  initialState: {
    pageData: null,
  },
  reducers: {
    setPageData: (state, action) => {
      state.pageData = action.payload;
    },
  },
});

export const { setPageData } = pagesReducer.actions;
export default pagesReducer.reducer;
