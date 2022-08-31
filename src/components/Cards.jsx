import { useSelector } from "react-redux";
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
    </div>
  );
}
