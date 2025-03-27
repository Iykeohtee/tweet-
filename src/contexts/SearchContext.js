"use client"

import { createContext, useState } from "react";

// initialising the context
export const SearchContext = createContext(); 

const name = "Ghaliib" 

// create a provider that will make the context available to all files 
export const SearchProvider = ({children}) => {     

  const [ result, setResult ] = useState([]) 
  
  const cars = ["bdubd", "ferrari", "lamborghini", "bugatti"]   

    return (
      <SearchContext.Provider value={{ name, result, setResult }}>              
      {children}
    </SearchContext.Provider>     
    ) 
}


