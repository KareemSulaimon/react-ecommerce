import React from 'react'
import { isnew } from '../asset/image'

const  Product = ({item:{image,isNew,category,title,price, width}}) => {
 return (
   <> 
      <div className={`flex flex-col items-start w-[${width}] h-full`}>
            <div className={`w-full h-[${width * 1000}] cursor-pointer overflow-hidden relative`}>
              <img
              className='w-full h-full object-cover'
              src={image} alt="product image" />
              {isNew && (
                 <img
              className={`w-[${width}] h-[${width}] absolute top-0 right-0 rotate-[30deg]`}
              src={isnew} alt="product image" />)}
              {/* className='w-[200px] h-8 absolute top-0 right-0 rotate-[30deg]'
              src={isnew} alt="product image" />} */}
            </div>
            <div className='flex flex-col gap-2 justify-evenly mt-6'>
                <small className={`z-50  font-100 text-gray-800 text-[${width}]`}>{category}</small>
                <h1 className={`z-50 text-gray-800 font-600 text-[${width}]`}>{title}</h1>
                <h3 className={`z-50 text-gray-800 font-400 text-[{${width}]`}>{price}</h3>
            </div>
       </div>
   </>
  )
}

export default Product