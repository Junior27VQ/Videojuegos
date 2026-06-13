import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar">
            <span className="navbar-logo">Tienda de Videojuegos</span>
            <div className="navbar-links">
                <Link to="/tabla" className="nav-link">Videojuegos</Link>
                <Link to="/formulario" className="nav-link">Nuevo Registro</Link>
            </div>
        </nav>
    );
}
export default Navbar;