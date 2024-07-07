import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  cart: [],
  itemAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemFound = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemFound) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, { ...action.payload, amount: 1 }];
      }
    },

    increaseAmount: (state, action) => {
      const itemFound = state.cart.find((item) => item.id === action.payload);
      if (itemFound) {
        itemFound.amount++;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    decreaseAmount: (state, action) => {
      const itemFound = state.cart.find((item) => item.id === action.payload);
      if (itemFound) {
        if (itemFound.amount > 1) {
          state.cart = state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          );
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    getTotal:(state)=>{
    state.itemAmount = state.cart.reduce((total, item) => total + item.amount, 0);
  return state;
    },
getTotalPrice: (state)=>{
    state.total= state.cart.reduce((total, item)=>
    total+(item.amount*item.retail_price),0)
}
,
    clearCart:(state)=>{
        return {
          ...state, cart:[], total:0
        }
    }

  },
});

export const { addToCart, increaseAmount, removeFromCart, decreaseAmount,getTotal,getTotalPrice,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
