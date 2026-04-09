import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data.json';

const initialState = {
  products: productsData,
  searchValue: "",
  category: 'All',
  sortBy: "default"
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
    }
  },
});

export const { setSearchValue, setCategory, setSortBy } = productsSlice.actions

export default productsSlice.reducer;