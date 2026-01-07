import "../CSS/CarruselMarcas.css";
import logo1 from "../assets/TOTAL.png";
import logo2 from "../assets/CROSSMASTER.png";
import logo3 from "../assets/DUTY.png";
import logo4 from "../assets/DYLLU.png";
import logo5 from "../assets/FEMA.png";
import logo6 from "../assets/INGCO.png";
import logo7 from "../assets/BAHCO.png";
import logo8 from "../assets/BELENUS.png";
import logo9 from "../assets/BOSCH.png";
import logo10 from "../assets/BREMEN.png";
import logo11 from "../assets/CALABRO.png";
import logo12 from "../assets/CONARCO.png";
import logo13 from "../assets/CUIDEX.png";
import logo14 from "../assets/DUPONT.png";
import logo15 from "../assets/ELABUELO.png";
import logo16 from "../assets/ELROBLE.png";
import logo17 from "../assets/ESAB.png";
import logo18 from "../assets/EZETA.png";
import logo19 from "../assets/FORTEX.png";
import logo20 from "../assets/FRAVIDA.png";
import logo21 from "../assets/GHERARDI.png";
import logo22 from "../assets/HAMILTON.png";
import logo23 from "../assets/IRIMO.png";
import logo24 from "../assets/LIBUS.png";
import logo25 from "../assets/NORTON.png";
import logo26 from "../assets/SINPAR.png";
import logo27 from "../assets/STIHL.png";
import logo28 from "../assets/TEKBOND.png";
import logo29 from "../assets/TIMOX.png";
import logo30 from "../assets/TYROLIT.png";
import logo31 from "../assets/3M.png";
import logo32 from "../assets/OMBU.png";



const marcas = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
];

const CarruselMarcas = () => {
  return (
    <section className="carousel-wrapper">
      <h2 className="carousel-title">Marcas que nos acompañan:</h2>

      <div className="carousel-container">
        <div className="carousel-track">
          {[...marcas, ...marcas].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Marca ${index + 1}`}
              className="marca-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarruselMarcas;
