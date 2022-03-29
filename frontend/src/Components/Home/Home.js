import React from 'react'

const Home = () => {
   
    const iconStyles = {
        textAlign: "center"
    }

    const rowStyle ={
        height: "40rem",
        paddingTop: "1rem",
        paddingLeft: '0.5rem'

    }

    const divStyle = {
        height: "5rem",
        width: "5rem"
    }

    const columnOneStyle = {
        borderRight: '.08rem solid black'
    }

   
    return(
        <div className = "ui two column grid">
                    <div className="four wide column" style={columnOneStyle}>
                    <div className="seven column row" style={rowStyle}>
                        
                        <div className="row" style={iconStyles}>
                        <div style={divStyle}>
                        <i className="home icon"></i><br/>
                        Home
                        </div>
                        </div>

                        <div className="row" style={iconStyles}>
                            <div style={divStyle}>
                            <i className="clock icon"></i><br/>
                            Departures
                            </div>
                        </div>

                        <div className="row" style={iconStyles}>
                            <div style={divStyle}>
                            <i className="train icon"></i><br/>
                            Arrivals
                            </div>
                            
                        </div>

                        <div className="row" style={iconStyles}>
                           <div style={divStyle}>
                           <i className="sun icon"></i><br/>
                            Weather
                            </div>
                        </div>

                        <div className="row" style={iconStyles}>
                            <div style={divStyle}>
                            <i className="clipboard icon"></i><br/>
                            Incident form
                            </div>
                        </div>

                        <div className="row" style={iconStyles}>
                           <div style={divStyle}>
                           <i className="first aid icon"></i><br/>
                            Accident form
                            </div>
                        </div>

                        <div className="row" style={iconStyles}>
                           <div style={divStyle}>
                           <i className="money bill alternate icon"></i><br/>
                            Payslips
                        </div>
                        </div>
                    </div>
                    </div>
                    

                     <div className="column">
                        <div className="two column row" style={rowStyle}>
                           
                            <div className="row">
                                Hello Generic User
                            </div>
                            
                            <div className="row">
                                User details
                            </div>
                        </div>
                    </div>
        </div>
    )
}


export default Home