import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import useFetch from '../Api/useFetch';

const Hover = ({ prop }) => {
  const [data] = useFetch('/file/hover.json');
  const [keys, setKeys] = useState("");



  useEffect(() => {
    const categories = getPropData.map((category) => { 
      const subCategory = category.categories
      // console.log(subCategory.filter((item) => item.All))
     }
   )
    
  }, [data, prop]);

  const getPropData = data.filter((item) => item.type === prop);
  // const getPropData1 = data.find((item) => item.type === prop);

  

  
 
  
  // useEffect(() => {
  //   const foundItem = data.find((item) => item.type === prop);
    
  //   if (foundItem) {
  //     const { categories }  = foundItem;
  //     Object.entries(categories).forEach(([key,value]) => { 
  //       console.log(keys)
  //       setKeys(value)
  //     })
  //     categories.forEach((category) => {
  //       //  Object.entries(category).forEach(([key,value]) => {
  //       //  setKeys(category)
  //         // setKeys(key);
  //         //  category.forEach((item) => {
  //         //  console.log(item)
  //         // });
  //       });
  //     }
  //     }, [data, prop]);
  

  return (
    <>
      {getPropData.map((item) => (
        <div key={item?.id} className='w-1/2 h-full flex flex-row absolute top-[160px] z-20'>
          <div className="flex flex-col w-1/2 bg-white">
            <div className="flex items-center w-full justify-between">
              {/* {keys} */}
              <RiArrowRightSLine />
            </div>
          </div>
           <div className='w-1/2 h-[500px] cursor-pointer overflow-hidden relative'>
            <img
            className='w-full h-full object-cover'
            src={item?.image} alt="male fashion image" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Hover;
