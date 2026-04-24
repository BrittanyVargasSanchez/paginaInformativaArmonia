import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoHeader from "../assets/images/logo-header.png";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logoHeader} alt="Logo" />
      </div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

    </header>
  );
}