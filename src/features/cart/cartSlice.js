import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const discount = newItem.product.discountPercentage || 0;
            const unitPrice = Number(newItem.product.price) * (100 - Number(discount)) / 100
            const itemTotal = unitPrice * Number(newItem.quantity);

            const existingItem = state.items.find(item => item.product.id === newItem.product.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += itemTotal;
            } else{
                state.items.push({
                    ...newItem,
                    quantity: newItem.quantity,
                    totalPrice: itemTotal,
                });
            }
            state.totalQuantity += newItem.quantity;
            state.totalPrice += itemTotal;
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.product.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.product.id !== id);
            }
        },
        clearCart(state){
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;