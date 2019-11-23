import React, { Component } from "react";
import FormInputComponent from "./shared/FormInputComponent";
import { cancelStyle, baseDivStyle } from "../utils/styles";
import { salaryPattern } from "../utils/patterns";

class EmployeeInformationComponent extends Component {
  render() {
    const {
      isCreate,
      firstName,
      lastName,
      salary,
      inputChanged,
      handleSubmit
    } = this.props;
    return (
      <div className="card" style={baseDivStyle}>
        <div className="card-header">
          <h3>{isCreate ? "Create Employee" : "Update Employee"}</h3>
        </div>

        <div className="card-body">
          <FormInputComponent
            name="firstName"
            type="text"
            labelName="First Name:"
            placeholder="Enter First Name"
            value={firstName}
            onChange={inputChanged}
          />
          <br />
          <FormInputComponent
            name="lastName"
            type="text"
            labelName="Last Name:"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={inputChanged}
          />
          <br />
          <FormInputComponent
            name="salary"
            type="number"
            labelName="Salary:"
            placeholder="Enter Salary"
            value={salary}
            onChange={inputChanged}
            pattern={salaryPattern}
          />
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleSubmit}>
            {isCreate ? "Add" : "Update"}
          </button>
          <a className="btn btn-danger" style={cancelStyle} href={"/employees"}>
            Cancel
          </a>
        </div>
      </div>
    );
  }
}

export default EmployeeInformationComponent;
