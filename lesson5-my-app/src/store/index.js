import { configureStore } from "@reduxjs/toolkit";
import mainPageSliceReducer from "./mainPageSlice";
import postsPageSliceReducer from "./PostsSlice";


export const store = configureStore({
    reducer: {
        mainReducer: mainPageSliceReducer,
        postsReducer: postsPageSliceReducer,
    }
})