    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
    ListComics: {
        comics: [],
        comicId: [],
        cart: [],
        allItems: [],
        validateReload: true,
        prev: 0,
        next: 5,
        currentPage: "",
        total: 0,
    },
    };

    const ListComics = createSlice({
    name: "comics",
    initialState,
    reducers: {
        getAllComics: (state, actions) => {
        state.ListComics.comics = actions.payload;
        
        },
        getComicId: (state, actions) => {
        let newComic = {
            title: actions.payload.title,
            id: actions.payload.id,
            price: actions.payload.prices[0].price,
            image: `${actions.payload.thumbnail.path}.jpg`,
        };
        state.ListComics.comicId = newComic;
        },
        prevPage: (state) => {
        if (state.ListComics.prev > 0) {
            state.ListComics.next = state.ListComics.next - 5;
            state.ListComics.prev = state.ListComics.prev - 5;
            state.ListComics.maxLimit = "";
        } else state.ListComics.currentPage = "Inicio";
        },
        nextPage: (state) => {
        if (state.ListComics.next < state.ListComics.comics.length) {
            state.ListComics.next = state.ListComics.next + 5;
            state.ListComics.prev = state.ListComics.prev + 5;
            state.ListComics.maxLimit = "";
        } else state.ListComics.currentPage = "ops";
        },
        setCart: (state, actions) => {
        let itemCart = {
            ...actions.payload,
            amount: 1,
        };
        state.ListComics.cart = [...state.ListComics.cart, itemCart];

        state.ListComics.allItems = JSON.parse(
            JSON.stringify(state.ListComics.cart)
        );
        const filterComics = new Set();
        const filter = state.ListComics.allItems.filter((comic) => {
            const duplicatedComic = filterComics.has(comic.id);
            filterComics.add(comic.id);
            return !duplicatedComic;
        });
        state.ListComics.allItems = filter;
        },
        deleteItemInCart: (state, actions) => {
        state.ListComics.allItems = actions.payload;
        },
        increment: (state, actions) => {
        let qtd = JSON.parse(
            JSON.stringify(state.ListComics.allItems[actions.payload].amount)
        );
        state.ListComics.allItems[actions.payload].amount = qtd + 1;
    },
    decrement: (state, actions) => {
        let qtd = JSON.parse(
            JSON.stringify(state.ListComics.allItems[actions.payload].amount)
        );
        if (state.ListComics.allItems[actions.payload].amount <= 1) {
            return;
        } else {
            state.ListComics.allItems[actions.payload].amount = qtd - 1;
        }
        },
    },
    });

    export const {
    getAllComics,
    getComicId,
    prevPage,
    nextPage,
    setCart,
    deleteItemInCart,
    increment,
    decrement,
    } = ListComics.actions;
    export const ComicsSlice = ListComics.reducer;
