import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table"; // Importation des composants de Material React Table
import { useSelector } from "react-redux";
import "./EmployeeList.scss";

function EmployeeList() {
    const employees = useSelector((state) => state.employee.employees);

    const columns = [
        {
            accessorKey: "firstName",
            header: "First Name",
            size: 150,
        },
        {
            accessorKey: "lastName",
            header: "Last Name",
            size: 150,
        },
        {
            accessorKey: "dateOfBirth",
            header: "Date of Birth",
            size: 150,
        },
        {
            accessorKey: "startDate",
            header: "Start Date",
            size: 150,
        },
        {
            accessorKey: "street",
            header: "Street",
            size: 150,
        },
        {
            accessorKey: "city",
            header: "City",
            size: 150,
        },
        {
            accessorKey: "state",
            header: "State",
            size: 150,
        },
        {
            accessorKey: "zipCode",
            header: "Zip Code",
            size: 150,
        },
        {
            accessorKey: "department",
            header: "Department",
            size: 150,
        },
    ];

    const table = useMaterialReactTable({
        columns,
        data: employees,
    });

    return (
        <div className="allHeight flexPlacement employeeList">
            <Header />
            <div className="flexPlacement gradientColor employeeList_container">
                <div className="employeeList_container_content">
                    <h1 className="employeeList_container_content_title">Current Employees</h1>
                    <MaterialReactTable table={table} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EmployeeList;
