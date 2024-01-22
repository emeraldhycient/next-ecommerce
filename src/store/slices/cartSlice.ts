import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface CartState {
    items: any;
    savedItems: any
}

const initialState: CartState = {
    items: [],
    savedItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        },
        addToSavedItems: (state, action: PayloadAction<string>) => {
            state.savedItems.push(action.payload);
        },
    },
});

export const { addToCart, addToSavedItems } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectSavedItems = (state: RootState) => state.cart.savedItems;

export default cartSlice.reducer;
