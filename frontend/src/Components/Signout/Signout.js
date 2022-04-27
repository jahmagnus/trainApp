import React from 'react'


const Signout = () => {

    const linkStyle = {
        fontSize : "2rem",
        color: "black",
        textDecoration: "underline"
       
    }


    return(
        <a style={linkStyle} href='/'>Signout</a>
    )
}

export default Signout