import { configureStore } from "@reduxjs/toolkit";
import { comicsHq } from "./features/comics";

export const store = configureStore({
    reducer: comicsHq, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})