import React, {  useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import useFetch from '../Api/useFetch';
import { Link } from 'react-router-dom';
import Product from './Product';


const ProductCol = ({prop,header,explore}) => {
    const [data] = useFetch(prop);

    const [currentId, setCurrentId] = useState(0)
    
    const prevSlider = () => {
        if(currentId === 0) {
          setCurrentId( data.length)
        } else {
          setCurrentId(currentId - 1)
        }
       }
    
       const nextSlider = () => {
        if(currentId === data.length) {
          setCurrentId(0)
        } else {
          setCurrentId(currentId + 1)
        }
       }
     

  return (
    <div className='w-full gap-12 relative items-center'>
              <div className='w-full flex justify-between h-40 items-center'>
                    <div className='flex w-[450px] justify-between items-center'>
                        <h1 className='font-black text-black text-4xl'>{header}</h1>
                        <hr className='w-48 border-t-1 border-gray-800'></hr>
                    </div>

                    <div className=' w-fit right-20 flex gap-8 bottom-44'>
                      <div onClick={() => prevSlider()} 
                       className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> 
                          <SlArrowLeft />
                      </div>
                      <div
                      onClick={() => nextSlider()}
                      className='w-14 h-12 border-[1px] border-gray-700 flex items-center 
                          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> 
                          <SlArrowRight />
                      </div>
                  </div>
              </div>
    
            <div style={{transform:`translateX(-${ currentId * 32}vw)`}}
                className='flex w-[320vw] justify-between h-full transition-transform duration-1000'>
                {
                  data.map((item) => (
                    <Product key={item.id} item={{
                      image:item?.image,
                      isNew: item?.isNew,
                      category: item?.category,
                      title:item?.title,
                      price: item?.price,
                      width: item?.width,
                    }} />
                  //   <div className='flex flex-col items-start w-[29vw] h-full '>
                  //     <div className='w-full h-[500px] cursor-pointer overflow-hidden relative'>
                  //       <img
                  //       className='w-full h-full object-cover group-hover:scale-110 duratio-500'
                  //       src={item?.image} alt="product image" />
                  //     { item?.isNew && <img
                  //       className='w-[200px] h-8 absolute top-0 right-0 rotate-[30deg]'
                  //       src={isnew} alt="product image" />}
                  //     </div>
                  //     <div className='flex flex-col gap-2 justify-evenly mt-6'>
                  //         <small className="z-50  font-100 text-gray-800 text-sm">{item?.category}</small>
                  //         <h1 className="z-50 text-gray-800 font-600 text-2xl">{item?.title}</h1>
                  //         <h3 className="z-50 text-gray-800 font-400 text-lg">{item?.price}</h3>
                  //     </div>
                  // </div>
                  ))
                }
              
            
            </div>
            <div className='w-full flex justify-between h-40 items-center'>
              <Link to={'/'}>
                <h1 className='flex w-80 justify-between items-center font-700 text-gray-700 text-lg'>
                 {explore}
                </h1>
              </Link>
         </div>
    </div>

              
  )


}

export default ProductCol