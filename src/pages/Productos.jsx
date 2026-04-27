import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Card from "../components/card.jsx";
import "./productos.css";

function Productos() {
    return (
        <div className="page">
            <Header />
            <main className="productos">
                <h1>Nuestros Productos</h1>
                <div className="cards">
                    <Card
                        producto={{
                            imagen: "https://static.wikia.nocookie.net/wikiinde/images/8/82/Minecraft.jpg/revision/latest?cb=20150902020013&path-prefix=es",
                            nombre: "Producto 1",
                            descripcion: "Descripción del producto 1",
                            precio: 100
                        }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Productos;