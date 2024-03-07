import Logo from "../../assets/images/hrnetLogo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={Logo} alt="Hrnet Logo" className="header_logo" />
            </Link>
        </header>
    );
}

export default Header;
