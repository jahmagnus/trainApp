import React from "react";
import TrainItem from "./TrainItem";
import Loader from "./Loader"
import WarningPage from '../WarningPage'

import axios from "axios";

const TrainList = ({departures, data}) => {
  let renderedList = [];
  
  let trains = departures
    
  if (!trains.all) {
    console.log(trains)
    return <Loader/>
   
  }
 else if(trains.all.length === 0){
   return <WarningPage/>
   
  }
  else {
    console.log('else', trains)
    renderedList = trains.all.map((train) => {
      return <TrainItem train={train} />;
    });
  }

 

  
  return <div>{renderedList}</div>;
};

export default TrainList;