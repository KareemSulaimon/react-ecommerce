import { createContext } from "react";

import React from 'react'

 export const StateContext = () => {
    const context = createContext()

    const [showMen, setShowMen] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQueryArray, setSearchQueryArray] = useState([]);
    const [data] = useFetch("/file/newArrival.json");
    const [searchResult, setSearchResult] = useState([])
    const [bg, setBg ] = useState("white")
    const [prop, setProp] = useState("")
    
    const showSearch = () => {
    setSearch(true)
    setBg("red")
    }

    const closeSearch = () => {
    setSearch(false)
    setBg("white")
    suggestedItem.length = 0
    
    }

    const filteredItems = searchResult.filter((item) =>
        searchQueryArray.some(query => item.includes(query)))

        
    const finalResult = data.filter((item) =>
    filteredItems.some((query) => item.title.includes(query))
    )
    
    const suggestedItem = finalResult.slice(0, 3)
    
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchQuery(inputValue)
        setSearchResult(data.map((item) => item.title))
        setSearchQueryArray([...inputValue])

    };
  return (
    <div>StateContext</div>
  )
}

export default StateContext
c