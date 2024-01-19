import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action ) => {
      state.cartItems = state.cartItems.map((item) => {
        if(item.id === action.payload.id){
          if(action.payload.key === 'quantity'){
            item.attributes.price = item.oneQuantityPrice * action.payload.val
          }
            return {...item, [action.payload.key]: action.payload.val} 
        }
       return item
      })
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.cartItems = []
    }
  },
});

export const { addToCart, updateCart, removeFromCart,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
