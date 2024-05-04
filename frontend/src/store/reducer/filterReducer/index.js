import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roles: [],
    experience: [],
    work: [],
    salary: [],
    location: []
};

const filterReducer = createSlice({
    name: "filters",
    initialState,
    reducers: {
        rolesAdded: (state, action) => {
            state.roles = action.payload;
            console.log(state.roles)
        },
        experienceAdded: (state, action) => {
            state.experience = action.payload;
        },
        workAdded: (state, action) => {
            state.work = action.payload;
        },
        salaryAdded: (state, action) => {
            state.salary = action.payload;
        },
        locationAdded: (state, action) => {
            state.location = action.payload;
        },
        // Add more reducers as needed
    }
});

export const {
    rolesAdded,
    experienceAdded,
    workAdded,
    salaryAdded,
    locationAdded
} = filterReducer.actions;

// Selectors
export const selectRoles = state => state.filterStore.roles;
export const selectExperience = state => state.filterStore.experience;
export const selectWork = state => state.filterStore.work;
export const selectSalary = state => state.filterStore.salary;
export const selectLocation = state => state.filterStore.location;

// Export the reducer
export default filterReducer.reducer;
