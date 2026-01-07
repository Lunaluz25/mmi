import React from "react";
import Header from "../Components/Header";
import Carrousel from "../Components/Carrousel";
import Footer from "../Components/Footer";
import QuienesSomos from "../Components/QuienesSomos";
import ScrollToTop from "../Components/ScrollToTop";
import CarruselMarcas from "../Components/CarruselMarcas";
import Logo from "../assets/LOGO MMI OFICIAL.png";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Carrousel />
      <div className="home-split">
      <QuienesSomos />
      <img src={Logo} alt= "Logo MMI" className="home-logo" />
      <CarruselMarcas />
      <br />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
