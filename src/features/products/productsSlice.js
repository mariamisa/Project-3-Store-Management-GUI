import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data.json';

const initialState = {
  products: productsData,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
});

export default productsSlice.reducer;