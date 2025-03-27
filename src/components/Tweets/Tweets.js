import React from 'react'
import { fetchTweets } from '@/utils/fetchData'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '@/contexts/SearchContext'

const Tweets = () => {

  const { result, setResult } = useContext(SearchContext);

    const [resultt, setResultt] = useState([])  
    const [loading, setLoading] = useState(false);  

 useEffect(() => {
   const getTweets = async () => {
    setLoading(true)
    const data = await fetchTweets();   
    setResultt(data.result.timeline.instructions)

    setLoading(false) 
   }     
   getTweets();
 }, [])       

 console.log(resultt)    

  return (
    <div className='relative top-28'>   

    {
      result.length > 0 ? (
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
      ) : (
        resultt.map((item, index) => (    
          <div key={index}>  
            {item.entries?.map((entry, entryIndex) => (    
              <div key={entryIndex}>
                <h1>{entry.content?.itemContent?.user_results?.result?.legacy?.location || "No Location"}</h1>
                <h1>{entry.content?.itemContent?.user_results?.result?.legacy?.screen_name || "No Location"}</h1>
              </div>
            ))}
          </div>
        ))
      )
    }

    {/* {
      loading ? <p>Loading data</p> : (
        resultt.map((item, index) => (    
          <div key={index}>  
            {item.entries?.map((entry, entryIndex) => (    
              <div key={entryIndex}>
                <h1>{entry.content?.itemContent?.user_results?.result?.legacy?.location || "No Location"}</h1>
                <h1>{entry.content?.itemContent?.user_results?.result?.legacy?.screen_name || "No Location"}</h1>
              </div>
            ))}
          </div>
        ))
      )
    }   */}
  
  
    </div>
  )
}

export default Tweets
