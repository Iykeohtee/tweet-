import React from 'react'
import { fetchTweets } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const Tweets = () => {

    const [result, setResult] = useState([])  
    const [loading, setLoading] = useState(false);  

 useEffect(() => {
    setLoading(true)
    const data = fetchTweets();   
    setResult(data)

    setLoading(false)      
 }, [])      

 console.log(result)

  return (
    <div className='relative top-16'>
      Tweets  
    </div>
  )
}

export default Tweets
