import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([]);
        
        useEffect (() => {
            axios.get(url)
            .then((data) => setData(data.data))
        }, [url])

        return [data]
    }
      
 


export default useFetch