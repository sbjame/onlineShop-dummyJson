import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: '',
    minPrice: 0,
    maxPrice: 40000
}

const filterSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        resetFilter: () => initialState
    }
});

export const { setCategory, setMinPrice, setMaxPrice, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;