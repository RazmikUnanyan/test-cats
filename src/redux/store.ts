import {configureStore} from "@reduxjs/toolkit";
import {catsApi} from "./apiSlice";

export const store = configureStore({
    reducer: {
        [catsApi.reducerPath]: catsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(catsApi.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;