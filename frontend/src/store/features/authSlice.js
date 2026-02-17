import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
    user: null,
    token: token || null,
    isLogin:  !!token,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
        loginStart: (state) => {
            state.isLoading = true;
        },

        loginSuccess: (state, action) => {  
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
            state.isLoading = false;
        },

        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.isLogin = false;   
        },
    },
});

export const { loginStart, loginSuccess, logOut } = authSlice.actions;

export default authSlice.reducer;
