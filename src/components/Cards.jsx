import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import Card from "./Card";

export default function Cards() {
  const weathers = useSelector((state) => state.weather.list);

  return (
    <div className="weather-cards container mx-auto grid grid-cols-3 gap-10 text-white py-5">
      {
        weathers.map((weather) => (
          <Card weather={weather} key={weather.id} />
        ))
      }
      <div className="w-14 h-14 rounded-full fixed bottom-10 right-12 cursor-pointer hover:scale-110 bg-slate-800 flex items-center justify-center text-3xl"><FontAwesomeIcon icon={faCircleUp} /></div>
    </div>
  );
}
