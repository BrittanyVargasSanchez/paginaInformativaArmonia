import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Card from "../components/card.jsx";
import "./productos.css";
import producto1 from "../assets/images/images-productos/cocholatecake.jpg";
import producto2 from "../assets/images/images-productos/ronald.jpg";
import producto3 from "../assets/images/images-productos/tortachilena.avif";
import producto4 from "../assets/images/images-productos/quesillo.webp";
import producto5 from "../assets/images/images-productos/tiramisu.jpg";
import producto6 from "../assets/images/images-productos/hamburguesa.jpg";

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
                            precio: 3500
                        }}
                    />
                    <Card
                        producto={{
                            imagen: producto2,
                            nombre: "Ronald Condega",
                            descripcion: "El mejor esclavo de todos, no es comida pero es un producto de calidad que te puede ayudar a realizar las tareas del hogar, además de ser un gran amigo. No nos hacemos responsables por el mal uso que le puedas dar a este producto, es solo para esclavizarlo y no para maltratarlo.",
                            precio: 350000 
                        }}
                    />
                    <Card
                        producto={{
                            imagen: producto3,
                            nombre: "Torta chilena",
                            descripcion: "Torta chilena tradicional, rellena de leche condensada cocinada y cubierta con merengue, decorada con chispitas de colores y un delicioso lustre. Es un clásico que no puede faltar en tu mesa, ideal para compartir con amigos y familiares en cualquier ocasión.",
                            precio: 2420
                        }}
                    />
                    <Card
                        producto={{
                            imagen: producto4,
                            nombre: "Quesillo",
                            descripcion: "Quesillo tradicional, relleno de queso crema y cubierto con una capa de caramelo. Es un postre irresistible que combina la suavidad del queso con el dulzor del caramelo.",
                            precio: 1500
                        }}
                    />
                    <Card
                        producto={{
                            imagen: producto5,
                            nombre: "TiramiSUS",
                            descripcion: "TiramiSUS, el postre más SUS de nuestro menú, una delicia  italiana que te hará volar de placer. Capas de bizcocho empapado en café, crema de mascarpone y cacao en polvo. Es el equilibrio perfecto entre lo dulce y lo amargo, ideal para compartir con amigos o disfrutar solo como un capricho indulgente.",
                            precio: 4500
                        }}
                    />
                    <Card
                        producto={{
                            imagen: producto6,
                            nombre: "Hamburgruesa de gordolate",
                            descripcion: "Hamburguesa especial para esas personas que desean probar algo nuevo, como la diabetes. Es lo mas obeso de nuestro menú, te mueres pero de la cantidad de azúcar que tiene. Tiene helado, nueces, chocolate y MUCHO azúcar.",
                            precio: 5000
                        }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Productos;