import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Input from "../../components/Input/Input";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

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
                        <Input htmlFor={"zip_code"} labelText={"Zip Code"} type={"text"} inputId={"zip_code"} />
                    </fieldset>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
