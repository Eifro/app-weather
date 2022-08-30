export default function Card({ weather }) {
  const {
    name,
    main: { temp, temp_min, temp_max },
  } = weather;
  const img = weather.weather[0].icon;
  return (
    <div className="wheater-card flex h-52 border border-slate-300 rounded-xl shadow-lg shadow-neutral-400">
      <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} className="w-40 contrast-150 brightness-110" alt="" />
      <div className="wheater-details flex flex-col justify-center items-center gap-5 w-full">
        <h1 className="text-2xl shadow-2xl">{name}</h1>
        <p className="">{temp}</p>
        <p className="">
          <span>{temp_min}</span> / <span>{temp_max}</span>
        </p>
      </div>
    </div>
  );
}
