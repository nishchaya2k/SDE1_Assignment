import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    offset: 0,
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
        // jobDataAdded: (state, action) => {
        //     state.jobData = action.payload;
        // },
        offsetAdded: (state, action) => {
            state.offset = action.payload;
        },
    },
});


export const { filteredDataAdded, offsetAdded } =
    filteredDataReducer.actions;

export const selectFilteredData = (state) =>
    state.filteredDataStore.filteredData;

// export const selectJobData = (state) =>
//     state.filteredDataStore.jobData;

export const selectOffset = (state) =>
    state.filteredDataStore.offset;

export default filteredDataReducer.reducer;
