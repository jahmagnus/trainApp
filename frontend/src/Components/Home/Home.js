import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const iconStyles = {
        textAlign: "center",
        fontSize: "large",
        backgroundColor: "#45a29e",
        border: "0.1rem solid #0b0c10",
        borderBottom: 'none'
      };
    
      const rowStyleOne = {
        height: "60rem"
        
      };
    
      const rowStyleTwo = {
        height: "64rem",
        paddingTop: "1rem",
        marginLeft:'auto',
        marginRight: 'auto'
      };
    
      //navbar divs containg the icons and heading
      const divStyle = {
        height: "9rem",
        width: "8rem",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: '2.5rem',
        paddingBottom: '',
        color: "black",
        
        
      };
    
      const columnOneStyle = {
        borderRight: ".08rem solid black",
        height: "66rem",
        backgroundColor: "#66fcf1"
        
      };
      
     
    
      //styling for column 2 row 1
      const rowStyleUsername = {
        height: "5rem",
        paddingTop: "1.5rem",
      };
    
      //homepage user details div styles
      const rowStyleUserDetails = {
        height: "56rem",
        border: ".08rem solid black",
        paddingLeft: '0.5rem',
        backgroundColor: '#c5c6c7'
      };
    
      const gridStyle = {
        height: "65rem",
        marginLeft: "auto",
        marginRight: "auto"
      };
        
    
        const appStyle ={
            backgroundColor: "none",
            height: '65rem',
            
        }

        return(
        <div className="ui grid" style={appStyle}>
        <div className="ui two column grid" style={gridStyle}>
      <div className="six wide column" style={columnOneStyle}>
        <div className="seven column row" style={rowStyleOne}>
          <div className="row" style={iconStyles}>
            <Link to='/'><div style={divStyle}>
              <i className="big home icon"></i>
              <br />
              Home  
              
            </div>
            </Link>
          </div>

          <div className="row" style={iconStyles}>
            <Link to='/departures'> 
            <div style={divStyle}>
              <i className="big clock icon"></i>
              <br />
              Departures
            </div>
            </Link>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className=" big train icon"></i>
              <br />
              Arrivals
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className="big sun icon"></i>
              <br />
              Weather
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className="big clipboard icon"></i>
              <br />
              Incident form
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className="big first aid icon"></i>
              <br />
              Accident form
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className=" big money bill alternate icon"></i>
              <br />
              Payslips
            </div>
          </div>
        </div>
      </div>

     {/*second column on homepage*/}
      <div className="ten wide column" style={rowStyleTwo}>
        <div className="two column row" style={rowStyleTwo}>
          <div className="row" style={rowStyleUsername}>
            Hello, Generic User
          </div>

          <div className="row" style={rowStyleUserDetails}>
            User details - Pay Number ID..
          </div>
        </div>
      </div>
    </div>
            
        </div>
        
    )
}


export default Home
