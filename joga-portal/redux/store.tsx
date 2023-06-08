import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./slice"

const store = configureStore({
    reducer: {
        display: displayReducer,
    }
})

export default store;