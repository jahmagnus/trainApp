import React from "react";
import TrainItem from "./TrainItem";
import Loader from "./Loader"
import WarningPage from '../WarningPage'



const TrainList = ({services, data}) => {
//   let renderedList = [];
  
//   let trains = services
    
//   //loader is largely just a holding icon - no real indication of loading yet
//   if (!trains.all) {
//     return <Loader/>
   
//   }
//  else if(trains.all.length === 0){
//    return <WarningPage/>
   
//   }
//   else {
//     renderedList = trains.all.map((train) => {
//       return <TrainItem train={train} />;
//     });
//   }
  
//   return <div>{renderedList}</div>;
};

export default TrainList;