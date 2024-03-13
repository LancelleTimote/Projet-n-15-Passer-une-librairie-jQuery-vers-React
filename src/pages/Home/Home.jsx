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
            <div className="flexPlacement gradientColor home_container">
                <form className="home_container_form" onSubmit={""}>
                    <h1 className="home_container_form_title">Create Employee</h1>
                    <div className="home_container_form_littleContainer">
                        <Input containerClassname={"home_container_form_firstName"} htmlFor={"first_name"} labelText={"First Name"} type={"text"} inputId={"first_name"} />
                        <Input containerClassname={"home_container_form_lastName"} htmlFor={"last_name"} labelText={"Last Name"} type={"text"} inputId={"last_name"} />
                    </div>
                    <div className="home_container_form_littleContainer">
                        <div className="home_container_form_dateOfBirth">
                            <label htmlFor="date_of_birth">Date of Birth</label>
                            <DatePicker selected={dateOfBirth} onChange={handleDateOfBirthChange} />
                        </div>
                        <div className="home_container_form_startDate">
                            <label htmlFor="start_date">Start Date</label>
                            <DatePicker selected={startDate} onChange={handleStartDateChange} />
                        </div>
                    </div>
                    <fieldset className="home_container_form_fieldset">
                        <legend>Address</legend>
                        <div className="home_container_form_littleContainer">
                            <Input containerClassname={"home_container_form_street"} htmlFor={"street"} labelText={"Street"} type={"text"} inputId={"street"} />
                            <Input containerClassname={"home_container_form_city"} htmlFor={"city"} labelText={"City"} type={"text"} inputId={"city"} />
                        </div>
                        <div className="home_container_form_littleContainer">
                            <div className="home_container_form_state">
                                <label htmlFor="state">State</label>
                                <Dropdown options={stateOptions} onChange={(option) => setSelectedState(option)} value={selectedState} placeholder="Select a state" />
                            </div>
                            <Input containerClassname={"home_container_form_zipCode"} htmlFor={"zip_code"} labelText={"Zip Code"} type={"number"} inputId={"zip_code"} />
                        </div>
                    </fieldset>
                    <div className="home_container_form_department">
                        <label htmlFor="department">Department</label>
                        <Dropdown options={departmentOptions} onChange={(option) => setSelectedDepartment(option)} value={selectedDepartment} placeholder="Select a department" />
                    </div>
                    <div className="home_container_form_button">
                        <button type="submit" className="home_container_form_button_save">
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
