"use client"

import React from 'react'
import styles from "./searchBar.module.css"
import { fetchData } from '@/utils/fetchData'
import { fetefifw } from '@/utils/fetchData'
import { useState } from 'react'
import Image from 'next/image'


const SearchBar = ({hr}) => {    
  
const [ userKeyword, setUserKeyword ] = useState('')     
const [result, setResult] = useState([])  
const [ loading, setLoading ] = useState(false)

const handleSearch = async (e) => {
   e.preventDefault(); // prevent the default of events
   const data = await fetchData(userKeyword)   
   setLoading(true)

  //  console.log(data)

   setResult(data.result.timeline.instructions);  
   setLoading(false)    
  }
  console.log(result) 


  return (
    <div>   
    <form onSubmit={handleSearch}> 
        <input type="text" placeholder='Search post'  
         value={userKeyword}     
            className='bg-transparent'
            onChange={(e) => setUserKeyword(e.target.value)}       
            />
    </form>
    
    {hr}   

    
    {
      loading ? <p>Loading data</p> : (
        result.map((item, index) => (
          <div key={index}>  
            {item.entries?.map((entry, entryIndex) => (
              <div key={entryIndex}>
                {entry.content?.items?.map((eachItem, itemIndex) => (
                 <div key={itemIndex}>    
                    <h1> 
                    {eachItem?.item?.itemContent?.user_results?.result?.legacy?.location || "No Location"}
                    {eachItem?.item?.itemContent?.user_results?.result?.legacy?.followers_count || "No follow"}
                    {eachItem?.item?.itemContent?.user_results?.result?.legacy?.screen_name || "No Name"} 
                    <img src={eachItem?.item?.itemContent?.user_results?.result?.legacy?.profile_banner_url} alt="Profile Image" /> 
                    {/* <Image src={eachItem?.item?.itemContent?.user_results?.result?.legacy?.profile_banner_url} height={20} width={20} alt='Profile Image'/>   */}
                  </h1>
                 </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )
    }  

    </div>
  )
}

export default SearchBar 



// QueenEsther@2025  

// result(object) - timeline(object) - instructions(array) - 0(object) - entries(array) - 0(object) - content(object) - items(array) - 0(object) - item(object) - itemContent(object) - user_result(object) - result(object) - legacy(object)

// location, profile_banner_url, followers_count, name, screen_name
