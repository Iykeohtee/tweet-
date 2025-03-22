const BASE_URL= 'https://twitter241.p.rapidapi.com'


// fetch data from RapidAPI
export const fetchData = async (params) => {
    const result = await fetch(`${BASE_URL}/search?type=Top&count=20&query=${params}`, {
        method: 'GET', 
        headers: {
            'x-rapidapi-key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee',
		    'x-rapidapi-host': 'twitter241.p.rapidapi.com'
        }
    })       
 
    console.log(result); // a priomise
    
    const data = await result.json();
    console.log(data)  // a json object 
    return data; 
}   




export const fetchTweets = async () => {
    const result = await fetch(`${BASE_URL}/retweets?pid=1552735248026411010&count=40`, {
        method: 'GET', 
        headers: {
            'x-rapidapi-key': '64a4596b67msh9ce0ab93fa99e67p1db0fbjsn9f18d2ae00ee',
		    'x-rapidapi-host': 'twitter241.p.rapidapi.com'
        }
    })       
 
    console.log(result);
    
    const data = await result.json();
    console.log(data) 
    return data; 
}

