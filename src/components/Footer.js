import React from 'react';
import {SlArrowRight} from 'react-icons/sl'
import {TfiFacebook} from 'react-icons/tfi'
import {AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai'
import {Form, Link} from 'react-router-dom'
import { LOGO_2 } from '../asset/image';


const Footer = () => {
  return (
    <div>
        <div className="flex flex-col max-w-screen-xl  mx-auto items-center">
              <div className='flex flex-col w-full gap-8 p-28 bg-[#f7f5f0] items-center'>
                <h1 className='font-black text-4xl'>Join Our Community</h1>
                <p className='font-600 text-xl text-gray-500 text-center gap-1'>
                    <span className=' font-black mr-1'>Get 10% off your first order</span>
                      and be the first to get the latest updates <br/> on our promotion campaigns, products and services.
                  </p>    
                <div>
                  <Form 
                  className="flex items-center  w-[500px] h-24 p-4">
                    <input 
                    className='bg-white w-full h-full p-4 border-gray-300 border-l border-t border-b'
                    type="email" name="Email"  placeholder="Enter email address" autoSave='true' autoComplete='false'/>
                    <div className='flex h-full w-16 justify-center bg-white border-gray-300 border rounded-none'>
                    <SlArrowRight className='h-full bg-white hover:text-gray-600 text-black cursor-pointer'/>
                    </div>
                  </Form>
                  
                </div>
              </div>
              <div className='flex flex-col w-full bg-black items-start px-10 pt-28 pb-10 gap-10'>
                <div className='flex w-full items-start gap-20'>
                  <div  className='flex flex-col w-[350px] gap-4 items-start pl-2'>
                      <Link to="/">
                              <h1 className='text-white font-extrabold text-3xl hover:text-gray-300'>ASHLUXURY</h1>
                        </Link>
                      <p className='text-gray-400 text-lg'>
                        The premier e-commerce destination where style meets luxury, 
                        renowned for providing its customers with specially curated high-fashion and 
                        cutting-edge designer clothes and accessories.
                      </p>
                  </div>
                  {/* <div> */}
                      <div className='flex flex-col items-center'>
                          <h2 className='text-white text-base'>Our Socials</h2>
                        <div className='flex items-center gap-4'>
                          <Link to={"/"}>
                          <AiOutlineInstagram  className='text-white w-5 h-10' />
                          </Link>
                          <Link to={"/"}>
                          <TfiFacebook  className='text-white w-5 h-10'/>
                          </Link>
                          <Link to={"/"}>
                          <AiOutlineYoutube  className='text-white w-5 h-10'/>
                          </Link>
                        </div>
                      {/* </div> */}
                  </div>
              </div>
              <hr className=' border border-gray-500 w-full'/>
              <ol className='flex gap-8'>
              <Link to={"/"}>
                  <li className='text-gray-200 text-sm'>About Us</li>
              </Link>
              <Link to={"/"}>
                  <li className='text-gray-200 text-sm'>Shipping</li>
            </Link>
            <Link to={"/"}>
                  <li className='text-gray-200 text-sm'>Contact Details</li>
                  </Link>
            <Link to={"/"}>
                  <li className='text-gray-200 text-sm'>Return Policy</li>
              </Link>
            <Link to={"/"}>
                  <li className='text-gray-200 text-sm'>FAQS</li>
              </Link>
            <Link to={"/"}>
                  <li className='text-gray-200 text-sm'>Terms & Condition</li>
              </Link>
              </ol>
            </div>
        </div>
    </div>
  )
}


export default Footer
