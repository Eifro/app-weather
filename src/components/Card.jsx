export default function Card({ weather }) {
  const {
    name,
    main: { humidity, temp, temp_min, temp_max },
    clouds: { all },
    wind: { speed },
  } = weather;
  const img = weather.weather[0].icon;
  const description = weather.weather[0].description
  
  return (
    <div className="wheater-card bg-transparent cursor-pointer group perspective">
      <div className="h-52 relative preserve-3d group-hover:my-rotate-y-180 duration-1000">
        <div className="flex h-full w-full border border-slate-300 rounded-br-xl rounded-tr-xl rounded-tl-md shadow-md shadow-neutral-400 absolute backface-hidden">
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            className="w-40 contrast-150 brightness-110"
            alt=""
          />
          <div className="wheater-details flex flex-col justify-center items-center gap-4 flex-1 bg-white/10 rounded-br-xl rounded-tr-xl">
            <h1 className="text-2xl underline decoration-wavy decoration-yellow-300 font-bold text-center">
              {name}
            </h1>
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
        <div className="absolute w-full h-full bg-gray-800 my-rotate-y-180 backface-hidden border border-slate-300 rounded-br-xl rounded-tr-xl rounded-tl-md text-center font-bold">
          <h2 className="text-xl my-5">Wheater Details</h2>
          <p>Humidity: <span className="font-normal">{humidity}%</span></p>
          <p>Cloudiness: <span className="font-normal">{all}%</span></p>
          <p>Wind: <span className="font-normal">{speed} m/s</span></p>
          <p>Description: <span className="font-normal">{description[0].toUpperCase().concat(description.slice(1))}</span></p>
        </div>
      </div>
    </div>
  );
}
