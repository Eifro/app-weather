import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWheater: async (state, action) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=6055333b4187238968927a15d2d137c6`)
      const data = await response.json()
      console.log(data)
    }
  }
})

export const { getWheater } = weatherSlice.actions
export default weatherSlice.reducer