import React, { useState, useEffect } from 'react';
import './carrito.css';

function CarritoPopup({ show, onClose }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if (show) {
            fetch("http://localhost:3001/carrito")
                .then(res => res.json())
                .then(data => setProductos(data))
                .catch(err => console.error("Error:", err));
        }
    }, [show]);

    const eliminar = async (id) => {
        try {
            await fetch(`http://localhost:3001/carrito/${id}`, { method: "DELETE" });
            setProductos(productos.filter(p => p.id !== id));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const vaciar = async () => {
        try {
            await fetch("http://localhost:3001/carrito", { method: "DELETE" });
            setProductos([]);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const total = productos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);

    if (!show) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>×</button>
                <h2>Carrito de Compras</h2>
                
                {productos.length === 0 ? (
                    <p className="carrito-vacio">El carrito está vacío</p>
                ) : (
                    <>
                        <div className="carrito-items">
                            {productos.map(p => (
                                <div key={p.id} className="carrito-item">
                                    <img src={p.imagen} alt={p.nombre} />
                                    <div className="carrito-item-info">
                                        <h4>{p.nombre}</h4>
                                        <p>${p.precio} x {p.cantidad}</p>
                                    </div>
                                    <button onClick={() => eliminar(p.id)} className="btn-eliminar">
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="carrito-total">
                            <h3>Total: ${total}</h3>
                            <button onClick={vaciar} className="btn-vaciar">Vaciar Carrito</button>
                            <button className="btn-comprar">Finalizar Compra</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CarritoPopup;