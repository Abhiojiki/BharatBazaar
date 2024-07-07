import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    allProduct:[],
    filteredProducts:[]
}

const TopProductSlice = createSlice({
    name:"TopProduct",
    initialState,
    reducers:{
        pushAllProducts :(state,action)=>{
            state.allProduct= action.payload;
        },
        pushFilteredProducts :(state,action)=>{
state.filteredProducts = action.payload
        }
    }
})

export const {pushAllProducts, pushFilteredProducts} = TopProductSlice.actions
export  default TopProductSlice.reducer