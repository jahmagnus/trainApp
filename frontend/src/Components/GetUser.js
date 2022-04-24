import React from 'react'
import axios from 'axios'


const GetUser = () => {
    const userObject= async ()=> {
    const userData = await axios({
        method: 'GET',
        withCredentials: true,
        url: 'http://localhost:3000/getUser'
        })

        console.log('button generated', userData)
    }
    

    return(
        <div>
        <button onClick={userObject}>
            get user data 
        </button>
        </div>
    )    
    
}


export default GetUser