
import { apiSlice } from '../api/apiSlice';

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrderProducts: builder.query({
            query: () => ({
                url: '/api/order'
            })
        }),
        getOrderProductById: builder.query({
            query: (id) => ({
                url: `/api/order/${id}`
            })
        }),
        orderAddProducts: builder.mutation({
            query: (data) => ({
                url: `/api/order`,
                method: 'POST',
                body: data,
            })
        }),
    }),
});

export const { useGetOrderProductsQuery, useGetOrderProductByIdQuery, useOrderAddProductsMutation } = productsApi;
