import { apiSlice } from '../api/apiSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "/api/user"
            })
        }),
        getUserByEmail: builder.query({
            query: (email) => ({
                url: `/api/user/email/${email}`
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: "/api/user",
                method: "POST",
                body: data,
            }),
        }),
        makeAdmin: builder.mutation({
            query: (email) => ({
                url: `/api/user/make-admin/${email}`,
                method: 'PUT',
            })
        })
    }),
});

export const { useGetUsersQuery, useGetUserByEmailQuery, useRegisterMutation, useMakeAdminMutation } = authApi;
