
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
        addProductReview: builder.mutation({
            query: (data) => ({
                url: `/api/product/review`,
                method: 'POST',
                body: data,
            })
        })
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery , useAddProductReviewMutation} = productsApi;
