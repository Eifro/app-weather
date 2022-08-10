import { createSlice } from '@reduxjs/toolkit'

// axios
import axios from 'axios'

//api
const API_KEY = '6055333b4187238968927a15d2d137c6'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?' 

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    list: [],
  },
  reducers: {
    // actions
    addWeatherByCity: (state, action) => {
      const found = state.list.find(weather => weather.id === action.payload.id)
      if (!found) state.list = [...state.list, action.payload]
    },
  }
})

// exportar actions
export const { addWeatherByCity } = weatherSlice.actions

// exportar reducer y agregar a store
export default weatherSlice.reducer

// operaciones asíncronas
export const fetchAddWeatherByCity = (city) => (dispatch) => {
  axios.get(`${API_URL}q=${city}&appid=${API_KEY}&units=metric&lang=es`)
    .then(response => {
      dispatch(addWeatherByCity(response.data))
    })
    .catch(error => console.log(error.message))
}