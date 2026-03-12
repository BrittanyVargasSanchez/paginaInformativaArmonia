import { Link } from "react-router-dom";
import headerImg from "../assets/images/headerImg.jpeg";
import "./header.css";

function Header() {
  return (
    <header 
      className="header"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <nav className="navbar">
        <h2 className="logo">Armonía</h2>

        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>

      <div className="header-content">
        <h1>Bienvenidos a Soda Armonía</h1>

        <p>
          Tu rincón de agricultura orgánica y comidas saludables
        </p>

        <Link to="/contacto">
          <button className="contact-btn">Contáctanos</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;