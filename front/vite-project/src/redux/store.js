import { configureStore } from "@reduxjs/toolkit";
import { rootSlices } from "./reducer";


export const store = configureStore({
    reducer: rootSlices.reducer
})