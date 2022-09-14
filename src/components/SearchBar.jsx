import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

// actions
import { fetchAddWeatherByCity } from '../redux/slices/wheater'

export default function SearchBar() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const weathers = useSelector(state => state.weather.list)
  console.log(weathers);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const regex = /[a-z]+$/i // regex solo texto
    if (regex.test(input)) dispatch(fetchAddWeatherByCity(input))
    else alert('Ingrese correctamente el país..!')
    setInput('')
  }

  const disableForm = () => {
    document.querySelector('.btn-submit').disabled = true
    document.querySelector('.btn-submit').style.cursor = 'not-allowed'
  }

  useEffect(() => {
    if (location.pathname === '/about') disableForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="container mx-auto flex gap-5 w-max md:w-full">
        <input type="text" value={input} className="input-search border-2 border-white rounded focus:outline-none px-3 py-1 text-zinc-700 text-lg hover:bg-neutral-200 focus:bg-neutral-200 w-48 md:w-max" placeholder='Buscar país..' onChange={handleChange} />
        <button type="submit" className="btn-submit border-2 border-zinc-200 text-white px-5 py-1 rounded-lg hover:bg-white hover:text-zinc-600 hover:border-zinc-600 uppercase font-bold active:bg-neutral-200 ease-in duration-300">Agregar</button>
      </form>
    </div>
  )
}
