import { useState } from 'react'
import { getWheater } from '../features/weather/weatherSlice'
import { useDispatch } from 'react-redux'

export default function SearchBar() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getWheater(input))
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
