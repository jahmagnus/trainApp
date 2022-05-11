import React from "react";
import TrainItem from "./TrainItem";
import Loader from "./Loader"
import WarningPage from '../WarningPage'

import axios from "axios";

const TrainList = ({departures}) => {
  let renderedList = [];
  
  let trains = departures

  
  if (!trains.all) {
    return(<Loader/>)
  } else {
    renderedList = trains.all.map((train) => {
      return <TrainItem train={train} />;
    });
  }


  
  return <div>{renderedList}</div>;
};

export default TrainList;