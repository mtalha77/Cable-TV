// src/features/counter/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const zipCodeReducer = createSlice({
  name: "zipCode",
  initialState: {
    zipCodeData: null,
  },

  reducers: {
    setZipCodeData: (state, action) => {
      state.zipCodeData = action.payload;
    },
  },
});

export const { setZipCodeData } = zipCodeReducer.actions;
export default zipCodeReducer.reducer;
