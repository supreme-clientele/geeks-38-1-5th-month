import { configureStore } from "@reduxjs/toolkit";
import mainPageSliceReducer from "./mainPageSlice";


export const store = configureStore({
    reducer: {
        mainReducer: mainPageSliceReducer
    }
})