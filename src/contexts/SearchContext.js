import { createContext, useState } from "react";

// initialising the context
const SearchContext = createContext(); 

const name = "Ghaliib"   

// create a provider that will make the context available to all files 


export const SearchProvider = ({children}) => {
    <SearchContext.Provider value={name}>        
      {children}
    </SearchContext.Provider>   
}


