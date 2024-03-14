import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        startDate: null,
        address: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
        },
        department: "",
    },
};

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            state.formData = action.payload;
        },
        clearFormData: (state) => {
            state.formData = initialState.formData;
        },
    },
});

export const { saveFormData, clearFormData } = employeeSlice.actions;

export default employeeSlice.reducer;
