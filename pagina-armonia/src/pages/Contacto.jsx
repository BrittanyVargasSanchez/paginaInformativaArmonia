import Header from ".../components/Header.jsx";
import Footer from ".../components/Footer.jsx";

function Contacto() {
    return (
        <div className="page">
            <Header />
            <main className="body">
                <div className="información">
                    <div className="Horarios"></div>
                </div>
                <div className="contacto">
                    <h1>Contacto</h1>
                    <p>Si deseas ponerte en contacto con nosotros, puedes hacerlo a través de los siguientes medios:</p>
                    <div className="contacto-info">
                        <p><strong>Correo electrónico:</strong> info@armonia.com</p>
                        <p><strong>Teléfono:</strong> +34 987 654 321</p>
                        <p><strong>Dirección:</strong> Calle Armonía, 123, 41001 Sevilla</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contacto;