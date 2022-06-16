import React from "react";


import Label from '../FormComponents/Label'

function Card({ valueArray, removeValue }) {

    const cardStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
    }


    
  return (
    <div className="ui cards" style={cardStyle}>
      <div className="card">
        <div className="content">
          <div className="header"></div>
          
          {valueArray.map((content) => (
              <Label content={ content } removeValue={removeValue}/>
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default Card;
