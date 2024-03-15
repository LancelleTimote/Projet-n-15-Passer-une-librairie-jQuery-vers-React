import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./EmployeeList.scss";
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { useSelector } from "react-redux";

function EmployeeList() {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("firstName", {
            cell: (info) => info.getValue(),
            header: () => "First Name",
        }),
        columnHelper.accessor("lastName", {
            cell: (info) => info.getValue(),
            header: () => "Last Name",
        }),
        columnHelper.accessor("dateOfBirth", {
            cell: (info) => info.getValue(),
            header: () => "Date of Birth",
        }),
        columnHelper.accessor("startDate", {
            cell: (info) => info.getValue(),
            header: () => "Start Date",
        }),
        columnHelper.accessor("street", {
            cell: (info) => info.getValue(),
            header: () => "Street",
        }),
        columnHelper.accessor("city", {
            cell: (info) => info.getValue(),
            header: () => "City",
        }),
        columnHelper.accessor("state", {
            cell: (info) => info.getValue(),
            header: () => "State",
        }),
        columnHelper.accessor("zipCode", {
            cell: (info) => info.getValue(),
            header: () => "Zip Code",
        }),
        columnHelper.accessor("department", {
            cell: (info) => info.getValue(),
            header: () => "Department",
        }),
    ];

    const employees = useSelector((state) => state.employee.employees);

    const table = useReactTable({
        data: employees,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="allHeight flexPlacement employeeList">
            <Header />
            <div className="flexPlacement gradientColor employeeList_container">
                <div className="employeeList_container_content">
                    <h1 className="employeeList_container_content_title">Current Employees</h1>
                    <table>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EmployeeList;
