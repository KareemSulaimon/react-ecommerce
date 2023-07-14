import React, { useState,useContext } from 'react';
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import useFetch from '../Api/useFetch';
// import { client} from '../lib/client'
import { useEffect } from 'react';
// import { useStateContext } from './contexts/StateContext';
import Slide from './contexts/Slide';


 const Banner = () => {
    const  [data]  = useFetch('/file/slider.json') ;
    const [currentId,setCurrentId] = useState(0)
    const [product,setProduct] = useState([])

    const screenWidth = data.length * 1280

    // const {products,setProducts} = useStateContext()
    // console.log(products)
        
    //   const getItems = async() => {
    //       const query = '*[_type == "slider"]';
    //       const products = await client.fetch(query);
    //       setProduct(products)
    //     }

    //   useEffect(() => {
    //     getItems()
    // }, [])
    

    // const prevSlider = () => {
    //     if(currentId === 0) {
    //       setCurrentId(data.length -1 )
    //     } else {
    //       setCurrentId(currentId - 1)
    //     }
    // }
    
    // const nextSlider = () => {
    //     if(currentId ===( data.length - 1)) {
    //     setCurrentId(0)
    //     } else {
    //     setCurrentId(currentId + 1)
    //     }
    // }
      
    
        
  return (
    <div className='w-full mx-auto items-center  z-10'>
       <div className='max-w-screen-xl m-auto h-[800px] overflow-hidden relative'>
          <div style={{transform:`translateX(-${currentId * 1280}px)`}} 
            className={`flex w-[${screenWidth}px] h-full transition-transform duration-1000 `}>
            {
                data?.map((item) => (
                <div key={item?.id} className="w-[1280px] h-full relative" > 
                    <div  className="flex flex-col items-start absolute left-20 top-1/2 h-28 justify-between">
                        <h1 className="z-5 text-white font-extrabold text-5xl">
                            {item?.title}
                        </h1> 
                        <button 
                        className='text-white text-xl border-b border-spacing-2 border-white'>{item?.shop}</button>
                    </div>
                <div className=" w-full h-full cursor-pointer overflow-hidden">
                    <img className='w-full h-full object-cover'  src={item?.image} loading='priority' alt="banners img" /> 
                </div>
            </div> 
                ))
            }
          </div>
    
        <div className='absolute w-fit right-20 mx-auto flex gap-8 bottom-10'>
            {/* <div onClick={() => prevSlider}
            className='w-12 h-12 border-[1px] border-gray-300 flex items-center
                justify-center hover:cursor-pointer hover:border-gray-500 hover:text-gray-500 active:bg-gray-900 duration-300'> 
                <SlArrowLeft />
            </div>
            <div  onClick={nextSlider} 
            className='w-12 h-12 border-[1px] border-gray-300 flex items-center
            justify-center hover:cursor-pointer hover:border-gray-500  hover:text-gray-500 active:bg-gray-900 duration-300'> 
                <SlArrowRight />
            </div> */}

            <Slide currentId={currentId} setCurrentId ={setCurrentId} data = {data} />
        </div>
        {/* <div className='absolute w-fit right-20 mx-auto flex gap-8 bottom-44'>
            <div onClick={() => prevSlider(item === data,recentId = currentId,setId = setCurrentId )} 
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center 
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> 
                <SlArrowLeft />
            </div>
            <div  onClick={() => nextSlider(item = data,recentId  =currentId,setId = setCurrentId )} 
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center 
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> 
                <SlArrowRight />
            </div>
        </div> */}
    </div>
</div>

  )
}

export default Banner 