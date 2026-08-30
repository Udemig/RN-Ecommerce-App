import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verb";
import { CATEGORIES_URLS, PRODUCTS_URLS } from "../../service/urls";
import { GetSingleProductArgs, ProductsParams } from "../../model/api/productsParams";

const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (params:ProductsParams, { rejectWithValue }) => {

        try {
            const response = await getRequest(PRODUCTS_URLS.PRODUCTS_URL, params)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.message)

        }
    }
)
const getBestSellerProducts = createAsyncThunk(
    "products/getBestSellerProducts",
    async (params:ProductsParams, { rejectWithValue }) => {
        try {
            const response = await getRequest(PRODUCTS_URLS.PRODUCTS_URL, params)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.message)

        }
    }
)
const getPopulerProducts = createAsyncThunk(
    "products/getPopulerProducts",
    async (params:ProductsParams, { rejectWithValue }) => {
        try {
            const response = await getRequest(PRODUCTS_URLS.PRODUCTS_URL, params)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.message)

        }
    }
)
const getBestOfferProducts = createAsyncThunk(
    "products/getBestOfferProducts",
    async (params:ProductsParams, { rejectWithValue }) => {
        try {
            const response = await getRequest(PRODUCTS_URLS.PRODUCTS_URL, params)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.message)

        }
    }
)
const getSingleProduct = createAsyncThunk(
    "products/getSingleProduct",
    async ({id,params}:GetSingleProductArgs, { rejectWithValue }) => {
        const url=`${PRODUCTS_URLS.PRODUCTS_URL}/${id}`
        try {
            const response = await getRequest(url, params)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.message)

        }
    }
)

export { getAllProducts, getBestOfferProducts, getBestSellerProducts, getPopulerProducts,getSingleProduct }