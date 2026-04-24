import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import "./contacto.css";
import correoIcon from "../assets/images/ic-correo.svg";
import telIcon from "../assets/images/ic-tel.svg";
import ubiIcon from "../assets/images/ic-ubi.svg";
import fotoMapa from "../assets/images/images-galeria/foto2.jpeg";
import mapaImg from "../assets/images/Mapa.png";

function Contacto() {
    return (
        <div className="page">
            <Header />
            <div className="banner-contacto">
                <div className="informacion-banner">
                    <h1>Contacto</h1>
                    <p>¿Tienes preguntas o deseas visitarnos?</p>
                    <p>Estamos aquí para ayudarte a conectar con la naturaleza y disfrutar de nuestras delicias organicas.</p>
                </div>
            </div>
            <main>
                <div className="contacto">
                    <div className="contacto-info">
                        <h2>Sobre nosotros</h2>
                        <div className="contacto-info-seccion">
                            <img src={correoIcon} alt="Icono de correo" />
                            <div className="contacto-info-seccion-info">
                                <h3>Correo electrónico</h3>
                                <p>info@armonia.com</p>
                            </div>
                        </div>
                        <div className="contacto-info-seccion">
                            <img src={telIcon} alt="Icono de teléfono" />
                            <div className="contacto-info-seccion-info">
                                <h3>Teléfono</h3>
                                <p>(+506) 6767 6767</p>
                            </div>
                        </div>
                        <div className="contacto-info-seccion">
                            <img src={ubiIcon} alt="Icono de ubicación" />
                            <div className="contacto-info-seccion-info">
                                <h3>Ubicación</h3>
                                <p>CTP CIT, San Antonio, Belén, Heredia, Costa Rica</p>
                            </div>
                        </div>
                        <h2>Horario de atención</h2>
                        <p>Lunes a viernes: 9:00 - 18:00</p>
                        <p>Sábados: 10:00 - 14:00</p>
                    </div>
                    <div className="contacto-img">
                        <img src={fotoMapa} alt="Imagen random" />
                        <img src={mapaImg} alt="Imagen de Ubicación" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contacto;