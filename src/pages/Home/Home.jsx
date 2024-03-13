import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Input from "../../components/Input/Input";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import stateOptions from "../../services/states.json";
import departmentOptions from "../../services/departments.json";

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

    return (
        <div className="allHeight flexPlacement home">
            <Header />
            <div className="flexPlacement home_container">
                <form className="home_container_form">
                    <h2 className="home_container_form_title">Create Employee</h2>
                    <div className="home_container_form_littleContainer">
                        <Input htmlFor={"first_name"} labelText={"First Name"} type={"text"} inputId={"first_name"} />
                        <Input htmlFor={"last_name"} labelText={"Last Name"} type={"text"} inputId={"last_name"} />
                    </div>
                    <div className="home_container_form_littleContainer">
                        <div>
                            <label htmlFor="date_of_birth">Date of Birth</label>
                            <DatePicker selected={dateOfBirth} onChange={handleDateOfBirthChange} />
                        </div>
                        <div>
                            <label htmlFor="start_date">Start Date</label>
                            <DatePicker selected={startDate} onChange={handleStartDateChange} />
                        </div>
                    </div>
                    <fieldset className="home_container_form_fieldset">
                        <legend>Address</legend>
                        <div className="home_container_form_fieldset_littleContainer">
                            <Input htmlFor={"street"} labelText={"Street"} type={"text"} inputId={"street"} />
                            <Input htmlFor={"city"} labelText={"City"} type={"text"} inputId={"city"} />
                        </div>
                        <div className="home_container_form_fieldset_littleContainer">
                            <div>
                                <label htmlFor="state">State</label>
                                <Dropdown options={stateOptions} onChange={(option) => setSelectedState(option)} value={selectedState} placeholder="Select a state" />
                            </div>
                            <Input htmlFor={"zip_code"} labelText={"Zip Code"} type={"number"} inputId={"zip_code"} />
                        </div>
                    </fieldset>
                    <div className="home_container_form_littleContainer">
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
