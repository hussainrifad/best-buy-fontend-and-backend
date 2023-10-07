import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        myCart : cartSlice,
    }
})

export default store;