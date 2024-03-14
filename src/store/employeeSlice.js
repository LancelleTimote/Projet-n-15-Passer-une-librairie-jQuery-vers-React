import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
};

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        clearEmployees: (state) => {
            state.employees = [];
        },
    },
});

export const { addEmployee, clearEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
