import { configureStore } from '@reduxjs/toolkit';
import CountriesSlice from './CountriesSlice';



let store=configureStore({
  reducer:{
    Countries:CountriesSlice
  }
})


export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch