import React from "react";

const labelStyle = {
  margin: "5px"
};

const FormInputComponent = ({
  name,
  type,
  labelName,
  placeholder,
  value,
  onChange,
  pattern
}) => {
  if (pattern && type === "number") {
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
              step="0.1"
              lang="en-US"
              min="0"
              // max="10"
              pattern={pattern}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
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
            type={type}
            name={name}
            key={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormInputComponent;
