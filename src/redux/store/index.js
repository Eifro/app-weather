import { configureStore } from '@reduxjs/toolkit'

// reducers
import wheaterReducer from '../slices/wheater'

const store = configureStore({
  reducer: {
    wheater: wheaterReducer
  }
})

// usar en Provider en index.js
export default store