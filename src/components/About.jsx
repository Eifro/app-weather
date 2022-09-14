import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

/* imp font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="about text-white bg-cyan-700">
      <NavBar />
      <div className="container mx-auto text-center mt-12 pb-12">
        <h1 className="font-bold text-4xl tracking-widest my-7">CLIMATOONS</h1>
        <div className="description w-4/5 mx-auto flex flex-col gap-8 md:gap-2 text-lg mb-12 text-justify">
          <p>
            Aplicación Web que permite insertar un país o ciudad y ver su estado
            de clima actual en dicha ubicación.
          </p>
          <p>
            Los detalles aparecidos son:&nbsp;
            <span>
              temperatura actual, mínima y máxima, otros detalles como
              porcentaje de humedad, nubosidad, longitud de viento y descripción
              del cielo en su estado actual
            </span>
            .
          </p>
          <p>
            Proyecto realizado con mucho&nbsp;
            <span className="text-yellow-500 text-2xl">♥</span> durante mi
            cursada en el bootcamp <span className="text-yellow-500 font-bold text-xl">Henry</span>.
          </p>
          <p className="font-bold tracking-wider text-2xl text-shadow-xl mt-10 text-center">Made with Miguel Espiritu <FontAwesomeIcon icon={faMugHot} className="text-yellow-500" /></p>
        </div>
        <Link to='/home' className="btn-back-home border-2 px-3 py-2 rounded text-lg font-bold uppercase tracking-wide hover:bg-white hover:text-zinc-600 transition duration-600">Back <FontAwesomeIcon icon={faArrowTurnDown} className="rotate-90" /> </Link>
      </div>
    </div>
  );
}
