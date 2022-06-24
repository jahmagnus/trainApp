import React, { useState, useEffect } from "react";

//submit button import
import Submit from "../FormComponents/SubmitButton";
import Card from "../FormComponents/Card";

//import css
import "./IncidentForm.css";

const ContributoryFactors = ({
  prevPage,
  nextPage,
  values,
  getFactors,
  factorsArray,
  pageNum,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  //factors array is from the parent and keeps track of the state of the factors that have been selected - on loading of
  //contributory factors it will load the current state, which will allow for some form of persistance while using
  //the form
  const [valueArray, setValueArray] = useState(factorsArray);

  useEffect(() => {
    setValue();
  }, [currentValue]);

  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  const NextButtonStyle = {
    marginLeft: "2rem",
  };

  const dropdownStyle = {
    height: "15rem",
  };
  const dropdownValues = [
    { label: "Under the influence of drugs/alcohol", value: "Drugs/alcohol" },
    { label: "Ticket irregularity", value: "Ticket irreularity" },
    { label: "Electronic equipment noise", value: "Electronic equipment" },
    {
      label: "Passenger to late to join train",
      value: "Passenger late to train",
    },
    { label: "Luggage obstruction", value: "Luggage obstruction" },
    { label: "Anti-social behaviour - malicious/threatening", value: "ASB" },
    {
      label: "Football supporter anti social behaviour",
      value: "Football ASB",
    },
    { label: "Group travel - stag/hen party", value: "Group travel" },
    { label: "Smoking", value: "Smoking" },
    { label: "Involved in passenger disupute", value: "Passenger dispute" },
    { label: "Train running disruption", value: "Train disruption" },
    { label: "Equipment failure", value: "Equipment failure" },
    { label: "Reservation failure", value: "Reservation failure" },
    { label: "Reduced catering offering", value: "Catering offering" },
    { label: "Station issues", value: "Station issues" },
    { label: "Unknown", value: "Unknown" },
  ];

  //get current value from the dropdown - if it doesn't exist in the current array then add it, otherwise don't add
  const setValue = () => {
    if (!valueArray.includes(currentValue) && currentValue !== "") {
      valueArray.push(currentValue);
      getFactors(valueArray);
    }
  };

  //remove a factor from the value array
  const removeValue = (item) => {
    const index = valueArray.indexOf(item);
    valueArray.splice(index, 1);

    let updatedArray = [...valueArray];
    setValueArray(updatedArray);
    getFactors(updatedArray);
  };

  return (
    <div className="container general-container">
      <h4 class="ui header">Page: {pageNum}/8</h4>
      <div className="field">
        <label>Contributing Factors</label>
        <select
          multiple={true}
          className="ui fluid dropdown"
          style={dropdownStyle}
          onClick={(e) => {
            setCurrentValue(e.target.value);
          }}
        >
          {dropdownValues.map((factor) => (
            <option key={factor.value} value={factor.value}>
              {factor.label}
            </option>
          ))}
        </select>
      </div>

      <Card valueArray={valueArray} removeValue={removeValue} />

      <div className="row button-row">
        <div className="row">
          <button
            onClick={prevPage}
            style={PrevButtonStyle}
            className={`ui left labeled icon button`}
          >
            <i className="left arrow icon"></i>
            Back
          </button>

          <button
            onClick={nextPage}
            style={NextButtonStyle}
            className={`ui right labeled icon button`}
          >
            <i className="right arrow icon"></i>
            Next
          </button>
        </div>
        <div className="row">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default ContributoryFactors;
