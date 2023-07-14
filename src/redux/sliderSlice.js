import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSlide : 0,
    currentBanner : 0
}

export const sliderSlice = createSlice({
    name: 'slicer',
    initialState,
    reducers : {
        prevBanner: (state, action) => {
            if(state.currentBanner === 0)  {
               state.currentBanner  = 3
            } else {
                state.currentBanner -= 1
            }
        },
    
        nextBanner: (state, action) => {
            if(state.currentBanner === 3)  {
                 state.currentBanner = 0
              } else {
                  state.currentBanner += 1
              }
        },
        prevSlide: (state) => {
            if(state.currentSlide === 3)  {
                 state.currentSlide = 0
              } else {
                  state.currentSlide  -= 1
              }
        },
        nextSlide: (state) => {
            if(state.currentSlide === 3)  {
                 state.currentSlide = 0
              } else {
                state.currentSlide += 1
              }
        
    }
}
})

export const { prevBanner, nextBanner, prevSlide, nextSlide} = sliderSlice.actions

export default sliderSlice.reducer