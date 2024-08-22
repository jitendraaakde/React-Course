import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state, action) => {
            state.counterVal++;
        }, decrement: (state, action) => {
            state.counterVal--;

        }, add: (state, action) => {
            state.counterVal += Number(action.payload)

        }, substract: (state, action) => {
            state.counterVal -= Number(action.payload)
        },
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice
