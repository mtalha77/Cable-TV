// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import zipCodeReducer from "./reducers/zipCodeReducer";
import pagesReducer from "./reducers/pagesReducer";

const store = configureStore({
  reducer: {
    zipCodeReducer,
    pages: pagesReducer,
  },
});

export default store;
