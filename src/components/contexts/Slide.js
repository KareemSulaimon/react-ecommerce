import React from 'react'
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

const Slide = (currentId,setCurrentId,data) => {

    const prevSlider = () => {
        if(currentId === 0) {
          setCurrentId(data.length - 1)
        } else {
          setCurrentId(currentId - 1)
        }
    }
    
    const nextSlider = () => {
        if(currentId === (data.length - 1)) {
        setCurrentId(0)
        } else {
        setCurrentId(currentId + 1)
        }
    }
      
  return (
    <>
      <div onClick={() => prevSlider}
      className='w-12 h-12 border-[1px] border-gray-300 flex items-center
          justify-center hover:cursor-pointer hover:border-gray-500 hover:text-gray-500 active:bg-gray-900 duration-300'> 
          <SlArrowLeft />
      </div>
      <div  onClick={nextSlider} 
      className='w-12 h-12 border-[1px] border-gray-300 flex items-center
      justify-center hover:cursor-pointer hover:border-gray-500  hover:text-gray-500 active:bg-gray-900 duration-300'> 
          <SlArrowRight />
      </div>
    </>
  )
}

export default Slide