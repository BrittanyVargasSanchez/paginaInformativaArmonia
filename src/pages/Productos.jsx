import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Card from "../components/card.jsx";
import "./productos.css";
import producto1 from "../assets/images/images-productos/cocholatecake.jpg";

function Productos() {
    return (
        <div className="page">
            <Header />
            <main className="productos">
                <h1>Nuestros Productos</h1>
                <div className="cards">
                    <Card
                        producto={{
                            imagen: producto1,
                            nombre: "Cocholate cake",
                            descripcion: "¡Si te gusta el chocolate este cake es para vos! Base de doble chocolate relleno de dulce de leche, decorado con ganash de chocolate y fresas frescas. Todos nuestro cakes son levemente húmedos lo que le da ese sabor delicioso.",
                            precio: 100
                        }}
                    />
                    <Card
                        producto={{
                            imagen: "https://static.wikia.nocookie.net/wikiinde/images/8/82/Minecraft.jpg/revision/latest?cb=20150902020013&path-prefix=es",
                            nombre: "Producto 1",
                            descripcion: "Descripción del producto 1",
                            precio: 100
                        }}
                    />
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