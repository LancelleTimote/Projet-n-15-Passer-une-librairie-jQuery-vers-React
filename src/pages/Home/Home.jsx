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
import { addEmployee } from "../../store/employeeSlice";
import { useDispatch } from "react-redux";
import Modal from "../../components/Modal/Modal";

function Home() {
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [startDate, setStartDate] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth.toLocaleDateString(),
            startDate: startDate.toLocaleDateString(),
            street,
            city,
            state: selectedState,
            zipCode,
            department: selectedDepartment,
        };
        dispatch(addEmployee(formData));
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="allHeight flexPlacement home">
            <Header />
            <div className="flexPlacement gradientColor home_container">
                <form className="home_container_form" onSubmit={handleSubmit}>
                    <h1 className="home_container_form_title">Create Employee</h1>
                    <div className="home_container_form_littleContainer">
                        <Input containerClassname={"home_container_form_firstName"} htmlFor={"first_name"} labelText={"First Name"} type={"text"} inputId={"first_name"} inputOnChange={(e) => setFirstName(e.target.value)} />
                        <Input containerClassname={"home_container_form_lastName"} htmlFor={"last_name"} labelText={"Last Name"} type={"text"} inputId={"last_name"} inputOnChange={(e) => setLastName(e.target.value)} />
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
                            <Input containerClassname={"home_container_form_street"} htmlFor={"street"} labelText={"Street"} type={"text"} inputId={"street"} inputOnChange={(e) => setStreet(e.target.value)} />
                            <Input containerClassname={"home_container_form_city"} htmlFor={"city"} labelText={"City"} type={"text"} inputId={"city"} inputOnChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="home_container_form_littleContainer">
                            <div className="home_container_form_state">
                                <label htmlFor="state">State</label>
                                <Dropdown options={stateOptions} onChange={(option) => setSelectedState(option.value)} value={selectedState} placeholder="Select a state" />
                            </div>
                            <Input containerClassname={"home_container_form_zipCode"} htmlFor={"zip_code"} labelText={"Zip Code"} type={"number"} inputId={"zip_code"} inputOnChange={(e) => setZipCode(e.target.value)} />
                        </div>
                    </fieldset>
                    <div className="home_container_form_department">
                        <label htmlFor="department">Department</label>
                        <Dropdown options={departmentOptions} onChange={(option) => setSelectedDepartment(option.value)} value={selectedDepartment} placeholder="Select a department" />
                    </div>
                    <div className="home_container_form_button">
                        <button type="submit" className="home_container_form_button_save">
                            Save
                        </button>
                    </div>
                </form>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
