import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import "../assets/css/home.css";
import primeraCardImg from "../assets/images/primeracard.jpg";
import descubreImg from "../assets/images/descubre.jpeg";

const Home = () => {
  return (
    <>     
    <Header />
    <main className="body">
      <div className="primera-card">
        <img src={primeraCardImg} alt="Portada" className="portada" />
        <div className="primera-card-content">
          <h2>Bienvenidos a Soda Armonía</h2>
          <p>Tu rincón de agricultura orgánica y alimentación saludable</p>
          <button className="btn-primero">Contáctanos</button>
        </div>
      </div>
      <div className="segunda-card">
        <div className="segunda-card-content">
          <img src={descubreImg} alt="Descubre Soda Armonía" className="descubre-img" />
          <div className="segunda-card-text">
            <h2>Descubre Soda Armonía</h2>
            <p>Soda Armonía es un departamento de la empresa Armonía cuyo objetivo es alimentar a la comunidad estudiantil del CTPCIT de manera segura y saludable. Nosotros cultivamos nuetros propios productos en armonia con el medio ambiente para brindar alimentos frescos y deliciosos.</p>
          </div>
        </div>
      </div>
      <div className="servicios">
        <h2>Nuestros servicios</h2>
        <div className="servicios-card">
          <h2>Alimentos frescos</h2>
          <p>Ofrecemos una variedad de alimentos frescos cultivados en nuestra propia huerta, garantizando calidad y sabor excepcionales.</p>
        </div>
        <div className="servicios-card">
          <h2>Venta de productos orgánicos</h2>
          <p>Además de nuestros alimentos frescos, también ofrecemos una selección de productos orgánicos para aquellos que buscan opciones saludables y sostenibles.</p>
        </div>
        <div className="servicios-card">
          <h2>Educación y talleres</h2>
          <p>Organizamos talleres y actividades educativas para promover la agricultura orgánica y la alimentación saludable entre la comunidad estudiantil.</p>
        </div>
      </div>
      <div className="segunda-card">
        <h2>Galería de imágenes</h2>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Home;