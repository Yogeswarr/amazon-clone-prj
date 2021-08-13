import { configureStore } from "@reduxjs/toolkit"
import basketReducer from '../slices/basketSlices'

export const store = configureStore({
    reducer: {
      basket: basketReducer,
    },
  });