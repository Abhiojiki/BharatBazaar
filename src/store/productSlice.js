// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     products:[]
// }

// const ProductSlice= createSlice({
//     name:"products",
//     initialState,
//     reducers:{
//         addProducts:(state, action)=>{
//             state.products=action.payload
//         }
//     }
// });

// export const {addProducts}= ProductSlice.actions
// export default ProductSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;