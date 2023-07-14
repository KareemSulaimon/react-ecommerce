import React, {  useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { nextSlide, prevSlide } from '../redux/sliderSlice';
import { Link } from 'react-router-dom';
import useFetch from '../Api/useFetch';
import {HiOutlinePlusSm, HiMinusSm} from 'react-icons/hi'
import ProductCol from './ProductCol';
import Product from './Product';


const Products = () => {
  const [data] = useFetch("/file/bags.json");
  const [currentId, setCurrentId] = useState(0)


  const prevSlider = () => {
    if(currentId === 0) {
      setCurrentId(data.length -1 )
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
    <div  className='w-full bg-white mx-auto items-center my-20'>
      <div className='flex flex-col max-w-screen-2xl mx-auto gap-24 overflow-hidden items-center'> 

         <ProductCol  prop={"/file/newArrival.json"} header={"New Arrival"} explore={"Explore All New Arrival "}/> 
    
          <div className='w-full flex justify-between items-center'>
            <div className=' w-1/2 h-full cursor-pointer overflow-hidden z-10'>
                  <img
                  className='w-full z-60 h-full object-cover group-hover:scale-110 duration-500'
                    src='https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/IMG_0149.png'
                    alt="banner with a man's image" />
            </div> 
              <div className='flex flex-col gap-8 w-1/2 relative'>
                  <div className='flex flex-col gap-4 items-start ml-36'>
                    <h1 className='font-black text-black text-3xl'>Classic T-shirts</h1>
                    <p className=" text-gray-800 font-400 text-lg" >Breathe new life into your wardrobe with this fresh find of<br/> classic Tee shirts.</p>
                    <Link to={'/'} className='mt-6  text-gray-600 font-300'>
                      Shop All
                    </Link>
                  </div>

                  <div className='absolute w-3/4 flex justify-between left-16 top-1/2 z-10'>
                        <div onClick={() => prevSlide()} 
                        className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                            justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> 
                            <SlArrowLeft />
                        </div>
                        <div
                        onClick={() => nextSlide()}
                        className='w-14 h-12 border-[1px] border-gray-700 flex items-center 
                            justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'> 
                            <SlArrowRight />
                        </div>
                    </div>

              <div style={{transform:`translateX(-${ currentId * 25}vw)`}} 
                  className='flex w-[250vw] gap-8 h-full transition-transform duration-1000 ml-5'>
                  {
                    data.map((item) => (
                      <div className='flex flex-col items-start w-[18vw] h-full'>
                        <div className='w-full h-[300px] cursor-pointer overflow-hidden'>
                          <img
                          className='w-full h-full object-cover group-hover:scale-110 duration-500'
                          src={item?.image} alt="product image" />
                        </div>
                        <div className='flex flex-col gap-2 justify-evenly mt-6'>
                            <small className="font-100 text-gray-800 text-sm">{item?.category}</small>
                            <h1 className="text-gray-800 font-600 text-lg">{item?.title}</h1>
                            <h3 className="text-gray-800 font-400 text-xs">{item?.price}</h3>
                        </div>
                        
                    </div>
                    ))
                  }
                </div>
              
              </div>

          

          </div> 

          <div className='w-full flex justify-between items-center bg-gray-50'>

              <div className=' w-[60%] h-full cursor-pointer overflow-hidden z-10 relative'>
                    {/* <img
                    className='w-full z-5 h-full object-cover'
                      src='https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/IMG_0070_3_52a51f2a-0273-4e2a-9fcc-5b66afba7e5f.png'
                      alt="banner with there bags image" /> */}
                      
                     { data?.map((item) => (
                          <div key={item?.id} className={`cursor-pointer absolute
                           bg-red-600 top-[${item?.cssPosition.top}px] left-[${item?.cssPosition.right}px]`}>
                          <HiOutlinePlusSm  onClick={()=> setCurrentId(item?.id)}/>
                          <HiMinusSm />
                          </div> 
                      ))

                     } 
              </div> 
             
              <div className='flex flex-col items-center justify-center gap-8 w-[40%] h-full relative'>

                  <h1 className='font-black text-black text-3xl'>Shop Coperni Collections</h1>

                  <div className =' flex w-[20vw] overflow-hidden'>
                    {
                    data.map((item) => (
                      //    <div key={item?.id} style={{transform:`translateX(-${currentId * 20}vw)`}} 
                      //      className='flex w-[200vw] h-full transition-transform duration-1000 '>
                         
                      //        <div className='flex flex-col w-[20vw] items-center h-full'>
                      //          <div className='w-full cursor-pointer overflow-hidden  bg-gray-100'>
                      //            <img
                      //            className='w-full h-full object-cover group-hover:scale-110 duration-500'
                      //            src={item?.image} alt="product image" />
                      //          </div>
                      //          <div className='flex flex-col gap-2 items-center justify-evenly mt-6'>
                      //              <small className="font-100 text-gray-800 text-sm">{item?.category}</small>
                      //              <h1 className="text-gray-800 font-600 text-xl">{item?.title}</h1>
                      //              <h3 className="text-gray-800 font-400 text-xs">{item?.price}</h3>
                      //          </div>
                               
                      //      </div>
                           
                      //  </div>
                      <Product  {...item = item}/>
                    )
                    )   
                  }
                  </div>

                  <div className='absolute w-3/4 flex justify-between left-16 top-1/2 z-10'>
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

          

          </div> 

          <ProductCol  prop={"/file/shopSneaker.json"} header={"Shop Sneakers"} explore={"Explore all Sneakers from KIKZ"} width={"20"}/> 

          <div className='flex w-full justify-between'>
            <div className='flex flex-col w-[45%] gap-56 mt-20'>
              <div className='flex gap-10 flex-col w-full ml-20'>
                  <h1 className='text-black text-4xl font-black'>Opulent Female Bags</h1>
                  <button className='text-white text-sm font-700 bg-black w-40 px-10 py-3'>Shop All</button>
              </div>
              <div className=' w-full h-full cursor-pointer overflow-hidden z-10 relative'>
                  <img
                  className='w-full z-60 h-full object-cover group-hover:scale-110 duration-500'
                  src="https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/IMG_0064_2.png" 
                  alt=" woman with a bag image" />
                   <Link to={"/"}>
                        <div className='flex max-w bg-white h-24 items-center absolute right-5 bottom-10'>
                           <div className='flex flex-col gap-2 px-5'>
                            <h5 className='text-black font-black text-xs'>Coperni Ring Pounch Camel</h5>
                            <small className='text-gray-600 font-sm'>#670,800.00 NGN</small>  
                           </div>
                           <div className=' w-20 h-full cursor-pointer overflow-hidden z-10 p-1'>
                              <img
                              className='w-full z-60 h-full object-cover group-hover:scale-110 duration-500'
                              src="https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/Coperni-HOLOGRAPHIC-SWIPE-BAG-BLUE_BLACK-UNI2_43e4514a-516b-48f1-af79-ac4164f2f1af.png" 
                              alt=" bag image" />
                           </div>
                        </div>
                     </Link>
              </div> 
             
            </div>

            <div className='flex flex-col w-[45%] gap-20'>
              <div className=' w-full h-full cursor-pointer overflow-hidden z-10 relative'>
                  <img
                  className='w-full z-60 h-full object-cover group-hover:scale-110 duration-500'
                    src='https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/IMG_0064.png' 
                  alt=" woman with a bag image" />
                   <Link to={"/"}>
                        <div className='flex max-w bg-white h-24 items-center absolute right-5 bottom-10'>
                           <div className='flex flex-col gap-2 px-5'>
                            <h5 className='text-black font-black text-xs'>Coperni Holographic Swipe Bag - Blue/ Black</h5>
                            <small className='text-gray-600 font-sm'>#631,800.00 NGN</small>  
                           </div>
                           <div className=' w-20 h-full cursor-pointer overflow-hidden z-10 p-1'>
                              <img
                              className='w-full z-60 h-full object-cover group-hover:scale-110 duration-500'
                               src="https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/Coperni-HOLOGRAPHIC-SWIPE-BAG-BLUE_BLACK-UNI4_07c84c9a-7d94-425e-8900-e467036823ef.png"
                              alt=" bag image" />
                           </div>
                        </div>
                     </Link>
               </div> 
                <div className='flex flex-col w-2/3 gap-10 ml-10'>
                    <p className='text-gray-500 text-xl font-200'>
                        Discover a symphony of Bags with opulent materials, from sumptuous leathers to lustrous crystals and beyond. 
                        Every stitch, every detail is thoughtfully crafted to perfection,
                        ensuring unparalleled quality and enduring beauty.
                      </p>
                      <Link 
                       className='hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'
                      to={"/"}>
                          Shop all
                      </Link>
                </div>
            </div>


               
          </div>

          <ProductCol  prop={"/file/pantsTrouser.json"} header={"Shop Pants & Trousers"} explore={"Explore All "} width={"20"}/> 

         
          <div className=' w-full h-full cursor-pointer overflow-hidden z-10 relative'>
                  <img
                  className='w-full z-60 h-full object-cover group-hover:scale-110 duration-500'
                  src="https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://sfycdn.speedsize.com/3e0f3535-6980-450e-a0b6-dfaa29d181a6/https://cdn.shopify.com/s/files/1/0566/4731/9706/files/ashHD_1.png"
                  alt=" woman wearing a green dress" />
                 
        
              <div className='flex flex-col gap-2 px-5 absolute left-10 bottom-10'>
              <h1 className='text-white font-bolder text-2xl'>
                 ASHLUXE Harmonious <br/> Discord: Exploring the <br /> sentiment of FECTAC'77
              </h1>
              <Link to={"/"}>                     
                    Shop All
                </Link>
              </div>
                
          </div> 

          <ProductCol  prop={"/file/pantsTrouser.json"}
           header={"Shop Pants & Trousers"} explore={"Explore All "} width={"20"} /> 
          <ProductCol  prop={"/file/pantsTrouser.json"}
           header={"Shop Pants & Trousers"} explore={"Explore All "}  width={"20"}/> 
          <ProductCol  prop={"/file/pantsTrouser.json"}
           header={"Shop Pants & Trousers"} explore={"Explore All "} width={"20"} /> 

         
      </div>
    </div>
  )
}

export default Products
