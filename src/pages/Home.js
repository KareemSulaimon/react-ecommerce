// import React, { useEffect, useState } from 'react'
// import Banner from '../components/Banner'
// import Products from '../components/Products'
// import { useLoaderData } from 'react-router-dom'


// const  Home = () => { 
//   const [products, setProducts] = useState([]);
//     const data = useLoaderData();
//     useEffect(()=> {
//       setProducts(data.data)
//      }, [data]);

//   return (
//     <div>
//         <Banner />
//         <Products products = {products} />
//     </div>
//   ) 
// }

// export default Home


import React from 'react'
// import Heading from '../components/Heading'
import  Banner from '../components/Banner'
import  Products  from '../components/Products'

function Home() {
  return (
    <div>
       <Banner />
       <Products />
        </div>
  )
}

export default Home