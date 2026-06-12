import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-links">
                <span className="navbar-logo">Tienda de Videojuegos</span>
                <Link to="/tabla" className="nav-link">Videojuegos</Link>
                <Link to="/formulario" className="nav-link">Nuevo</Link>
            </div>
        </nav>
    )
}
export default Navbar;