import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";


const Home = () => {
  return (
    <>     
    <Header />
    <main className="home-main">
      <h2>Bienvenidos a Soda Armonia</h2>
      <p>En Soda Armonia, nos apasiona ofrecerte una experiencia única de sabores y calidad. Nuestra soda artesanal está hecha con ingredientes naturales y un toque de amor, para que cada sorbo sea una explosión de frescura y sabor. ¡Descubre nuestra variedad de sabores y disfruta de la auténtica soda artesanal en cada botella!</p>
    </main>
    <Footer />
    </>
  )
}

export default Home;