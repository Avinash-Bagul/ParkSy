import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userLat: null,
   userLng: null
};

const locationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
        getUserLocation: (state) => {
            state.userLat = true;
            state.userLat = true
        },

    },
});

export const { getUserLocation } = locationSlice.actions;

export default locationSlice.reducer;
