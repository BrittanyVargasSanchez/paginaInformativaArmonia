import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

// IMPORTAR IMÁGENES
import producto1 from "../assets/imagenes/producto1.jpg";
import producto2 from "../assets/imagenes/producto2.jpg";
import producto3 from "../assets/imagenes/producto3.jpg";

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