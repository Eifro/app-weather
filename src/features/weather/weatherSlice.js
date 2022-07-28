import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWheaters: (state, action) => {
      console.log(state, action)
    }
  }
})

export const { getWheaters } = weatherSlice.actions
export default weatherSlice.reducer