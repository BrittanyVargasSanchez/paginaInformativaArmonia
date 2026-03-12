import { Link } from "react-router-dom";
import headerImg from "../assets/images/headerImg.jpeg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="fondo-container">
        <img
          src={headerImg}
          alt="Logo"
        />

        <h2>Soda armonia</h2>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;