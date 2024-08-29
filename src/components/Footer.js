import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <footer className="Footer">
            © 2024 Chaostreff Backnang | <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link>
        </footer>
    );
}

export default Footer;