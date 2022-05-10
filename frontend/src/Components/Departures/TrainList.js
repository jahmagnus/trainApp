import React from "react";
import TrainItem from "./TrainItem";
import Loader from "./Loader"

import axios from "axios";

const TrainList = ({departures}) => {
  let renderedList = [];
  
  let trains = departures

  // let trains = axios.get("/trains").then((response) => {
  //   console.log(response.data.departures)
  // });
  
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