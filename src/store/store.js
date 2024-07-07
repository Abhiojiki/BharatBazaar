import { configureStore } from "@reduxjs/toolkit";
// import priceReducer from '.ProductSlice.js'
import productReducer from "./productSlice";
import TopProductReducer from "./TopProductsSlice"
import cartReducer from "./cartSlice"


import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth : authReducer,
        // pricerange:pricerangeReducer
        products:productReducer,
        TopProduct: TopProductReducer,
        cart:cartReducer,
    }
});


export default store;