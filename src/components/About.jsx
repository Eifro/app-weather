import NavBar from "./NavBar";

export default function About() {
  return (
    <div className="about text-white">
      <NavBar />
      <div className="container mx-auto border text-center">
        <h1 className="font-bold text-4xl tracking-widest my-5">CLIMATOONS</h1>
        <div className="description border w-4/5 mx-auto flex flex-col gap-2 text-lg">
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
          <p className="font-bold tracking-wider text-xl text-shadow-xl">Made with Miguel Espiritu</p>
        </div>
      </div>
    </div>
  );
}
