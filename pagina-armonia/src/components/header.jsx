import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

    </header>
  );
}

export default Header;