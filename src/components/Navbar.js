import React from 'react'

const Navbar = () => {
  return (
    <> 
        <div className='flex flex-col w-[90%] gap-14 sticky top-0'>
            <Form 
            className='border-b-[1px] border-b-gray-200 h-20 w-full  flex items-center justify-between'>
            <button onClick={showSearch} aria-label="Search" className='cursor-pointer'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.715 17 13.2859 16.3833 14.5032 15.3595L19.8243 20.2372L21.1757 18.7628L15.8354 13.8676C16.5713 12.7595 17 11.4298 17 10C17 6.13401 13.866 3 10 3Z" fill="currentColor"></path>
            </svg>
            </button>

            

            {
            search ? (
                <div className='flex w-full h-full items-center justify-around'>
        
                    <input 
                    type="text" value={searchQuery} onChange={handleInputChange}  placeholder='Search our store' className='w-3/4 border-none outline-0'/>

                <button onClick={closeSearch} type="button"  aria-label="Close" className='cursor-pointer'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2.41L13.59 1L8 6.59L2.41 1L1 2.41L6.59 8L1 13.59L2.41 15L8 9.41L13.59 15L15 13.59L9.41 8L15 2.41Z" fill="currentColor" stroke-width="0.5"></path>
                    </svg>
                </button>
                
                </div>

                
            ) : (
                <>
                <Link to="/">
                <h1>
                <img src={LOGO} alt=" ashLuxury logo" />
                </h1>
            </Link>
            <div className='flex w-20 justify-between'>
            <span className=' cursor-pointer'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8966 14.3144C16.8621 13.6972 15.7241 13.4915 14.2759 13.4915H9.62069C8.17241 13.4915 7.03448 13.8001 6 14.3144C4.96552 14.9315 4.24138 15.7543 3.72414 16.6801C3.2069 17.7086 3 18.84 3 20.0743V21H4.86207V20.0743C4.86207 19.0457 5.06897 18.2229 5.48276 17.5029C5.89655 16.7829 6.41379 16.2686 7.03448 15.8572C7.75862 15.4458 8.68966 15.2401 9.72414 15.2401H14.2759C15.3103 15.2401 16.2414 15.4458 16.9655 15.8572C17.6897 16.2686 18.2069 16.7829 18.5172 17.5029C18.931 18.2229 19.1379 19.1486 19.1379 20.0743V21H21V20.0743C21 18.84 20.6897 17.6058 20.2759 16.6801C19.6552 15.6515 18.931 14.8286 17.8966 14.3144Z" fill="currentColor"></path>
                    <path d="M9.82751 11.2285C10.4482 11.537 11.1723 11.7428 11.8965 11.7428C13.1379 11.7428 14.1723 11.3313 14.8965 10.6113C15.6206 9.7885 16.0344 8.75994 16.0344 7.42281C16.0344 6.4971 15.8275 5.77711 15.5172 5.15998C15.2068 4.54284 14.6896 4.02856 13.9654 3.61714C13.4482 3.20571 12.7241 3 11.9999 3C10.7585 3 9.72406 3.41142 8.89648 4.13142C8.17234 4.95426 7.75854 5.98282 7.75854 7.31995C7.75854 8.24566 7.96544 8.96565 8.27579 9.68564C8.68958 10.3028 9.20682 10.9199 9.82751 11.2285ZM10.2413 5.46854C10.6551 5.05712 11.2758 4.85141 11.9999 4.85141C12.4137 4.85141 12.8275 4.85141 13.2413 5.05712C13.5516 5.26283 13.862 5.46854 14.0689 5.87997C14.1723 6.29139 14.2758 6.80567 14.2758 7.31995C14.2758 8.24566 14.0689 8.86279 13.6551 9.27422C13.2413 9.68564 12.6206 9.89135 11.8965 9.89135C11.3792 9.89135 11.0689 9.7885 10.6551 9.58278C10.3448 9.47993 10.1379 9.17136 9.93096 8.86279C9.72406 8.45137 9.62061 7.93709 9.62061 7.31995C9.62061 6.4971 9.82751 5.87997 10.2413 5.46854Z" fill="currentColor"></path>
                </svg>
            </span>

            <span className=' cursor-pointer'>
                <svg width={"24"} height={"24"} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d="M17.2991 9.50857L13.472 3H10.528L6.70093 9.50857H1.5L3.46262 17.6686C3.75701 19.0286 4.93458 20 6.30841 20H17.6916C19.0654 20 20.1449 19.0286 20.5374 17.6686L22.5 9.50857H17.2991V9.50857ZM11.4112 4.74857H12.5888L15.4346 9.60571H8.56542L11.4112 4.74857ZM18.9673 17.28C18.8692 17.5714 18.771 17.8629 18.4766 18.0571C18.2804 18.2514 17.986 18.3486 17.6916 18.3486H6.30841C6.01402 18.3486 5.71963 18.2514 5.52336 18.0571C5.3271 17.8629
                5.13084 17.5714 5.03271 17.3771L3.56075 11.2571H20.4393L18.9673 17.28Z" fill="currentColor"></path>
                </svg>
            </span>
            
            </div>
                </>
            )
        }
        
            
           </Form>  
        
            {
            suggestedItem.length === 0 || search === false ? false : 
            <div className='flex flex-col w-full h-full gap-10'>
                    <div 
                    className='w-full border-b-[1px] border-b-gray-200 m-auto flex items-center justify-between bg-white'>
                    <div className=' flex flex-col items-start gap-10 w-1/2'>
                        <div className='flex items-center gap-5'>
                            <h3 className='font-bold text-black'>Products </h3>
                            <hr className='w-20 border-t-1 border-black '/>
                        </div>
                        <div className=' flex items-center justify-between w-full'>
                            {
                            suggestedItem.map(item => (
                                <div className='flex flex-col items-start  h-full'>
                                        <div className='w-full h-[200px] cursor-pointer overflow-hidden relative'>
                                        <img
                                        className='w-full h-full object-cover group-hover:scale-110 duration-500'
                                        src={item?.image} alt="product image" />
                                        {/* { item?.isNew && <img
                                        className='w-[200px] h-8 absolute top-0 right-0 rotate-[30deg]'
                                        src={isNew} alt="product image" />} */}
                                        </div>
                                        <div className='flex flex-col gap-2 justify-evenly mt-6'>
                                            <small className="z-50  font-100 text-gray-800 text-sm">{item?.category}</small>
                                            <h1 className="z-50 text-gray-800 font-600 text-xs">{item?.title}</h1>
                                            <h3 className="z-50 text-gray-800 font-400 text-sm">{item?.price}</h3>
                                        </div>
                                    </div>   
                                ))
                    }
                        </div>
                    </div>
                        <hr className='w-56 border-t-1 border-black '/>
                    <div className='border-l-1 border-red-200'>
                    
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-5'>
                            <h3 className='font-bold text-black'>Sugggestion </h3>
                            <hr className='w-20 border-t-1 border-black '/>
                        </div>
                        <ol>
                            <li>Asheluxe</li>
                            <li>Asheluxe</li>
                            <li>Asheluxe</li>
                            <li>Asheluxe</li>
                        </ol>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-5'>
                            <h3 className='font-bold text-black'>Sugggestion </h3>
                            <hr className='w-20 border-t-1 border-black '/>
                        </div>
                        <ol>
                            <li>Asheluxe</li>
                            <li>Asheluxe</li>
                            <li>Asheluxe</li>
                            <li>Asheluxe</li>
                        </ol>
                    </div>
                </div>
                    </div>

                    <div  className='w-full border-b-[1px] border-b-gray-200 m-auto flex items-center justify-between bg-white'>

                <button type="submit">Search For {searchQueryArray} </button>   
                    </div>
            </div>
            } 
    </div>
</>
  )
}

export default Navbar