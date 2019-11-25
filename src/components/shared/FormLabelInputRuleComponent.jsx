import React, { Component } from "react";

const labelStyle = {
  margin: "5px"
};

const FormLabelInputRuleComponent = ({
  name,
  type,
  labelName,
  placeholder,
  value,
  onChange,
  rule,
  readOnly
}) => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <label style={labelStyle} key={"lbl" + name}>
            {labelName}
          </label>
        </div>
        <div className="col ">
          <input
            className="form-control"
            name={name}
            key={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly === undefined ? false : true}
          />
        </div>
        <div className="col col-lg-6">
          <label style={labelStyle} key={"rule" + rule}>
            {rule}
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormLabelInputRuleComponent;
