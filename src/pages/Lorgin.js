import React from 'react'
import { facebook, istagram, linkdelin, lock, mail, pinterest, waterDrop } from '../asset/image'
// import Link from 'react-router-dom'
function Lorgin() {
  return (
    <div className=' w-[1071px] h-[400px] '>
          <div className='w-full h-100px relative'>
                {/* <img src={waterDrop}
                className='w-full h-full '
                alt="water drop as a background top" /> */}
          </div>
        

        <div className='flex flex-col items-center justify-center w-full h-[600px] bg-slate-50 '>
        <div className='flex flex-col items-center justify-center absolute top-1'>
          
          <div className='flex flex-col items-center'>
          {/* <img  
          className='w-[166px]'
          src={logo} alt="company logo" /> */}
          <h1>Welcome to Win Store.com</h1>
          </div>

          <div className="flex flex-col items-center w-[438px] rounded-[28px] bg-white h-[421px] px-2 py-5">
              <div className='flex justify-between text-black w-full '>
                  {/* <Link to="/">
                  Register
                  </Link> 
                  <Link to="/">
                  sign up
                  </Link>  */}
              </div>
            <form action="POST">
              <div className='flex'>
                <img src={mail} alt="facebbok logo" />
                <input type="email"  required/>
              </div>
              <div>
                <img src={lock} alt="facebbok logo" />
                <input type="password" />
              </div>

              <div>
                <input type="checkbox" name="Remember password" id="" />
                <button>forget password</button>
              </div>
                <button type="submit">lorgin</button>
            </form>

            <div>
              <h2>or connect with</h2>
              <div>
                <img src={facebook} alt="facebbok logo" />
                <img src={istagram} alt=" istagram logo" />
                <img src={pinterest} alt="istagram logo" />
                <img src={linkdelin} alt="linkdelin logo" />
              </div>
            </div>
          </div>
          </div>
        </div>
   
    </div>
  )
}

export default Lorgin


