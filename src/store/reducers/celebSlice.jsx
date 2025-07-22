 import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const  celebSlice = createSlice({
  name: ' celeb',
  initialState,
  reducers: {

    loadceleb: (state, action) => {
      state.info = action.payload
    },
    removeceleb: (state ,action) => {
      state.info = null
    },
  },
})

  export const {  loadceleb ,removeceleb } =  celebSlice.actions

export default  celebSlice.reducer