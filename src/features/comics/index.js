import { createSlice } from "@reduxjs/toolkit";
import api, { configUrl } from "../../services/api";

const initialState = {
    comics: [],
};

export const comics = createSlice({
    name: "comics",
    initialState,
    reducers: {
        getAllComics: (state, action) => {
            state.comics = action.payload;
            console.log(state.comics)
        }
    }
})
export const { getAllComics } = comics.actions;
export const comicsHq = comics.reducer;
    
//state.comics = api.get(`/comics?${configUrl}`).then((response) => {
//      state.comics = [response] */