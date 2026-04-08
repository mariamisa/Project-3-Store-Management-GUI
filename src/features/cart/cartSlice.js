import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(({ id }) => id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    incrementQty: (state, action) => {
      const item = state.cart.find(({ id }) => id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQty: (state, action) => {
      const item = state.cart.find(({ id }) => id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;