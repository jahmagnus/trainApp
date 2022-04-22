import React, { useState, useEffect } from "react";
import axios from "axios";


const GetUser = () => {

    const [userData, setUserData] = useState(null)

    useEffect(()=> {
        console.log(userData)
    },[userData])

    const getUser = () => {
         axios({
            method: 'GET',
            withCredentials: true,
            url: 'http://localhost:3000/getUser'
        }).then((res) => 
             setUserData(res.data)
            )
        
    }

    return (
        <button onClick={getUser}>userData </button>
    )
}


export default GetUser