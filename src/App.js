import { useDispatch } from 'react-redux'
import { getWheaters } from './features/weather/weatherSlice'

export default function App() {
  const dispatch = useDispatch()
  /* const weathers = dispatch(getWheaters()) */
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Lima&lang=es&units=metric&appid=6055333b4187238968927a15d2d137c6')
    .then(response => response.json())
    .then(data => console.log(data))
  return (
    <div>App</div>
  )
}
