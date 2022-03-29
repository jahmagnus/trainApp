import React from 'react';
import Home from './Components/Home/Home'

const App = () => {

    const appStyle ={
        backgroundColor: "none"
    }

    return (
        <div className="ui grid" style={appStyle}>
            <Home/>
        </div>
    )
}

export default App