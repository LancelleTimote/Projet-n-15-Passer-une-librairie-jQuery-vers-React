import Logo from "../../assets/images/hrnetLogo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="Hrnet Logo" className="header_logo" />
            </Link>
            <Link to="/employeeList" className="header_link">
                View Current Employees
            </Link>
        </header>
    );
}

export default Header;
