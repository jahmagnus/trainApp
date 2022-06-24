import React from "react";


import Label from '../FormComponents/Label'

function Card({ valueArray, removeValue }) {

    const cardStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "100%"
    }


    
  return (
    <div className="ui cards" style={cardStyle}>
      <div className="card" style={cardStyle}>
        <div className="content">
          <div className="header"></div>
          
          {valueArray.map((content) => (
              <Label key={content} content={ content } removeValue={removeValue}/>
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default Card;
