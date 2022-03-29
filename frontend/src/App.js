import React from 'react';
import Home from './Components/Home/Home'

const App = () => {

    const styles = {
        backgroundColor: "green"
    }
    return (



        <div className="ui grid" style={styles}>
            <Home/>
        </div>
    )
}

export default App