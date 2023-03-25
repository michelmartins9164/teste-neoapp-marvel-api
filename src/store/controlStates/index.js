import { createSlice } from "@reduxjs/toolkit";
import { api, configUrl } from '../../services/api';
const initialState = {
    ListComics: {
        comics: [],
        comicId: [],
        imageSrc: '',
        titleComic: '',
        priceComic: 0,
        count: 0,
        prev: 0,
        next: 5,
        maxLimit: ''
    }
}

const ListComics = createSlice({
    name: "comics",
    initialState,
    reducers: {
        getAllComics: (state, actions) => {
            state.ListComics.comics = actions.payload;
        },
        getComicId: (state, actions) => {
            state.ListComics.comicId = actions.payload;
            console.log(state.ListComics.comicId);
        },
        getImage: (state, actions) => {
            state.ListComics.imageSrc = actions.payload;
        },
        getTitle: (state, actions) => {
            state.ListComics.titleComic = actions.payload;
            console.log(state.ListComics.titleComic);
        },
        getPrice: (state, actions) => {
            state.ListComics.priceComic = actions.payload;
            console.log(state.ListComics.priceComic);
        },
        prevPage: (state) => {
            if(state.ListComics.prev > 5 ) {
                state.ListComics.next = state.ListComics.next - 5
                state.ListComics.prev = state.ListComics.prev - 5
                state.ListComics.maxLimit = ""
            } else state.ListComics.maxLimit = "Inicio";
            
        },
        nextPage: (state) => {
            if(state.ListComics.next < state.ListComics.comics.length ) {
                state.ListComics.next = state.ListComics.next + 5
                state.ListComics.prev = state.ListComics.prev + 5
                state.ListComics.maxLimit = ""
            } else state.ListComics.maxLimit = "ops"
        }
    }
})

export const { getAllComics, getComicId, getImage, getTitle, getPrice, prevPage, nextPage } = ListComics.actions;
export const ComicsSlice = ListComics.reducer;