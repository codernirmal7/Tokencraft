import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isWalletConnected: false,
    status: "idel", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const web3ContentSlice = createSlice({
    name: "web3Content",
    initialState,
    reducers: {
        
    },
});

// export const { } = web3ContentSlice.actions;
export default web3ContentSlice.reducer;