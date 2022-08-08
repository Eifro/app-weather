import { createSlice } from '@reduxjs/toolkit'

// axios
import axios from 'axios'

//api
const API_KEY = '6055333b4187238968927a15d2d137c6'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?' 

export const wheaterSlice = createSlice({
  name: 'wheater',
  initialState: {
    list: []
  },
  reducers: {
    // actions
    foundWheaterByCity: (state, action) => {
      state.list = [...state.list, action.payload]
    },
  }
})

// exportar actions
export const { foundWheaterByCity } = wheaterSlice.actions

// exportar reducer y agregar a store
export default wheaterSlice.reducer

// operaciones asíncronas
export const fetchFoundWheaterByCity = (city) => (dispatch) => {
  axios.get(`${API_URL}q=${city}&appid=${API_KEY}`)
    .then(response => {
      dispatch(foundWheaterByCity(response.data))
    })
    .catch(error => console.log(error.message))
}