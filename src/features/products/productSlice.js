import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: ""
};

const productSlice = createSlice({
    name: 'projuct',
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            state.category = action.payload
        }
    },
});

export const { filterByCategory } = productSlice.actions;
export default productSlice.reducer;
