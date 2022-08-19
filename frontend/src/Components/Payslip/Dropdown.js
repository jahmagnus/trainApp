import React from "react";

const Dropdown = ({ getPayslips, user }) => {
  //years for the dropdown menu to be populated with.
  const years = [
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
  ];

  return (
    <div>
      <select>
        <option value="">Select year</option>
        {/* map the values from the 'years' array of objects to the dropdown */}
        {years.map((year) => (
          <option value={year.value}> {year.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
