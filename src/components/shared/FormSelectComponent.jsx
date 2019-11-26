import React from "react";
import { labelStyle } from "../../style";

const FormSelectComponent = ({ name, labelName, options, onChange, value }) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <label style={labelStyle} key={"lbl" + name}>
            {labelName}
          </label>
        </div>
        <div className="col ">
          <select
            className="custom-select"
            onChange={onChange}
            value={value}
            name={name}
          >
            {options.map(option => (
              <option key={option.key} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormSelectComponent;
