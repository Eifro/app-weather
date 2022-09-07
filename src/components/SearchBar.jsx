import { useState } from 'react'
import { useDispatch} from 'react-redux'

// actions
import { fetchAddWeatherByCity } from '../redux/slices/wheater'

export default function SearchBar() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchAddWeatherByCity(input))
    setInput('')
  }

  return (
    <div className="search-bar bg-sky-600 py-5">
      <form onSubmit={handleSubmit} className="container mx-auto flex gap-5 w-max md:w-full">
        <input type="text" value={input} className="input-search border-2 border-white rounded focus:outline-none px-3 py-1 text-zinc-700 text-lg hover:bg-neutral-200 focus:bg-neutral-200 w-48 md:w-max" placeholder='Buscar país..' onChange={handleChange} />
        <button type="submit" className="btn-submit border-2 border-zinc-200 text-white px-5 py-1 rounded-lg hover:bg-white hover:text-zinc-600 hover:border-zinc-600 uppercase font-bold active:bg-neutral-200 ease-in duration-300">Agregar</button>
      </form>
    </div>
  )
}
