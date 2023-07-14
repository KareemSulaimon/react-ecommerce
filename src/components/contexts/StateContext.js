import React, {  useState,createContext, useContext, useEffect }  from 'react'
import useFetch from '../../Api/useFetch';
import axios from 'axios';
const Context = createContext();

export const StateContextProvider = ({children}) => {
//   const getItems = async(product) => {
//     const query = `*[_type == ${product}]`;
//     const products = await client.fetch(query);
    const [currentId,setCurrentId] = useState(0)
    const [products,setProducts] = useState([])    
//   }

// useEffect(() => {
//   getItems()
// }, [])

// const prevSlider = () => {
//   if(currentId === 0) {
//     setCurrentId (data.length - 1 )
//   } else {
//     setCurrentId(currentId - 1)
//   }
// }

// const nextSlider = () => {
//   if(currentId === ( data.length - 1)) {
//   setCurrentId(0)
//   } else {
//   setCurrentId(currentId + 1)
//   }
// }

useEffect(() => {
  const product =  axios.get('/file/slider.json');
  setProducts(product)
},[])
console.log(products)
return (
    <Context.Provider 
      value={{
        products,setProducts
      }}
       >
      {children}
    </Context.Provider>
)
}


export const useStateContext = () => useContext(Context)