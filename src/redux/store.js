import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import sliderSlice from './sliderSlice'
import { productApi } from './dataLenght'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
       slicer: sliderSlice,
       [productApi.reducerPath] : productApi.reducer
    },

    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware)
    }
})

setupListeners(store.dispatch)