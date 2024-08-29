import { Link } from "react-router-dom";
import "./Header.css";
import Space from "./Space";

function Header() {
    return (
        <header className="Header">
            <Link to="/"><img className="HeaderImage" src="./media/logo.svg" alt="Chaostreff Backnang Logo" /></Link>
            <div className="HeaderNavigation">
                <Link to="/" className="HeaderElement">Home</Link>
                <Link to="/termine" className="HeaderElement">Termine</Link>
                <Link to="/fsck" className="HeaderElement">FSCK</Link>
                <Link to="/freifunk" className="HeaderElement">Freifunk</Link>
                <Link to="/spaceapi" className="HeaderElement"><Space></Space></Link>
            </div>
        </header>
    );
}

export default Header;