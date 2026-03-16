import React, { useState } from "react";
import "./carrusel.css";

// Importa automáticamente todas las imágenes de la carpeta
// Funciona en proyectos React con Vite
const imageModules = import.meta.glob(
  "../assets/images/images-galeria/foto*.jpeg",
  { eager: true }
);

// Convierte los módulos en un arreglo de rutas de imagen
const images = Object.values(imageModules).map((module) => module.default);

export default function Carrusel() {
    const visible = 3;
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + visible) % images.length);
    };

    const prev = () => {
        setIndex((prev) => {
            const newIndex = prev - visible;
            return newIndex < 0 ? images.length - visible : newIndex;
        });
    };

    const getVisibleImages = () => {
        const result = [];

        for (let i = 0; i < visible; i++) {
            result.push(images[(index + i) % images.length]);
        }

        return result;
    };
    return (
        <div className="carrusel">
            <button className="btn-carrusel" onClick={prev}>❮</button>
            <div className="track-carrusel">
                {getVisibleImages().map((img, i) => (
                    <div className="slide-carrusel" key={i}>
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
            </div>
            <button className="btn-carrusel" onClick={next}>❯</button>
        </div>
    );
}