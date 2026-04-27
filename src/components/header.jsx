import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoHeader from "../assets/images/logo-header.png";
import Carrito from "./carrito.jsx";

export default function Header() {
  const [showCarrito, setShowCarrito] = useState(false);
  const [carritoCount, setCarritoCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/carrito")
      .then(res => res.json())
      .then(data => setCarritoCount(data.length))
      .catch(() => {});
  }, []);

  return (
    <header className="header">

      <div className="logo">
        <img src={logoHeader} alt="Logo" />
      </div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <button className="btn-carrito" onClick={() => setShowCarrito(true)}>
          Carrito ({carritoCount})
        </button>
      </nav>

      <Carrito show={showCarrito} onClose={() => setShowCarrito(false)} />

    </header>
  );
}