import { configureStore } from '@reduxjs/toolkit'

// reducers
import weatherReducer from '../slices/wheater'

const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
})

// usar en Provider en index.js
export default store