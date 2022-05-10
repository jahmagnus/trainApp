import React from 'react'


const Signout = () => {

    const linkStyle = {
        fontSize : "2rem",
        color: "black",
        textDecoration: "underline"
       
    }

const clearStorage = () => {
    localStorage.clear()
    const currentUser = localStorage.getItem("user")
    console.log(currentUser)
}


    return(
        <a style={linkStyle} href='/' onClick={clearStorage}>Signout</a>
    )
}

export default Signout