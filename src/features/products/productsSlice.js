import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data.json';

const initialState = {
  products: productsData,
  searchValue: "",
  category: 'All',
  sortBy: "default",
  cart: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },

    purchase: (state, action) => {
      const cart = action.payload;
      cart.forEach(({ id, quantity }) => {
        const product = state.products.find(p => p.id === id);
        if (product) {
          product.stock -= quantity;
        }
      });
    }
  },
});

export const { setSearchValue, setCategory, setSortBy, purchase } = productsSlice.actions

export default productsSlice.reducer;