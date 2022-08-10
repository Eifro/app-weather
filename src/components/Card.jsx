export default function Card({weather}) {
  const {name, main : {temp, temp_min, temp_max}} = weather
  const img = weather.weather[0].icon
  return (
    <div className="wheater-card">
      <h1>{name}</h1>
      <h3>{temp}</h3>
      <h4>{temp_min} / {temp_max}</h4>
      <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt="" />
    </div>
  )
}
