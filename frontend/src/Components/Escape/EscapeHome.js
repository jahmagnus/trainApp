import React from 'react'
import { Link } from "react-router-dom";


const EscapeHome = () => {



    return (
        <div>
            <Link to="/home">
            <button className="ui inverted green button">Return Home</button>
            </Link>
        </div>
    )
}

export default EscapeHome