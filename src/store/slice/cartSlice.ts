import { createSlice } from '@reduxjs/toolkit';
import { CartState } from '../../model/data/cartState';

const initialState: CartState = {
  cart: [],
  visible:false
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.visible=true
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cart.find(item => item.id === id);
      if (product) product.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cart.find(item => item.id === id);
      if (product)
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cart = state.cart.filter(item => item.id !== id);
        }
    },
    deleteToCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    },
    colseModal:(state)=>{
      state.visible=false
    }
  },
});

export const { addToCart, decreaseQuantity, deleteToCart,increaseQuantity,colseModal } = cartSlice.actions;
export default cartSlice.reducer;
