import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Input from "../../components/Input/Input";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Home() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const stateOptions = [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" },
        { value: "AZ", label: "Arizona" },
        { value: "AR", label: "Arkansas" },
        { value: "CA", label: "California" },
        { value: "CO", label: "Colorado" },
        { value: "CT", label: "Connecticut" },
        { value: "DE", label: "Delaware" },
        { value: "DC", label: "District Of Columbia" },
        { value: "FL", label: "Florida" },
        { value: "GA", label: "Georgia" },
        { value: "HI", label: "Hawaii" },
        { value: "ID", label: "Idaho" },
        { value: "IL", label: "Illinois" },
        { value: "IN", label: "Indiana" },
        { value: "IA", label: "Iowa" },
        { value: "KS", label: "Kansas" },
        { value: "KY", label: "Kentucky" },
        { value: "LA", label: "Louisiana" },
        { value: "ME", label: "Maine" },
        { value: "MD", label: "Maryland" },
        { value: "MA", label: "Massachusetts" },
        { value: "MI", label: "Michigan" },
        { value: "MN", label: "Minnesota" },
        { value: "MS", label: "Mississippi" },
        { value: "MO", label: "Missouri" },
        { value: "MT", label: "Montana" },
        { value: "NE", label: "Nebraska" },
        { value: "NV", label: "Nevada" },
        { value: "NH", label: "New Hampshire" },
        { value: "NJ", label: "New Jersey" },
        { value: "NM", label: "New Mexico" },
        { value: "NY", label: "New York" },
        { value: "NC", label: "North Carolina" },
        { value: "ND", label: "North Dakota" },
        { value: "OH", label: "Ohio" },
        { value: "OK", label: "Oklahoma" },
        { value: "OR", label: "Oregon" },
        { value: "PW", label: "Palau" },
        { value: "PA", label: "Pennsylvania" },
        { value: "PR", label: "Puerto Rico" },
        { value: "RI", label: "Rhode Island" },
        { value: "SC", label: "South Carolina" },
        { value: "SD", label: "South Dakota" },
        { value: "TN", label: "Tennessee" },
        { value: "TX", label: "Texas" },
        { value: "UT", label: "Utah" },
        { value: "VT", label: "Vermont" },
        { value: "VI", label: "Virgin Islands" },
        { value: "VA", label: "Virginia" },
        { value: "WA", label: "Washington" },
        { value: "WV", label: "West Virginia" },
        { value: "WI", label: "Wisconsin" },
        { value: "WY", label: "Wyoming" },
    ];

    const departmentOptions = [
        { value: "sales", label: "Sales" },
        { value: "marketing", label: "Marketing" },
        { value: "engineering", label: "Engineering" },
        { value: "human_resources", label: "Human Resources" },
        { value: "legal", label: "Legal" },
    ];

    return (
        <div>
            <Header />
            <div>
                <h2>Create Employee</h2>
                <form>
                    <Input htmlFor={"first_name"} labelText={"First Name"} type={"text"} inputId={"first_name"} />
                    <Input htmlFor={"last_name"} labelText={"Last Name"} type={"text"} inputId={"last_name"} />
                    <div>
                        <label htmlFor="date_of_birth">Date of Birth</label>
                        <DatePicker selected={dateOfBirth} onChange={handleDateOfBirthChange} />
                    </div>
                    <div>
                        <label htmlFor="start_date">Start Date</label>
                        <DatePicker selected={startDate} onChange={handleStartDateChange} />
                    </div>
                    <fieldset>
                        <legend>Address</legend>
                        <Input htmlFor={"street"} labelText={"Street"} type={"text"} inputId={"street"} />
                        <Input htmlFor={"city"} labelText={"City"} type={"text"} inputId={"city"} />
                        <div>
                            <label htmlFor="state">State</label>
                            <Dropdown options={stateOptions} onChange={(option) => setSelectedState(option)} value={selectedState} placeholder="Select a state" />
                        </div>
                        <Input htmlFor={"zip_code"} labelText={"Zip Code"} type={"text"} inputId={"zip_code"} />
                    </fieldset>
                    <div>
                        <label htmlFor="department">Department</label>
                        <Dropdown options={departmentOptions} onChange={(option) => setSelectedDepartment(option)} value={selectedDepartment} placeholder="Select a department" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
