import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../model/data/productsState';
import { getAllProducts, getBestOfferProducts, getBestSellerProducts, getPopulerProducts, getSingleProduct } from '../actions/productsActions';

const initialState: ProductsState = {
  productList: [],
  bestSellerProducts: [],
  populerProducts: [],
  bestOfferProducts: [],
  product:null,
  pending: false,
  error: null,
  detailPending:false
};
const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.pending = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.productList = action.payload
        state.pending = false
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(getPopulerProducts.pending, (state, action) => {
        state.pending = true
      })
      .addCase(getPopulerProducts.fulfilled, (state, action) => {
        state.populerProducts = action.payload
        state.pending = false
      })
      .addCase(getPopulerProducts.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(getBestOfferProducts.pending, (state, action) => {
        state.pending = true
      })
      .addCase(getBestOfferProducts.fulfilled, (state, action) => {
        state.bestOfferProducts = action.payload
        state.pending = false
      })
      .addCase(getBestOfferProducts.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
      .addCase(getBestSellerProducts.pending, (state, action) => {
        state.pending = true
      })
      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.bestSellerProducts = action.payload
        state.pending = false
      })
      .addCase(getBestSellerProducts.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
        .addCase(getSingleProduct.pending, (state, action) => {
        state.detailPending = true
      })
       .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload,
        state.detailPending=false
      })
       .addCase(getSingleProduct.rejected, (state, action) => {
        state.error = action.payload,
        state.detailPending=false
      })
  },
});

export const { } = productSlice.actions
export default productSlice.reducer