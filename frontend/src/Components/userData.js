import axios from "axios";


export const getUser = async() => {
    
    
    
    const userObject= await axios({
            method: 'GET',
            withCredentials: true,
            url: 'http://localhost:3000/getUser'
        }
        )
        console.log('user data function file', JSON.stringify(userObject.data))
        return userObject     


    }