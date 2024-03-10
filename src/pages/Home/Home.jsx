import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Input from "../../components/Input/Input";

function Home() {
    return (
        <div>
            <Header />
            <div>
                <h2>Create Employee</h2>
                <form>
                    <Input htmlFor={"first_name"} labelText={"First Name"} type={"text"} inputId={"first_name"} />
                    <Input htmlFor={"last_name"} labelText={"Last Name"} type={"text"} inputId={"last_name"} />
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
