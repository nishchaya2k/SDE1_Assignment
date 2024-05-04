import { createSlice } from "@reduxjs/toolkit";
const initialState = {

    filteredData: [],
    // jobData: []
};

const filteredDataReducer = createSlice({
    name: "filteredData",
    initialState: initialState,
    reducers: {
        filteredDataAdded: (state, action) => {
            state.filteredData = action.payload;
        },
    },
});


export const { filteredDataAdded } =
    filteredDataReducer.actions;

export const selectFilteredData = (state) =>
    state.filteredDataStore.filteredData;



export default filteredDataReducer.reducer;
