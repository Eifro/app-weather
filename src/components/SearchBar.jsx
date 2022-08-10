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
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text" className="input-search" onChange={handleChange} />
        <button type="submit" className="btn-submit">Agregar</button>
      </form>
    </div>
  )
}
