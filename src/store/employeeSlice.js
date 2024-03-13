import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
};

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetForm: (state) => {
            return initialState;
        },
    },
});

export const { updateField, resetForm } = employeeSlice.actions;

export default employeeSlice.reducer;
