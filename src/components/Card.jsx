export default function Card({ weather }) {
  const {
    name,
    main: { temp, temp_min, temp_max },
  } = weather;
  const img = weather.weather[0].icon;
  return (
    <div className="wheater-card flex h-52 border border-slate-300 rounded-br-xl rounded-tr-xl rounded-tl-md shadow-lg shadow-neutral-400 ">
      <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} className="w-40 contrast-150 brightness-110" alt="" />
      <div className="wheater-details flex flex-col justify-center items-center gap-5 w-full backdrop-blur-xl bg-white/10 rounded-br-xl rounded-tr-xl">
        <h1 className="text-2xl underline decoration-wavy decoration-yellow-300 font-bold">{name}</h1>
        <p className="text-2xl font-bold">{Math.round(temp)}°C</p>
        <div className="flex gap-5">
          <div className="bg-slate-300 rounded-full px-4 py-2 border text-slate-800 font-bold flex flex-col items-center content-center">
            <span className="">Min</span>
            <span className="text-lg">{Math.round(temp_min)}°C</span>
          </div>
          <div className="bg-slate-300 rounded-full px-4 py-2 border text-slate-800 font-bold flex flex-col items-center content-center">
            <span>Max</span>
            <span className="">{Math.round(temp_max)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
