import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, { ...action.payload, quantity: 1 }]
        },
        addQuantity: (state, action) => {
            state.cart = state.cart.map(product => {
                if (product._id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product
                }
            })
        },
        removeQuantity: (state, action) => {
            state.cart = state.cart.map(product => {
                if (product._id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1 > -1 ? product.quantity - 1 : 0
                    }
                } else {
                    return product
                }
            })
        },
        deleteProductFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product._id !== action.payload)
        },
        resetCart: (state, action) => {
            state.cart = []
        }
    },
});

export const { addToCart, addQuantity, removeQuantity, deleteProductFromCart,resetCart } = cartSlice.actions;
export default cartSlice.reducer;
