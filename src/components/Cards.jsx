import { useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {
  const weathers = useSelector((state) => state.weather.list);

  return (
    <div className="weather-cards">
      {
        weathers.map((weather) => (
          <Card weather={weather} key={weather.id} />
        ))
      }
    </div>
  );
}
