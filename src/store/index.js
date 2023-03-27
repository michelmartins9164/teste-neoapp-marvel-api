import { configureStore } from "@reduxjs/toolkit";
import { ComicsSlice } from "./controlStates";

export const store = configureStore({
    reducer: ComicsSlice,
    
})