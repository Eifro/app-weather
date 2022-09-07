import { useSelector } from "react-redux";
import Card from "./Card";

/* imp font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function Cards() {
  const weathers = useSelector((state) => state.weather.list);

  /* scroll up */
  const scrollUp = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp)
      window.scrollTo(0, currentScroll - (currentScroll / 10))
    }
  }

  /* mientras se hace scroll */
  window.onscroll = () => {
    const scroll = document.documentElement.scrollTop
    if (scroll > 120) document.querySelector('.btn-scrollup').classList.remove('hidden')
    else document.querySelector('.btn-scrollup').classList.add('hidden')
  }
  
  return (
    <div className="weather-cards container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white py-8 px-2 sm:px-0">
      {weathers.map((weather) => (
        <Card weather={weather} key={weather.id} />
      ))}
      <div className="btn-scrollup w-14 h-14 rounded-lg fixed bottom-10 right-4 cursor-pointer transition hover:scale-110 bg-slate-800 flex items-center justify-center text-3xl hidden" onClick={scrollUp}>
        <FontAwesomeIcon icon={faCircleUp} />
      </div>
    </div>
  );
}
