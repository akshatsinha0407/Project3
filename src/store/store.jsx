import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice.jsx'
import celebReducer from './reducers/celebSlice.jsx'    
import tvReducer from './reducers/tvSlice.jsx'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    celeb: celebReducer,
    tv: tvReducer,
  },
})
export default store 