import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import locationReducer from '../features/locationSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userLocation: locationReducer,
  },
});
