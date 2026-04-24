import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Card from "../components/card.jsx";
import "./productos.css";

function Productos() {
    return (
        <div className="page">
            <Header />
            <main className="body">
                <h1>Nuestros Productos</h1>
                <div className="cards">

                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Productos;