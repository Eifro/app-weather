import { Link } from 'react-router-dom';
import weather from "../assets/weather.svg";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Social from './Social';

function LandingPage() {

  return (
    <div className="landing-page container mx-auto w-full h-full flex flex-col md:flex-row items-center justify-around md:gap-8">
      <img src={weather} alt="Imagen" className="w-4/5 md:w-2/5" />
      <div className="text-center -mt-28 md:-mt-0">
        <p className="text-white font-bold text-2xl md:text-4xl text-center mb-8">
          ¡Espacio donde puedes conocer el estado de clima actual de tu país!
        </p>
        <Link to='/home' className="btn-started bg-indigo-600 px-8 py-3 text-white font-bold text-xl rounded hover:bg-indigo-400 transition duration-500">
          Empezar <FontAwesomeIcon icon={faCircleRight} />
        </Link>
        <Social />
      </div>
    </div>
  );
}

export default LandingPage;
