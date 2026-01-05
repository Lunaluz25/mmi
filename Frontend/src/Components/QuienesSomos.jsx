import React from "react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.jpeg";
import logo10 from "../assets/10.jpeg";
import logo11 from "../assets/11.jpeg";
import logo12 from "../assets/12.png";
import logo13 from "../assets/13.jpg";
import "../CSS/QuienesSomos.css";
import "../CSS/Catalogo.css";
const QuienesSomos = () => {
  return (
    <>
      {/* ================= QUIÉNES SOMOS ================= */}
      <section className="quienes-section">
        <div className="containerTexto">
          <p className="texto">
            <span className="resaltado">MMI Industrial</span> es una empresa
            dedicada a la comercialización de productos de ferretería industrial
            en Tucumán y provincias limítrofes. Nos especializamos en ofrecer
            una amplia gama de productos de alta calidad, respaldados por marcas
            reconocidas en el mercado. En Ferretería Industrial Montenegro, nos
            enorgullecemos de nuestra filosofía empresarial, la cual se sustenta
            en cuatro pilares fundamentales: Seriedad, Responsabilidad,
            Compromiso y Honestidad. Estos valores nos guían en cada una de
            nuestras operaciones y nos permiten construir relaciones sólidas y
            duraderas con nuestros clientes.
          </p>
        </div>
      </section>

      {/* ================= CATÁLOGO ================= */}
      <section className="servicios-container p-4">
        <div className="titulo-container flex flex-col items-center justify-center mb-10 mt-10">
          <p className="titulo-naranja font-bold font-[Public-Sans]">
            <span className="titulo-naranja-gradiente">
              Marcas que nos acompañan:
            </span>
          </p>
        </div>

        <div className="servicios-row">
          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo1} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo2} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo3} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo4} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo5} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo6} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo7} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo8} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>


        <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo9} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo10} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo11} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

<div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo12} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

<div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo13} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo11} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>

          <div className="slot">
            <div className="user-card">
              <span className="user-title">
                <img src={logo11} alt="1 Logo" className="marca-logo" />
              </span>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default QuienesSomos;
