import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './slices/Cartslice'


export default configureStore({
  reducer: {
    cart:CartSlice.reducer,
  },
})