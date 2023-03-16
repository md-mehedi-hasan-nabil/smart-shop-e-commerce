import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
// import { userLoggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set('Authorization', `${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    // console.log(result)
    if (result?.error?.status === 401) {
      alert(
        result?.error?.data?.error
          ? result?.error?.data?.error
          : 'jwt token expired'
      );
      // api.dispatch(userLoggedOut());
      localStorage.clear();
    }

    return result;
  },

  endpoints: (builder) => ({}),
});
