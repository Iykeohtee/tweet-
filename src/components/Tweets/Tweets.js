import React from 'react'
import { fetchTweets } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const Tweets = () => {

    const [result, setResult] = useState([])  
    const [loading, setLoading] = useState(false);  

 useEffect(() => {
   const getTweets = async () => {
    setLoading(true)
    const data = await fetchTweets();   
    setResult(data.result.timeline.instructions)

    setLoading(false) 
   }     
   getTweets();
 }, [])       

 console.log(result)    

  return (
    <div className='relative top-28'>   

    
    {
      loading ? <p>Loading data</p> : (
        result.map((item, index) => (
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

    </div>
  )
}

export default Tweets
