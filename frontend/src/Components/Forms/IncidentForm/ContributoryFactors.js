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
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const [valueArray, setValueArray] = useState(factorsArray);

  useEffect(() => {
    getFactors(valueArray);
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
    { label: "Under the influence of drugs/alcohol", value: "drugs/alcohol" },
    { label: "Ticket irregularity", value: "ticket irreularity" },
    { label: "Electronic equipment noise", value: "electronic equipment" },
    {
      label: "Passenger to late to join train",
      value: "passenger late to train",
    },
    { label: "Luggage obstruction", value: "luggage obstruction" },
    { label: "Anti-social behaviour - malicious/threatening", value: "ASB" },
    {
      label: "Football supporter anti social behaviour",
      value: "football ASB",
    },
    { label: "Group travel - stag/hen party", value: "group travel" },
    { label: "Smoking", value: "smoking" },
    { label: "Involved in passenger disupute", value: "passenger dispute" },
    { label: "Train running disruption", value: "train disruption" },
    { label: "Equipment failure", value: "equipment failure" },
    { label: "Reservation failure", value: "reservation failure" },
    { label: "Reduced catering offering", value: "catering offering" },
    { label: "Station issues", value: "station issues" },
    { label: "Unknown", value: "unknown" },
  ];

  //get current value from the dropdown - if it doesn't exist in the current array then add it, otherwise don't add
  const setValue = () => {
    if (!valueArray.includes(currentValue) && currentValue !== '') {
      valueArray.push(currentValue);
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
