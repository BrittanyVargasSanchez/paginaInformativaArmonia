import React from 'react';
import './cardproductos.css';

const CardProducto = ({ producto }) => {
 const comprar = async () => {
  await fetch("http://localhost:3001/carrito", {
   method: "POST",
   headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify({
    nombre: producto.nombre,
    precio: producto.precio,
    imagen: producto.imagen
   })
  })
  alert("Producto agregado al carrito")
  window.location.reload()
 }
 return (
  <div className="card">
   <img src={producto.imagen} alt={producto.nombre} />
   <h3>{producto.nombre}</h3>
   <p>{producto.descripcion}</p>
   <button onClick={comprar}>Comprar</button>
  </div>
 );
};
export default CardProducto;