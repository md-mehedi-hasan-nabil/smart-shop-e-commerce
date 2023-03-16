
import { apiSlice } from '../api/apiSlice';

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/api/product'
            }) 
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/api/product/${id}`
            })
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
